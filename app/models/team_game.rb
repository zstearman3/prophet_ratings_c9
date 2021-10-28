class TeamGame < ApplicationRecord

  belongs_to :team
  belongs_to :game
  include StatsCalculators::TeamGameCalculator

end
