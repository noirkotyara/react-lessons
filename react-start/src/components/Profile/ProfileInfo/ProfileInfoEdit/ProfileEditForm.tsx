import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form';
import { InputComp } from '../../../common/InputChecker/InputChecker';
import cl from './../ProfileInfo.module.scss';
import checker from './../../../common/InputChecker/InputChecker.module.css';
import { ProfileType } from '../../../../types/types';


const ProfileEditForm: React.FC<InjectedFormProps<FormProfileType, OwnPropsType> & FormProfileType> = (props) => {
    let contactsArray = Object.keys(props.profileData.contacts).map(key => {
        return <div key={key}>{fieldCreator('contacts.' + key, InputComp, 'text')}</div>
    })

    return (<form onSubmit={props.handleSubmit} className={cl.editData}>
        <div>{props.error
            && <div className={checker.commonError}> {props.error} </div>}</div>
        <div>Here is our form for editing</div>
        <div> Your full name: {fieldCreator('fullName', InputComp, 'text')} </div>
        <div> About me: {fieldCreator('aboutMe', InputComp, 'text')} </div>

        <div> {fieldCreator('lookingForAJob', 'input', 'checkbox')} Looking for a job?</div>
        <div> Description: {fieldCreator('lookingForAJobDescription', InputComp, 'text')} </div>
        <div> Contacts: {contactsArray} </div>
        <button>Save changes</button>

    </form>
    );
}


let fieldCreator = (name: string,
    component: React.FC<WrappedFieldProps & {placeholder: string}> | string,
    type: string,
    validate = []) => {
    return (<Field name={name} component={component} type={type} placeholder={name} validate={validate}></Field>)
}

export default reduxForm<FormProfileType, OwnPropsType>({
    form: 'editProfile',
    enableReinitialize: true
})(ProfileEditForm);

export type FormProfileType = {
    profileData: ProfileType
}
export type OwnPropsType = {
    profileData: ProfileType
}