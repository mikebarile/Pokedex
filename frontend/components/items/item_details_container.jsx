import {connect} from 'react-redux';
import ItemDetails from './item_details';
import { selectItems } from '../../reducers/selectors';

const mapStateToProps = state => ({
  items: selectItems(state)
});

export default connect(
  mapStateToProps,
  null
)(ItemDetails);
