class Team < ApplicationRecord
  validates :school, uniqueness: true
  validates :nickname, presence: true
  validates :abbreviation, presence: true

  belongs_to :state
  belongs_to :conference

  def to_param
    school
  end
end
