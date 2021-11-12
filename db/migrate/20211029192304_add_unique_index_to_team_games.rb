class AddUniqueIndexToTeamGames < ActiveRecord::Migration[6.1]
  def up
    add_index :team_games, [:game_id, :team_id], unique: true
  end

  def down
    remove_index :team_games, [:game_id, :team_id]
  end
end
