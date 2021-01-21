class CreateTeams < ActiveRecord::Migration[6.1]
  def up
    create_table :teams do |t|
      t.string :school, null: false
      t.string :nickname, null: false
      t.string :abbreviation, null: false
      t.string :primary_color
      t.string :secondary_color
      t.string :city
      t.integer :state_id
      t.integer :conference_id
      t.string :espn_url
      t.string :logo_url
      t.integer :espn_id, null: false

      t.timestamps null: true
    end

    add_index :teams, :school, unique: true
    add_index :teams, :conference_id
    add_index :teams, :state_id
  end

  def down
    drop_table :teams
  end

end
