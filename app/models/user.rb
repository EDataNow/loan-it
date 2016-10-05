# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  admin                  :boolean          default(FALSE)
#  name                   :string
#  image                  :string
#  auth_token             :string           default("")
#  group_id               :integer
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include Authenticable

  mount_uploader :image, ImageUploader
  validates :auth_token, uniqueness: true
  before_create :generate_authentication_token!

  has_many :loans, ->() { where(active: true).order(created_at: :desc) }

  has_many :incident_reports

  has_many :devices, through: :loans

  belongs_to :group

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def user_email
  	try(:email)
	end

	def device_names
    devices.collect(&:name)
  end

  def password_required?
    self.admin
  end
end
