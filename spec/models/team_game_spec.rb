require 'rails_helper'

RSpec.descripe TeamGame, :type => :model do

  it "is not valid without an associated team" do
    team_game = TeamGame.new(team_id: nil)
    expect(team_game).to_not be_valid
  end

end