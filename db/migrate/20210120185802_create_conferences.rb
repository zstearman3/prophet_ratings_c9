class CreateConferences < ActiveRecord::Migration[6.1]
  def up
    create_table :conferences do |t|
      t.string :name
      t.string :nickname
      t.string :abbreviation
      t.string :logo_url
      t.timestamps null: true
    end
  end
  
  def down
    drop_table :conferences
  end
end
