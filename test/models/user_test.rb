require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "should require a unique email" do
    new_user = users(:user1).dup
    new_user.password = "password"
    assert_not new_user.save
  end

  test "should save a user with a unique email" do
    new_user = User.new(email: 'user3@email.com', password: 'password')
    assert new_user.save
  end
end
