class CreateGames < ActiveRecord::Migration[6.1]
  def up
    create_table :games do |t|
      t.belongs_to :season
      t.belongs_to :home_team
      t.belongs_to :away_team
      t.integer :espn_id
      t.boolean :is_tournament
      t.boolean :neutral_site
      t.string :status
      t.datetime :date
      t.boolean :in_conference
      t.boolean :has_overtime
      t.integer :home_team_score
      t.integer :home_team_first_half_score
      t.integer :home_team_second_half_score
      t.integer :home_team_overtime_score
      t.boolean :home_team_winner
      t.integer :away_team_score
      t.integer :away_team_first_half_score
      t.integer :away_team_second_half_score
      t.integer :away_team_overtime_score
      t.boolean :away_team_winner
      t.timestamps null: true
    end
    add_index :games, :espn_id, unique: true
  end

  def down
    remove_index :games, :espn_id
    drop_table :games
  end
end
