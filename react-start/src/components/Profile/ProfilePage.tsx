import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory, useParams, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAuthID } from '../../redux/authMe-selectors';
import { getStatusThunk, setProfileThunk } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

export type PathParamsType = {
    userId: string | undefined
 }


const ProfilePage: React.FC<{}> = (props) => {
    const authorizedUser = useSelector(getAuthID)
    const dispatch = useDispatch()
    const params = useParams<PathParamsType>()

    const refreshProfile = () => {
        console.log(params.userId);
        // : number | null
            // let userID = +props.match.params.userId;
            let userID = Number(params.userId);
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
    }, [params.userId])

    return <Profile />
}


export default  compose(
    // withRouter,  
    withAuthMe
)(ProfilePage)

