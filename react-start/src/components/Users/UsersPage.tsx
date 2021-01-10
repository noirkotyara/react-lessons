import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurPageThunk, FilterType, setUsersThunk } from '../../redux/users-reducer';
import { getCurrentPage, getFilter, getIsFetching, getPageSize } from '../../redux/users-selectors';
import Pagination from '../common/Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import { AppStateType } from '../../redux/redux-store';
import cl from './../Users/Users.module.css';
import SearchForm from './FormType';
import Users from './Users';



export const UsersPage: React.FC<{}> = (props) => {

    const isFetching = useSelector<AppStateType, boolean>(getIsFetching)
    const filter = useSelector<AppStateType, FilterType>(getFilter)
    const pageSize = useSelector<AppStateType, number>(getPageSize)
    const currentPage = useSelector<AppStateType, number>(getCurrentPage)
    const dispatch = useDispatch()

    const changeCurPage = (page: number) => {
        dispatch(changeCurPageThunk(page, pageSize))
    }
    const onFilterChange = (filter: FilterType) => {
        dispatch(setUsersThunk(currentPage, pageSize, filter))
    }

    useEffect(() => {
        dispatch(setUsersThunk(currentPage, pageSize, filter))
    }, [])

// todo: after component`s death it will be clean)
// { term: '', friend: null }

    return (<>
        <div className={cl.userPage}>
            Choose your friends{isFetching && <span className={cl.preloader}>
                <Preloader />
            </span>}
        </div>
        <div>
            <SearchForm onFilterChange={onFilterChange} filter={filter} />
        </div>
        <div className={cl.pagination}>
            <Pagination
                changeCurPage={changeCurPage}
                pageSize={pageSize}
                currentPage={currentPage}
            /> </div>
        {!isFetching
            && <Users
                onFilterChange={onFilterChange}
                filter={filter}
            />}
    </>

    )
}


