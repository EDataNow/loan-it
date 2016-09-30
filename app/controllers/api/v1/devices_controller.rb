class Api::V1::DevicesController < ApplicationController
  respond_to :json
  skip_before_action :authenticate_user!

  def index
    respond_with Device.not_broken.as_json(only: [:id, :name], include: {group: {only: :name}})
  end

  def show
    respond_with Device.find(params[:id]).as_json(include: {incident_reports: {only: [:id, :description, :usable],
      methods: [:name]}})
  end

  def create
    device = Device.new(device_params)
    if device.save
      render json: device, status: 201, location: [:api, device]
    else
      render json: { errors: device.errors }, status: 422
    end
  end

  private

    def device_params
      params.require(:device).permit(:name, :group_id)
    end
end
