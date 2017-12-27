class AddNameToProblems < ActiveRecord::Migration[5.1]
  def change
    add_column :problems, :name, :string
  end
end
