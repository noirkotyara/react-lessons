import React from 'react';
import { Redirect } from 'react-router-dom';
import { initialStateType } from '../../redux/authMe';


export let withAuthMe = <P extends object>(Component: React.ComponentType<P>) => {
    return class WrappedContainer extends React.Component<P & initialStateType> {

        render() {
             if (this.props.isAuthMe) return <Component {...this.props as P} /> 
             else return <Redirect to='/login'></Redirect>
                
            
        }
    }
}