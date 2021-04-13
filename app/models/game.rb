class Game < ApplicationRecord
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"

  def as_json(options = {})
    if options[:to_react]
      super(except: [:created_at, :updated_at],
            include: {
              :home_team => {:except => [:created_at, :updated_at]},
              :away_team => {:except => [:created_at, :updated_at]}
            }
      )
    else
      super
    end
  end

end
