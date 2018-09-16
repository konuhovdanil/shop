import { connect } from 'react-redux';

import Admin from '../../components/Admin';
import { addNewPhone, checkPhoneInfo, toggleModal } from "../../actions";

function mapStateToProps(state) {
    return {
        phones: state.phones
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checkPhoneInfo: phone => dispatch(checkPhoneInfo(phone)),
        toggleModal: () => dispatch(toggleModal()),
        addNewPhone: phone => dispatch(addNewPhone(phone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);