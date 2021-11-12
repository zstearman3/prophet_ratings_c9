class Validators::TeamGameValidator

  def validate params, errors = []
    _validate_uniqueness(params, errors)
    errors
  end

  private

  def _validate_uniqueness params, errors
    return unless TeamGame.find_by(team_id: params[:team_id], game_id: params[:game_id])
    errors.push("A TeamGame already exists for game_id: #{params[:game_id]} and team_id: #{params[:team_id]}.")
  end
end