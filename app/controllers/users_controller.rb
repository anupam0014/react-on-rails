class UsersController < ApplicationController
  def new
  	@user =  User.new
  end

  def create
  	user = User.create(create_user_param)
  	unless user.nil?
			render '/users/sign_in'
		else
			render json: { error: user.errors }, status: 400
		end  	
  end

  private
  def create_user_param
  	params.required(:user).permit(:name, :email, :password)
  end
end
