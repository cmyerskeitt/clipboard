# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

lesson = Lesson.create(
    title: 'Intro to Poetry - Rhyming', 
    start: DateTime.new(2019,04,19,8,00),
    end: DateTime.new(2019,04,19,10,00),
  
    
    )

 lesson_two = Lesson.create(
    title: 'Intro to Poetry - Alliteration',
    start: DateTime.new(2019,04,19,12,00),
    end: DateTime.new(2019,04,19,14,00),
)
