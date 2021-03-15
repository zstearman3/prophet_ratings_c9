class CreateSeasons < ActiveRecord::Migration[6.1]
  def up
    create_table :seasons do |t|
      t.integer :year
      t.date :start_date
      t.date :end_date
      t.date :postseason_start_date
      t.timestamps null: true
    end
  end

  def down
    drop_table :seasons
  end
end
