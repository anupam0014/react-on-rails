class HomeController < ApplicationController
  def index
  	# user = nil
  	# if user.nil?
  	# 	render 'main/landing_page'
  	# end
  end

  def timestamp
    render json: {timestamp: Time.now.to_i}
  end
end
