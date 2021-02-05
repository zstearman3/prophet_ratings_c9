class TeamsController < ApplicationController

  def index
    @teams = Team.all
  end

  def roster
    @team = Team.from_param(params[:id])
    @roster = Player.joins(:team, :klass)
                    .select("players.*, klasses.abbreviation AS klass_name")
                    .where(teams: {id: @team.id})
                    .order('last_name asc').to_a
  end

end