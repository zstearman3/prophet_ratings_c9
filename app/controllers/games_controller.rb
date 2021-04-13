class GamesController < ApplicationController

  def schedule
    date_string = params[:date] if params[:date].present?
    if date_string.present?
      @date = Date.strptime(date_string, '%m%d%Y')
    else
      @date ||= Date.today
    end
    @games = Game.includes(:home_team, :away_team).where(date: @date)
  end

end