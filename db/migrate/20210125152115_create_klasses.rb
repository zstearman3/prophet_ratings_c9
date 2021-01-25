class CreateKlasses < ActiveRecord::Migration[6.1]
  def up
    create_table :klasses do |t|
      t.string :name
      t.string :abbreviation

      t.timestamps null: true
    end
  end

  def down
    drop_table :klasses
  end
end
