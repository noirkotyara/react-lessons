import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessageThunk } from '../../redux/chat-reducer';

type FormType = {
    message: string
}

export const ChatForm: React.FC<{}> = () => {
    const dispatch = useDispatch()
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
                        <button type="submit" disabled={isSubmitting}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>);
};


