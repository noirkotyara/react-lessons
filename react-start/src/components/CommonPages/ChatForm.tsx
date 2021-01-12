import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { FilterType } from '../../redux/users-reducer';
import { getFilter } from '../../redux/users-selectors';

type FormType = {
    message: string
}

export const ChatForm: React.FC<{}> = (props) => {

    const filter = useSelector<AppStateType, FilterType>(getFilter)
    const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    
    const onSubmit = (values: FormType , { setSubmitting, resetForm }: FormikHelpers<FormType>) => {
        // todo: async setSubmitting
        console.log(values)
        if(!values.message) return;
        ws.send(values.message)
        resetForm()
        setSubmitting(false);
    }

    return (<div> 
        <div>
            <Formik initialValues={{ message: '' }}  onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="message" />
                        <button type="submit" disabled={isSubmitting}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>);
};





//types
