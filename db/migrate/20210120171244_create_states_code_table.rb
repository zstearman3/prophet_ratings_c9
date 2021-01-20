class CreateStatesCodeTable < ActiveRecord::Migration[6.1]
  def up
    create_table :states do |t|
      t.string :name
      t.string :abbreviation
      t.timestamps null: true
    end
  end
  
  def down
    drop_table :states
  end
end
