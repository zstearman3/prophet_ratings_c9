class CreateTeamSeasons < ActiveRecord::Migration[6.1]
  def up
    create_table :team_seasons do |t|
      t.belongs_to :team
      t.belongs_to :season
      t.integer :wins
      t.integer :losses
      t.float :offensive_efficiency
      t.float :defensive_efficiency
      t.float :total_efficiency
      t.float :points_per_game
      t.float :points_allowed_per_game
      t.float :rebounds_per_game
      t.float :assists_per_game
      t.float :rebound_rate
      t.float :assist_rate
      t.float :allowed_assist_rate
      t.float :three_point_rate
      t.float :allowed_three_point_rate
      t.float :three_point_proficiency
      t.float :allowed_three_point_proficiency
      t.float :home_court_advantage
      t.decimal :normal_offensive_efficiency, scale: 5, precision: 8
      t.decimal :normal_defensive_efficiency, scale: 5, precision: 8
      t.decimal :normal_total_efficiency, scale: 5, precision: 8
      t.decimal :normal_rebound_rate, scale: 5, precision: 8
      t.decimal :normal_assist_rate, scale: 5, precision: 8
      t.decimal :normal_allowed_assist_rate, scale: 5, precision: 8
      t.decimal :normal_three_point_proficiency, scale: 5, precision: 8
      t.decimal :nomral_allowed_three_point_proficiency, scale: 5, precision: 8
      t.decimal :normal_home_court_advantage, scale: 5, precision: 8
      t.timestamps null: true
    end
  end

  def down
   drop_table :team_seasons
  end
end
