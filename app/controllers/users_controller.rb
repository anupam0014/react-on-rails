class UsersController < ApplicationController
  def new
  	@user =  User
  end

  def create
  	binding.pry  	
  end

  def login
  	@user =  User.new
  end

end
