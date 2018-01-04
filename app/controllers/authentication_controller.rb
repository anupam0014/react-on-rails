class AuthenticationController < ApplicationController
	skip_before_action :authenticate_request

	def authenticate
		command = AuthenticateUser.call(params[:email], params[:password])
		if command.success?
			session[:auth_token] = command.result
			redirect_to root_path
		else
			redirect_to root_path
			# render json: { error: command.errors }, status: :unauthorized
		end
	end

end
