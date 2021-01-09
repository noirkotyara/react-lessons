import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { FilterType } from '../../redux/users-reducer';

const SearchForm: React.FC<FormPropsType> = (props) => {
    const onSubmit = (values: FormType, { setSubmitting }: FormikHelpers<FormType>) => {
        debugger;
        const valuesConverted = {
            ...values,
            friend: values.friend === 'null'
                ? null
                : values.friend === 'true'
                    ? true
                    : values.friend === 'false'
                    && false
        };
        props.onFilterChange(valuesConverted);
        setSubmitting(false);
    }
    //I need to fix this shit
    const initialValuesForForm = props.filter as any ;
    return (<div>
        Search for your friends)
        <div>
            <Formik
                initialValues={initialValuesForForm}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
               </button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>);
};

export default SearchForm

//types
type FormType = {
    term: string;
    friend: 'null' | 'true' | 'false';
};
type FormPropsType = {
    onFilterChange: (filter: FilterType) => void;
    filter: FilterType;
};