# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_28_155502) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conferences", force: :cascade do |t|
    t.string "name"
    t.string "nickname"
    t.string "abbreviation"
    t.string "logo_url"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "games", force: :cascade do |t|
    t.bigint "season_id"
    t.bigint "home_team_id"
    t.bigint "away_team_id"
    t.integer "espn_id"
    t.boolean "is_tournament"
    t.boolean "neutral_site"
    t.string "status"
    t.datetime "date"
    t.boolean "in_conference"
    t.boolean "has_overtime"
    t.integer "home_team_score"
    t.integer "home_team_first_half_score"
    t.integer "home_team_second_half_score"
    t.integer "home_team_overtime_score"
    t.boolean "home_team_winner"
    t.integer "away_team_score"
    t.integer "away_team_first_half_score"
    t.integer "away_team_second_half_score"
    t.integer "away_team_overtime_score"
    t.boolean "away_team_winner"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["away_team_id"], name: "index_games_on_away_team_id"
    t.index ["espn_id"], name: "index_games_on_espn_id", unique: true
    t.index ["home_team_id"], name: "index_games_on_home_team_id"
    t.index ["season_id"], name: "index_games_on_season_id"
  end

  create_table "klasses", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.boolean "active", default: true
    t.integer "jersey_number"
    t.integer "position_id"
    t.integer "height"
    t.integer "weight"
    t.string "birthplace"
    t.integer "team_id", null: false
    t.integer "klass_id"
    t.integer "espn_id"
    t.string "espn_url"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["espn_id"], name: "index_players_on_espn_id", unique: true
    t.index ["klass_id"], name: "index_players_on_klass_id"
    t.index ["position_id"], name: "index_players_on_position_id"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "positions", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "seasons", force: :cascade do |t|
    t.integer "year"
    t.date "start_date"
    t.date "end_date"
    t.date "postseason_start_date"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "states", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "team_games", force: :cascade do |t|
    t.bigint "team_id"
    t.bigint "game_id"
    t.boolean "home_game"
    t.boolean "neutral_game"
    t.integer "field_goals_attempted"
    t.integer "field_goals_made"
    t.float "field_goal_percentage"
    t.integer "three_pointers_attempted"
    t.integer "three_pointers_made"
    t.float "three_point_percentage"
    t.integer "free_throws_attempted"
    t.integer "free_throws_made"
    t.float "free_throw_percentage"
    t.integer "rebounds"
    t.integer "offensive_rebounds"
    t.integer "defensive_rebounds"
    t.integer "assists"
    t.integer "steals"
    t.integer "blocks"
    t.integer "turnovers"
    t.integer "fouls"
    t.integer "largest_lead"
    t.decimal "offensive_efficiency", precision: 8, scale: 5
    t.decimal "defensive_efficiency", precision: 8, scale: 5
    t.decimal "rebound_rate", precision: 8, scale: 5
    t.decimal "assist_rate", precision: 8, scale: 5
    t.decimal "allowed_assist_rate", precision: 8, scale: 5
    t.decimal "three_point_proficiency", precision: 8, scale: 5
    t.decimal "allowed_three_point_proficiency", precision: 8, scale: 5
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.integer "opponent_team_game_id"
    t.index ["game_id"], name: "index_team_games_on_game_id"
    t.index ["team_id"], name: "index_team_games_on_team_id"
  end

  create_table "team_seasons", force: :cascade do |t|
    t.bigint "team_id"
    t.bigint "season_id"
    t.integer "wins"
    t.integer "losses"
    t.float "offensive_efficiency"
    t.float "defensive_efficiency"
    t.float "total_efficiency"
    t.float "points_per_game"
    t.float "points_allowed_per_game"
    t.float "rebounds_per_game"
    t.float "assists_per_game"
    t.float "rebound_rate"
    t.float "assist_rate"
    t.float "allowed_assist_rate"
    t.float "three_point_rate"
    t.float "allowed_three_point_rate"
    t.float "three_point_proficiency"
    t.float "allowed_three_point_proficiency"
    t.float "home_court_advantage"
    t.decimal "normal_offensive_efficiency", precision: 8, scale: 5
    t.decimal "normal_defensive_efficiency", precision: 8, scale: 5
    t.decimal "normal_total_efficiency", precision: 8, scale: 5
    t.decimal "normal_rebound_rate", precision: 8, scale: 5
    t.decimal "normal_assist_rate", precision: 8, scale: 5
    t.decimal "normal_allowed_assist_rate", precision: 8, scale: 5
    t.decimal "normal_three_point_proficiency", precision: 8, scale: 5
    t.decimal "nomral_allowed_three_point_proficiency", precision: 8, scale: 5
    t.decimal "normal_home_court_advantage", precision: 8, scale: 5
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["season_id"], name: "index_team_seasons_on_season_id"
    t.index ["team_id", "season_id"], name: "index_team_seasons_on_team_id_and_season_id", unique: true
    t.index ["team_id"], name: "index_team_seasons_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "school", null: false
    t.string "nickname", null: false
    t.string "abbreviation", null: false
    t.string "primary_color"
    t.string "secondary_color"
    t.string "city"
    t.integer "state_id"
    t.integer "conference_id"
    t.string "espn_url"
    t.string "logo_url"
    t.integer "espn_id", null: false
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["conference_id"], name: "index_teams_on_conference_id"
    t.index ["espn_id"], name: "index_teams_on_espn_id", unique: true
    t.index ["school"], name: "index_teams_on_school", unique: true
    t.index ["state_id"], name: "index_teams_on_state_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
