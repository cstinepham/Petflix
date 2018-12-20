class Api::ListsController < ApplicationController
  def index
    @lists = current_user.lists
  end
  
  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end


  def show
    @list = List.find_by(user_id: params[:user_id])
  end


  private
  def list_params
    params.require(:list).permit(:user_id)
  end
end
