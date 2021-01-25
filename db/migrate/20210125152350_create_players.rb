class CreatePlayers < ActiveRecord::Migration[6.1]
  def up
    create_table :players do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.boolean :active, default: true
      t.integer :height
      t.integer :weight
      t.string :birthplace
      t.integer :team_id, null: false
      t.integer :klass_id

      t.timestamps null: true
    end

    add_index :players, :team_id
    add_index :players, :klass_id
  end

  def down
    drop_table :players
  end
end
