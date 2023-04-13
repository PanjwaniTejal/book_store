Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'authors#index'
  resources :authors
  resources :books
  get '/search', to: 'books#search'
end
