class RenameProblemStatementToDescriptionInProblems < ActiveRecord::Migration[5.1]
  def change
  	rename_column :problems, :problem_statement, :description
  end
end
