import React from 'react';
import { connect } from 'react-redux';
import { authMeSuccessThunk } from '../../redux/authMe';
import Header from './Header';

class HeaderCl extends React.Component {
    componentDidMount() {
       // this.props.authMeSuccess();
    }
    render() {
        return <> <Header {...this.props} /> </>
    }
}
let mapStateToProps = (state) => {
    return {
         ...state.authMe
    }
}

let HeaderContainer = connect(mapStateToProps, {
    authMeSuccess: authMeSuccessThunk
})(HeaderCl);
export default HeaderContainer;