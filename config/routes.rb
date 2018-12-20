Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :movies, only:[:index, :show]
    resources :list_items, only: [:create, :destroy, :show, :index]
    resources :lists, only: [:create, :show, :index]
  end
end

