klasses = [
  ["Freshman", "FR"],
  ["Sophomore", "SO"],
  ["Junior", "JR"],
  ["Senior", "SR"],
]

klasses.each do |klass|
  new_klass = Klass.find_or_create_by(abbreviation: klass[1])
  new_klass.name = klass[0]
  new_klass.save
end
puts "There are #{Klass.count} klasses in the database."

states_file = Rails.root.join('db', 'seeds', 'states.yml')
states = YAML::load_file(states_file)

states.each do |state|
  State.find_or_create_by(state)
end
puts "There are #{State.count} states in the database."

conferences_file = Rails.root.join('db', 'seeds', 'conferences.yml')
conferences = YAML::load_file(conferences_file)

conferences.each do |conference|
  Conference.find_or_create_by(conference)
end
puts "There are #{Conference.count} conferences in the database."

teams_file = Rails.root.join('db', 'seeds', 'teams.yml')
teams = YAML::load_file(teams_file)

team_count = 0
teams.each do |t|
  team = Team.find_or_initialize_by(school: t['school'])
  team.update(t.except('state', 'conference'))
  team.state = State.find_by(abbreviation: t['state'])
  team.conference = Conference.find_by(abbreviation: t['conference'])
  raise("Error in #{team.school} record: #{team.errors.full_messages}") unless team.valid?
  team_count += 1 if team.save
end

puts "#{team_count} teams have been added to the database."