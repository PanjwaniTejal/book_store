class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  def index
    @books = Book.all

    if params[:min_price].present? && params[:max_price].present?
      @books = @books.where(price: params[:min_price]..params[:max_price])
    end
    @books = @books.where(level: params[:level]) if params[:level].present?
    @books = @books.joins(:authors).where("authors.first_name LIKE ?", "%#{params[:author_name]}%").uniq if params[:author_name].present?
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      @book.authors << author_records
      redirect_to books_path
    else
      render :new
    end
  end

  def show; end

  def edit; end

  def update
    if @book.update(book_params)
      @book.authors.delete_all
      @book.authors << author_records
      redirect_to books_path
    else
      render :edit
    end
  end

  def destroy
    @book.destroy
    redirect_to books_path
  end

  def search
    @books = Book.all

  end
  
  private 
  def book_params
    params.require(:book).permit(:title, :price, :level)
  end

  def set_book
    @book = Book.find_by(id: params[:id])
  end

  def author_records
    Author.where(id: params['author_ids'])
  end
end
