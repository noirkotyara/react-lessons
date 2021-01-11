import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { FilterType } from '../../redux/users-reducer';
import { getFilter } from '../../redux/users-selectors';

const SearchForm: React.FC<FormPropsType> = (props) => {

    const filter = useSelector<AppStateType, FilterType>(getFilter)

    const onSubmit = (values: FormType, { setSubmitting }: FormikHelpers<FormType>) => {
        const valuesConverted = {
            ...values,
            friend: values.friend === 'null'
                ? null
                : values.friend === 'true'
                    ? true
                    : values.friend === 'false'
                    && false
        };
        props.onFilterChange(valuesConverted)
        // todo: async setSubmitting
        setSubmitting(false);
    }

    return (<div>
        Search for your friends)
        <div>
            <Formik
                enableReinitialize
                initialValues={
                    {
                        term: filter.term,
                        friend: String(filter.friend) as FriendFormType
                    }
                }
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
type FriendFormType = 'null' | 'true' | 'false'
type FormType = {
    term: string
    friend: FriendFormType
}
type FormPropsType = {
    onFilterChange: (filter: FilterType) => void
}