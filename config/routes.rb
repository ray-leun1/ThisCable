Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :channels, only: [:index, :create]
      resources :roles, only: [:index, :create]
    end
    resources :channels, only: [:show, :update, :destroy]
    resources :roles, only: [:destroy]
  end

  root to: 'static_pages#root'
end
