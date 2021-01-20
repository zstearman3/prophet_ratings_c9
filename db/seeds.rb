states_file = Rails.root.join('db', 'seeds', 'states.yml')
states = YAML::load_file(states_file)

states.each do |state|
  State.find_or_create_by(state)
end