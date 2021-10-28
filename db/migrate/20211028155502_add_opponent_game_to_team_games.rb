class AddOpponentGameToTeamGames < ActiveRecord::Migration[6.1]
  def up
    add_column :team_games, :opponent_team_game_id, :integer, index: { unique: true }
  end

  def down
    remove_column :team_games, :opponent_team_game_id
  end
end
