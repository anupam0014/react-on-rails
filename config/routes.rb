Rails.application.routes.draw do
  get 'users/new'

  root 'home#index'

  post 'authenticate', to: 'authentication#authenticate'

  resources :users

  namespace :api, defaults: { format: :json } do
    resources :problems
  end

  # get '*path', to: 'home#index'
end
