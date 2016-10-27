class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  private
  def poke_params
    params.require(:pokemon).permit(:poke_type, :move, :attack, :defense, :moves, :image_url)
  end
end
