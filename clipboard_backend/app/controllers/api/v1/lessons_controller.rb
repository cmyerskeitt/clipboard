class Api::v1::LessonsController < ApplicationController
    before_action :set_day
    
    def index 
        @lessons = @day.lessons
        render json: @lessons
    end 

    def create 
        @lesson = @day.lesson.build(lesson_params)
        if @lesson.save
            render json: @lesson
        else
            render json: {error: 'Error creating Lesson'}
        end 
    end 

    def show 
        @lesson = @day.lessons.find(params[:id])
        #  Lesson.find(params[:id])
        render json: @lesson
    end 

    def destroy 
        @lesson = Lesson.find(params[:id])
        @lesson.destroy
    end 

    
    private

    def set_day 
        @day = Day.find(params[:day_id])
    end 

    def lesson_params
        params.require(:lesson).permit(:title, :subject, :objective, :summary, :lesson_url, :day_id)
    end 
end




