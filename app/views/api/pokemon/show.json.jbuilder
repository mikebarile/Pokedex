  json.set! @pokemon.id do
    json.extract! @pokemon, :id, :name, :attack, :defense, :image_url,
      :moves, :poke_type, :items
  end
