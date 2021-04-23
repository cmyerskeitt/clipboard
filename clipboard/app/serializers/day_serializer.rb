class DaySerializer < ActiveModel::Serializer
  has_many :lessons
  attributes :id, :date
end
