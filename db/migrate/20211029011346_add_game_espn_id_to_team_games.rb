class AddGameEspnIdToTeamGames < ActiveRecord::Migration[6.1]
  def up
    add_column :team_games, :game_espn_id, :integer
    add_column :team_games, :technical_fouls, :integer
    add_column :team_games, :flagrant_fouls, :integer
  end

  def down
    remove_column :team_games, :game_espn_id
    remove_column :team_games, :technical_fouls
    remove_column :team_games, :flagrant_fouls
  end
end
