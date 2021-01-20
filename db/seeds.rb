states_file = Rails.root.join('db', 'seeds', 'states.yml')
states = YAML::load_file(states_file)

states.each do |state|
  State.find_or_create_by(state)
end

conferences_file = Rails.root.join('db', 'seeds', 'conferences.yml')
conferences = YAML::load_file(conferences_file)

conferences.each do |conference|
  Conference.find_or_create_by(conference)
end