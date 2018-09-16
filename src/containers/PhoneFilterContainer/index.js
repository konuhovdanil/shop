import { connect } from 'react-redux';

import PhoneFilter from '../../components/PhoneFilter';
import { setFilter } from '../../actions';

function mapStateToProps(state) {
    return {
        phones: state.phones
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeFilter: filter => dispatch(setFilter(filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneFilter);