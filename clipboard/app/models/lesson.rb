class Lesson < ApplicationRecord
    validate :title, presence:true 
end
