class LessonSerializer < ActiveModel::Serializer
  # belongs_to :day
  attributes :title, :start, :end, :id
  # :subject, :objective, :summary, :lesson_url
end
