class Problems < ActiveRecord::Migration[5.1]
  def change
	  create_table :problems do |t|
	    t.string :problem_statement
	    t.string :editorial
	    t.string :explanation
	    t.string :programs

	    t.timestamps
	  end
  end
end
