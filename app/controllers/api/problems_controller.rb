class Api::ProblemsController < ApplicationController
  def index
  	problems = Problem.select(:id, :name, :description)
		if problems.present?
			render json: { problems: problems }
		else
			render json: { error: problems.errors }, status: 400
		end
  end

  def create
  	Problem.create(problem_params)
  end

  private
  def problem_params
  	params.required(:problem).permit(:name, :description, :explanation)
  end
end
