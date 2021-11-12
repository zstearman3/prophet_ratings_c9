class FixTeamGameReboundRates < ActiveRecord::Migration[6.1]
  def up
    remove_column :team_games, :rebound_rate
    add_column :team_games, :offensive_rebound_rate, :decimal, scale: 5, precision: 8
    add_column :team_games, :defensive_rebound_rate, :decimal, scale: 5, precision: 8
  end

  def down
    add_column :team_games, :rebound_rate, :decimal, scale: 5, precision: 8
    remove_column :team_games, :offensive_rebound_rate
    remove_column :team_games, :defensive_rebound_rate
  end
end
