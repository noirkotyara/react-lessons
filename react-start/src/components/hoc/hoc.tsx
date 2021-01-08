import React, { Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { initialStateType } from '../../redux/authMe';


export let withAuthMe = <P extends object>(Component: React.ComponentType<P>) => {
    return class WrappedContainer extends React.Component<P & initialStateType> {
        render() {
            let {isAuthMe, ...restProps} = this.props;
            if (this.props.isAuthMe) return <Component {...restProps as P} />
            else return <Redirect to='/login'></Redirect>
        }
    }
}

export function withSuspense <WCP>(Component: React.ComponentType<WCP>){
    return  (props: WCP) => {
    return (<Suspense fallback={<h1>Still Loading…</h1>}>
        <Component {...props} />
    </Suspense>
    )

}} 