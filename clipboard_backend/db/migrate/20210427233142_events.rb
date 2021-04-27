class Events < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name 
      t.datetime :startTime
      t.datetime :endTime 
      t.timestamps
    end 
  end
end
