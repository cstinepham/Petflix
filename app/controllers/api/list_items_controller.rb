class Api::ListItemsController < ApplicationController
  def index
    @listItems = ListItem.find_by(params[:list_item][:list_id])
  end

  def create
    @listItem = ListItem.new(list_movie_params)
    if @listItem.save
      render :show
    else
      render json: @listItem.errors.full_messages, status: 422
    end
  end


  def show
    @listItem = ListItem.find_by(id: params[:id])
    if @listItem
      render :show
    else
      render json: "ListItem not found.", status: 404
    end
  end


  def destroy

  end


  private

  def list_movie_params
    params.require(:list_item).permit(:movie_id, :list_id)
  end

end


