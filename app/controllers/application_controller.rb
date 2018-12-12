class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?

  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def logout
    current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def require_login
    unless current_user
      render json: { base: ['Invalid Credentials'] }, status: 401
    end
  end
end
