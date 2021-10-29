class AddGameEspnIdToTeamGames < ActiveRecord::Migration[6.1]
  def up
    add_column :team_games, :game_espn_id, :integer
    add_column :team_games, :technical_fouls, :integer
    add_column :team_games, :flagrant_fouls, :integer
    add_column :team_games, :points, :integer
    add_column :team_games, :points_allowed, :integer
    add_column :team_games, :possessions, :float, scale: 5, precision: 8
  end

  def down
    remove_column :team_games, :game_espn_id
    remove_column :team_games, :technical_fouls
    remove_column :team_games, :flagrant_fouls
    remove_column :team_games, :points
    remove_column :team_games, :points_allowed
    remove_column :team_games, :possessions
  end
end
