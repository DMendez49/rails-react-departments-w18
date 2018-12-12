class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :description
      t.float :price, default: 10
      t.text :image_url, default: Faker::Avatar.image
      t.belongs_to :department, foreign_key: true

      t.timestamps
    end
  end
end
