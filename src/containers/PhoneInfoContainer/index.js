import {connect} from 'react-redux';

import PhoneInfo from '../../components/PhoneInfo';
import { addPhoneToCart } from '../../actions';

function mapStateToProps(state) {
    return {
        phone: state.checkPhoneInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPhone: phone => dispatch(addPhoneToCart(phone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneInfo);