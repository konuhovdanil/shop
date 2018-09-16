import { connect } from 'react-redux';

import Modal from '../../components/Modal';
import { toggleModal } from '../../actions';

function mapStateToProps(state) {
    return { isModalOpen: state.isModalOpen };
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(toggleModal())
    }
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;