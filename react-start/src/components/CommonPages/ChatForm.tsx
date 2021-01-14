import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';

type FormType = {
    message: string
}

export const ChatForm: React.FC<{ws: WebSocket | null}> = ({ws}) => {

    let [isOpen, setIsOpen] = useState<'pending' | 'ready'>('pending')
   
    const onSubmit = (values: FormType , { setSubmitting, resetForm }: FormikHelpers<FormType>) => {
        // todo: async setSubmitting
        console.log(values)
        if(!values.message) return;
        if(ws !== null){
            ws.send(values.message)
        }
        
        resetForm()
        setSubmitting(false);
    }
    const connectionIsStable = () => {
        setIsOpen('ready');
    };
    useEffect(() => {
        if(ws !== null) {
            ws.addEventListener('open', connectionIsStable)
        }
        return () => {
            ws !== null && ws.removeEventListener('open', connectionIsStable) }
    }, [ws])

    return (<div> 
        <div>
            <Formik initialValues={{ message: '' }}  onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="message" />
                        <button type="submit" disabled={isSubmitting || (isOpen !== 'ready')}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>);
};


