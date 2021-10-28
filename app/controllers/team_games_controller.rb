class TeamGamesController < ApplicationController

  def validate params
    validator = Validators::TeamGameValidator.new()
    errors = validator.validate(params)
    errors
  end

  def create
    errors = validate(params)
    if errors.present?
      render status: 400, json: { errors: errors }
    end
    @team_game = TeamGame.new(params)
    if @team_game.save
      flash[:info] = "TeamGame created!"
      redirect_to @team_game.game
    else
      render status: 400, json: { errors: @team_game.errors }
    end
  end

end