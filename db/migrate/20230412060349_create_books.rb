class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.decimal :price, :precision => 8, :scale => 2
      t.integer :level, default: 0

      t.timestamps
    end
  end
end
