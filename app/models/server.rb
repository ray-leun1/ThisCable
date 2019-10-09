class Server < ApplicationRecord
  validates :name, presence: true
  belongs_to :user, class_name: :User, foreign_key: :admin_id

  def initialize(current_user)
    current_user.joinServer(self.id)
  end
end
