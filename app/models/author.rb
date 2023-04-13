class Author < ApplicationRecord
  validates_presence_of :first_name, :last_name, :date_of_birth
  has_and_belongs_to_many :books, join_table: :authors_books


  def full_name
    first_name + ' ' + last_name
  end
end
