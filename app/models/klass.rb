class Klass < ApplicationRecord
  validates :name, uniqueness: true
  validates :abbreviation, uniqueness: true
end
