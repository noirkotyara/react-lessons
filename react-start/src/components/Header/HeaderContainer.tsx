import React from 'react';
import { connect } from 'react-redux';
import { initialStateType, logoutThunk } from '../../redux/authMe';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

let mapStateToProps = (state: AppStateType): initialStateType => {
    return {...state.authMe}
}

let HeaderContainer = connect<initialStateType>(mapStateToProps, {
    logout: logoutThunk
})(Header);
export default HeaderContainer;