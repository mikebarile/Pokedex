import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import { selectItems } from '../../reducers/selectors';
import { createNewPokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (formParams) => dispatch(createNewPokemon(formParams))
});

export default connect(
  mapDispatchToProps,
  null
)(PokemonForm);
