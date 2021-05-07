class LessonSerializer < ActiveModel::Serializer
  # belongs_to :day
  attributes :title, :start, :end, :id

end
e