
json.array! @users do |user|
	if user.admin
	  json.name user.name
	  json.email user.email
	  json.devices user.device_names
	  json.admin user.admin
	end
end

json.array! @groups do |group|
  json.name group.name
	json.users  group.users
	json.users group.users do |user|
		json.name user.name
		json.email user.email
		json.devices user.devices do |device|
			json.name device.name
			json.status device.working_status
		end
	end
end