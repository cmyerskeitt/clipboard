class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :subject
      t.text :objective
      t.text :summary
      t.string :lesson_url
 

      t.timestamps
    end
  end
end
