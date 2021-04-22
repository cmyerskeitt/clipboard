Rails.application.routes.draw do

  namespace :api do
    namespece :v1 do
      resources :lessons
      resources :days
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
