Rails.application.routes.draw do
  get 'home/timestamp'

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'

  namespace :api, defaults: { format: :json } do
    resources :problems
  end

  get '*path', to: 'home#index'
end
