class ApplicationController < ActionController::Base
	# protect_from_forgery with: :null_session
  before_action :authenticate_request
  attr_reader :current_user

  private
  def authenticate_request
  	@current_user = AuthorizeApiRequest.call(request.headers).result
  	binding.pry
 		unless @current_user
 			render 'users/sign_in' if !['new', 'create'].include? params[:action] 
 		end
  end
end
