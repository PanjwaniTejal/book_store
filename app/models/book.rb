class Book < ApplicationRecord
  validates_presence_of :title, :price
  has_and_belongs_to_many :authors, join_table: :authors_books
  
  enum level: [:beginner, :intermediate, :advanced]
end
