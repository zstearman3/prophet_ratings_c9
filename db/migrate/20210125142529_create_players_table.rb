class CreatePlayersTable < ActiveRecord::Migration[6.1]
  def up
    create_table :players do |t|

      t.timestamps null: true
    end
  end

  def down
    drop_table :players
  end
end
