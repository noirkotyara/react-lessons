import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthMe, setUserData } from '../../redux/authMe';
import Header from './Header';

class HeaderCl extends React.Component {
    componentDidMount() {
        console.log(this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            { withCredentials: true })
            .then(response => {
                this.props.setUserData({ ...response.data.data });
               
                if(response.data.resultCode === 0){
                    this.props.setAuthMe(true);
                }
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