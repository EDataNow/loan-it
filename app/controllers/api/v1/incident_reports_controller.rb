class Api::V1::IncidentReportsController < ApplicationController
	respond_to :json
	before_action :set_device
  skip_before_action :authenticate_user!

  def create
    incident_report = @device.incident_reports.build(incident_report_params)
    if incident_report.save
      render json: incident_report, status: 201
    else
      render json: { errors: incident_report.errors }, status: 422
    end
  end

  private
   def incident_report_params
      params.require(:incident_report).permit(:description, :usable, :device_id, :user_id)
   end

   def set_device
      @device = Device.find(params[:device_id])
   end
end
