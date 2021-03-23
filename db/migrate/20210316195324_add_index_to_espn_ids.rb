class AddIndexToEspnIds < ActiveRecord::Migration[6.1]
  def up
    add_index :teams, :espn_id, unique: true
  end

  def down
    remove_index :teams, :espn_id
  end
end
