class Day < ApplicationRecord
    has_many :lessons
    validates :name, presence: true 
end
