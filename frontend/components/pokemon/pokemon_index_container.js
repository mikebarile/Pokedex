import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

// const mapDispatchToProps = dispatch => ({
//   pokemon:
// });

export default connect(
  mapStateToProps,
  null
)(PokemonIndex);
