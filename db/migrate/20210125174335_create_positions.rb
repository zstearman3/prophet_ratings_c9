class CreatePositions < ActiveRecord::Migration[6.1]
  def up
    create_table :positions do |t|
      t.string :name
      t.string :abbreviation

      t.timestamps null: true
    end
  end

  def down
    drop_table :positions
  end
end
