class AddIndexToTeamSeasons < ActiveRecord::Migration[6.1]
  def up
    add_index :team_seasons, [:team_id, :season_id], unique: true
  end

  def down
    remove_index :team_seasons, [:team_id, :season_id]
  end
end
