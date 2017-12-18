class AddWorkflowAtateToProblems < ActiveRecord::Migration[5.1]
  def change
    add_column :problems, :workflow_state, :string
  end
end
