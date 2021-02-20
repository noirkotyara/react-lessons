import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageThunk } from '../../redux/chat-reducer';
import { AppStateType } from '../../redux/redux-store';

type FormType = {
    message: string
}

export const ChatForm: React.FC<{}> = () => {
    const dispatch = useDispatch()
    const channelStatus = useSelector((state: AppStateType) => state.chatPage.channelStatus)
    const onSubmit = (values: FormType , { setSubmitting, resetForm }: FormikHelpers<FormType>) => {
        // todo: async setSubmitting
        console.log(values)
        if(!values.message) return;
        dispatch(sendMessageThunk(values.message))
        resetForm()
        setSubmitting(false);
    }
    

    return (<div> 
        <div>
            <Formik initialValues={{ message: '' }}  onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="message" />
                        <button type="submit" disabled={channelStatus !== 'ready'}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>);
};


