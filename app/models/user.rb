class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :memberships, :dependent => :destroy
  has_many :servers, through: :memberships, source: :server
  has_many :messages, class_name: :Message, foreign_key: :author_id
  has_many :user_roles, :dependent => :destroy
  has_many :roles, through: :user_roles, source: :role
  has_many :joined_channels, through: :roles, source: :channels

  has_one_attached :profile_img

  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save
    session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end
end
