class Api::v1::DaysController < ApplicationController

    def index 
        @days = Day.all
        render json: @Days
    end 

    def create 
        @day = Day.new(day_params) 
        if @day.save
            render json: @day
        else
            render json: {error: 'Error creating Day'}
        end 
    end 

    def show 
        @day = Day.find(params[:id])
        render json: @day
    end 

    
    private

    def day_params
        params.require(:day).permit(:date)
    end 
end
