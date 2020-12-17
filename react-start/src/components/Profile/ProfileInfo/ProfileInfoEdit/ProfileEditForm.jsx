import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputComp } from '../../../common/InputChecker/InputChecker';

const ProfileEditForm = ({handleSubmit, profileData}) => {
        return <>
        <form onSubmit={handleSubmit}>
        <div>Here is our form for editing</div>
        <div> Your full name: {fieldCreator(profileData.fullName, InputComp, 'text', 'fullName' )} </div>
        <div> {fieldCreator(profileData.lookingForAJob, 'input', 'checkbox')} Looking for a job?</div>
        <div> Description: {fieldCreator(profileData.lookingForAJobDescription, InputComp, 'text', 'lookingForAJobDescription' )} </div>
        </form>
        </>
}

let fieldCreator = (name, component, type, place = '', validate = []) => {
    return (<Field name={name} component={component} type={type} placeholder={place} validate={validate}></Field>)
}

export default reduxForm({
    form: 'editProfile'
})(ProfileEditForm);