
class Api::V1::LessonsController < ApplicationController
  
    # before_action :set_day
    
    def index 
            lessons = Lesson.all
            render json: lessons
    end 

    def create 
        binding.pry

        lesson = Lesson.create(lesson_params)
        # binding.pry
        if lesson.save
            # binding.pry
            render json: lesson
        else
            render json: {error: 'Error creating Lesson'}
        end 
    end 

    def show 
        lesson = lessons.find(params[:id])
        if lesson 
            lesson.to_formatted_s(:rfc822)
            # binding.pry
          
        #  Lesson.find(params[:id])
            render json: lesson
        else
            redirect_to api_v1_lessons_path if !lesson
        end
    end 

    def destroy 
        lesson = Lesson.find(params[:id])
        lesson.destroy
        render json: lesson
    end 

    
    private

    # def set_day 
    #     @day = Day.find(params[:day_id])
    # end 

    def lesson_params
        params.require(:lesson).permit(:title, :start, :end, :id)
            # , :subject, :objective, :summary, :lesson_url, :day_id)
    end 
end
