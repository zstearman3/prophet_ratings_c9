class State < ApplicationRecord
  validates :name, uniqueness: true
  validates :abbreviation, uniqueness: true
end
