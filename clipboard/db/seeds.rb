# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# monday = Day.create(date: 20210419 )

lesson = Lesson.create(
    title: 'Intro to Poetry - Rhyming', 
    startTime: DateTime.new(2019,4,19,8),
    endTime: DateTime.new(2019,4,19,10),
    subject: 'Reading', 
    objective: 'Students will be able to develop skills in reading poetry by applying a variety of reading strategies, learn about the rhyming element of poetry, and identify rhyme in a poem.', 
    summary: 'Students will learn about rhyming and how authors utilize rhyming to draw attention to their poem. Students will learn to identify rhyming as when words have the same ending sound.',
    lesson_url: "https://docs.google.com/presentation/d/1qkX1du4iM29k9yVOAsSorewng9Hb54d5b_xuw-YdVhE/edit?usp=sharing"
    )

 lesson_two = Lesson.create(
    title: 'Intro to Poetry - Alliteration',
    startTime: DateTime.new(2019,4,19,12),
    endTime: DateTime.new(2019,4,19,14),
    subject: 'Reading', 
    objective: 'Students will be able to develop skills in reading poetry by applying a variety of reading strategies, learn about the alliteration element of poetry, and identify alliteration in a poem.', 
    summary: 'Students will learn about alliteration and how authors use it for emphasis or effect. Student will learn to identify alliteration as the use of the same beginning constant sound in a line or verse.', 
    lesson_url: "https://docs.google.com/presentation/d/1qkX1du4iM29k9yVOAsSorewng9Hb54d5b_xuw-YdVhE/edit?usp=sharing"
  )