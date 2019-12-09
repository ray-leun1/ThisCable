Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :memberships, only: [:show, :create]
      resources :channels, only: [:index, :create]
      resources :roles, only: [:index, :create]
    end
    resources :channels, only: [:show, :update, :destroy] do
      resources :messages, only: [:index, :create]
    end
    resources :roles, only: [:destroy]
    resources :permissions, only: [:create, :destroy]
    resources :messages, only: [:show, :update, :destroy]
  end

  delete 'api/servers/:server_id/memberships', to: 'api/memberships#destroy'

  root to: 'static_pages#root'
end
