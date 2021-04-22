class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.integer :day_id
      t.string :title
      t.string :subject
      t.string :objective
      t.string :task
      t.string :lesson_url

      t.timestamps
    end
  end
end
