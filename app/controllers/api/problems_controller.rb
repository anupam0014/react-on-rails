class Api::ProblemsController < ApplicationController
  def index
  	binding.pry
  end

  def create
  	binding.pry
  end

  private
  def problem_params
  	params.required(:problem).permit(:name, :description, :solution)
  end
end
