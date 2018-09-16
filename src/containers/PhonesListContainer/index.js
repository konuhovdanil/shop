import { connect } from 'react-redux';

import PhonesList from '../../components/PhonesList';
import { checkPhoneInfo, addPhoneToCart } from '../../actions';

function mapStateToProps(state) {
    return {
        phones: state.phones,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkPhoneInfo: phone => dispatch(checkPhoneInfo(phone)),
        addPhone: phone => dispatch(addPhoneToCart(phone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);