import React from 'react';
import { Redirect } from 'react-router-dom';


export let withAuthMe = (Component) => {
    return class WrappedContainer extends React.Component {

        render() {
             if (this.props.isAuthMe) return <Component {...this.props} /> 
             else return <Redirect to='/login'></Redirect>
                
            
        }
    }
}