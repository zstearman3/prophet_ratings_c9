class GamesController < ApplicationController

  def schedule
    date_string = params[:date] if params[:date].present?
    if date_string.present?
      @date = Date.strptime(date_string, '%m%d%Y')
    else
      @date ||= Date.today
    end
    datetime = @date.to_time
    start_time = datetime.beginning_of_day + 6.hours
    end_time = datetime.end_of_day + 6.hours
    @games = Game.includes(:home_team, :away_team)
                 .where('date BETWEEN ? AND ?', start_time, end_time)
                 .order('date asc')
  end

end