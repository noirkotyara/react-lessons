import React from 'react';
import { connect } from 'react-redux';
import { logoutThunk } from '../../redux/authMe';
import Header from './Header';

class HeaderCl extends React.Component {
   
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
    logout: logoutThunk
})(HeaderCl);
export default HeaderContainer;