
class Api::V1::DaysController < ApplicationController
   

    def index 
        # byebug
        days = Day.all
        render json: days
    end 

    def create 
        if Day.find.by(:date => day_params[:date])
            day= Day.find_by( :date => day_params[:date])
            redirect_to "api/v1/days/#{day.id}"
        else 
            day = Day.create(day_params) 
            render json: @day
        end 
    end 

    def show 
        day = Day.find(:id => params[:id].to_i)
        render json: @day
    end 

    
    private

    def day_params
        params.require(:day).permit(:date)
    end 
end
