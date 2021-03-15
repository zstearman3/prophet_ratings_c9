module SeasonInitializer

  def initialize_season year
    season = Season.find_or_create_by(year: year)
    team_seasons = []
    Team.all.each do |team|
      team_season = {}
      team_season[:season_id] = season.id
      team_season[:team_id] = team.id
      team_seasons << team_season
    end
    TeamSeason.upsert_all(team_seasons, unique_by: [:team_id, :season_id])
  end

end