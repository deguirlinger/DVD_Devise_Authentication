Rails.application.routes.draw do
  resources :dvds
  devise_for :users
  get 'protected', to: 'pages#protected'
  get 'unprotected', to: 'pages#unprotected'
end
