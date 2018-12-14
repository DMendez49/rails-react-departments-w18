class Item < ApplicationRecord
  # Validations
  validates :name, presence: true

  # Associations
  belongs_to :department
  has_many :reviews, dependent: :destroy

  
end
