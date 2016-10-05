class Api::V1::UsersController < ApplicationController
	respond_to :json
  skip_before_action :authenticate_user!

  def index
    respond_with User.all.as_json(only: [:id, :name, :email, :admin, :group_id], methods:[:device_names])
  end

  def usersindex
  	@users = User.all
    @groups = Group.all
  end
end
