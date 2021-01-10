import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAuthID } from '../../redux/authMe-selectors';
import { getStatusThunk, setProfileThunk } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

type PathParamsType = {
    userId: string
 }
export type WithRouteProps = RouteComponentProps<PathParamsType>

const ProfilePage: React.FC<WithRouteProps> = (props) => {
    const authorizedUser = useSelector(getAuthID)
    const dispatch = useDispatch()
    

    const refreshProfile = () => {
        // : number | null
            let userID = +props.match.params.userId;
            if(!userID){
                userID = authorizedUser;
                if(!userID) return<Preloader/>
            } 
            dispatch(setProfileThunk(userID))
            dispatch(getStatusThunk(userID))
      }
      
    useEffect(() => {
        refreshProfile()
    }, [])
    useEffect(() => {
        refreshProfile()
    }, [props.match.params.userId])

    return <Profile {...props} />
}


export default  compose(
    withRouter,  
    withAuthMe
)(ProfilePage)

