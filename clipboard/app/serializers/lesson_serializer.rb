class LessonSerializer < ActiveModel::Serializer
  belongs_to :day
  attributes :title, :startTime, :endTime, :subject, :objective, :summary, :lesson_url, :day_id
end
