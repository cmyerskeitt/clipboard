
class Api::V1::LessonsController < ApplicationController
  
    def index 
            lessons = Lesson.all
            render json: lessons
    end 

    def create 

        lesson = Lesson.create(lesson_params)
        
        if lesson.save
            
            render json: lesson
        else
            render json: {error: 'Error creating Lesson'}
        end 
    end 

    def show 
        lesson = lessons.find(params[:id])
        if lesson 
            lesson.to_formatted_s(:rfc822)
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
    def lesson_params
        params.require(:lesson).permit(:title, :start, :end, :id)
       
    end 
end


