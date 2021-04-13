class CreateTeamGames < ActiveRecord::Migration[6.1]
  def up
    create_table :team_games do |t|
      t.belongs_to :team
      t.belongs_to :game
      t.boolean :home_game
      t.boolean :neutral_game
      t.integer :field_goals_attempted
      t.integer :field_goals_made
      t.float :field_goal_percentage
      t.integer :three_pointers_attempted
      t.integer :three_pointers_made
      t.float :three_point_percentage
      t.integer :free_throws_attempted
      t.integer :free_throws_made
      t.float :free_throw_percentage
      t.integer :rebounds
      t.integer :offensive_rebounds
      t.integer :defensive_rebounds
      t.integer :assists
      t.integer :steals
      t.integer :blocks
      t.integer :turnovers
      t.integer :fouls
      t.integer :largest_lead
      t.decimal :offensive_efficiency, scale: 5, precision: 8
      t.decimal :defensive_efficiency, scale: 5, precision: 8
      t.decimal :rebound_rate, scale: 5, precision: 8
      t.decimal :assist_rate, scale: 5, precision: 8
      t.decimal :allowed_assist_rate, scale: 5, precision: 8
      t.decimal :three_point_proficiency, scale: 5, precision: 8
      t.decimal :allowed_three_point_proficiency, scale: 5, precision: 8

      t.timestamps null: true
    end
  end

  def down
    drop_table :team_games
  end
end
