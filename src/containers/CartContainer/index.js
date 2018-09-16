import { connect } from 'react-redux';

import Cart from '../../components/Cart';
import { deleteGood, toggleModal } from '../../actions';

function mapStateToProps(state) {
    return {
        filter: state.filter,
        addedPhones: state.addedPhones
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteGood: (phone) => dispatch(deleteGood(phone)),
        toggleModal: () => dispatch(toggleModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);