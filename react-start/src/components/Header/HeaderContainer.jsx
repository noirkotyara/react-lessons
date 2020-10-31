import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setAuthMe, setUserData } from '../../redux/authMe';
import Header from './Header';

class HeaderCl extends React.Component {
    componentDidMount() {
        // console.log(this.props);
        authAPI.isAuthMe()
            .then(data => {
                this.props.setUserData({ ...data.data });
                (data.resultCode === 0) && this.props.setAuthMe(true)
                // if(data.resultCode === 0){
                //     this.props.setAuthMe(true);
                // }
            });
    }

    render() {
        
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    
    return {
         ...state.authMe
    }
}

let HeaderContainer = connect(mapStateToProps, {
    setUserData,
    setAuthMe
})(HeaderCl);
export default HeaderContainer;