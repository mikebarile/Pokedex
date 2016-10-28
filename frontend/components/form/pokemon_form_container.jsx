import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import { selectItems } from '../../reducers/selectors';
import { createNewPokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (formParams) => {
    console.log('dispatch is happening!');
    dispatch(createNewPokemon(formParams));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
