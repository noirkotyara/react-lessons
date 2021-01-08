import React from 'react';
import { connect } from 'react-redux';
import { logoutThunk } from '../../redux/authMe';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

let mapStateToProps = (state: AppStateType) => {
    return {...state.authMe}
}

let HeaderContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType >(mapStateToProps, {
    logout: logoutThunk
})(Header);
export default HeaderContainer;

type MapStateToProps = {
    isAuthMe: boolean
}
export type MapDispatchToProps = {
    logout: () => void
}
