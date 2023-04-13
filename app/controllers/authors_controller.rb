class AuthorsController < ApplicationController
  before_action :set_author, only: [:show, :edit, :update, :destroy]

  def index
    @authors = Author.all
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.new(author_params)
    if @author.save
      redirect_to authors_path
    else
      render :new
    end
  end

  def show; end

  def edit; end

  def update
    if @author.update(author_params)
      redirect_to authors_path
    else
      render :edit
    end
  end

  def destroy
    if @author.destroy
      redirect_to authors_path
    else
      redirect_to authors_path
    end
  end
  
  private 
  def author_params
    params.require(:author).permit(:first_name, :last_name, :date_of_birth)
  end

  def set_author
    @author = Author.find_by(id: params[:id])
  end
end
