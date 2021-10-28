module StatsCalculators::TeamGameCalculator

  def calculate_percentages
    self.field_goal_percentage = ( field_goals_made.to_f / field_goals_attempted.to_f )
    self.three_point_percentage = ( three_pointers_made.to_f / three_pointers_attempted.to_f )
    self.free_thow_percentage = ( free_throws_made.to_f / free_throws_attempted_to.f )
  end

  private


end