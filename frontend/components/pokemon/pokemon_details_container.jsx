import {connect} from 'react-redux';
import PokemonDetails from './pokemon_details';
import { selectPokemon } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pokemonDetail: selectPokemon(state)
});

export default connect(
  mapStateToProps,
  null
)(PokemonDetails);
