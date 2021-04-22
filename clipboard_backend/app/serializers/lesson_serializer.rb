class LessonSerializer < ActiveModel::Serializer
  attributes :title, :subject, :objective, :summary, :lesson_url, :day_id
end 
