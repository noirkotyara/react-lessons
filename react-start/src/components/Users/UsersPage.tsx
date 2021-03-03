import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, FilterType } from '../../redux/users-reducer';
import { getCurrentPage, getFilter, getIsFetching, getPageSize } from '../../redux/users-selectors';
import Pagination from '../common/Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import { AppStateType } from '../../redux/redux-store';
import cl from './../Users/Users.module.css';
import SearchForm from './FormType';
import Users from './Users';
import { useHistory } from 'react-router-dom';
const queryString = require('query-string');



export const UsersPage: React.FC<{}> = (props) => {

    const isFetching = useSelector<AppStateType, boolean>(getIsFetching)
    const filter = useSelector<AppStateType, FilterType>(getFilter)
    const pageSize = useSelector<AppStateType, number>(getPageSize)
    const currentPage = useSelector<AppStateType, number>(getCurrentPage)
    const dispatch = useDispatch()

    const history = useHistory()

    const changeCurPage = (page: number) => {
        dispatch(actions.changeCurPageSaga(page, pageSize))
    }
    const onFilterChange = (filter: FilterType) => {
        // dispatch(setUsersThunk(currentPage, pageSize, filter))
        dispatch(actions.setUsersSaga(currentPage, pageSize, filter))

    }
    
    useEffect(() => {
    
        const parsedFilter = queryString.parse(history.location.search.substr(1))
        let filterPage = currentPage;
        let filterURL = {term: '', friend: null} as filterURLType
        // !!''~false 
        // !!'2'~true
        if(!!parsedFilter.page) filterPage = Number(parsedFilter.page)
        if(!!parsedFilter.term) filterURL = {...filterURL, term: parsedFilter.term as string}
        switch (parsedFilter.friend) {
            case 'null':
                filterURL = { ...filterURL, friend: null }
                break
            case 'true':
                filterURL = { ...filterURL, friend: true }
                break
            case 'false':
                filterURL = { ...filterURL, friend: false }
                break
            default:
                break;
        }
        // dispatch(setUsersThunk(
        //     filterPage,
        //     pageSize, 
        //     filterURL
        // ))
        dispatch(actions.setUsersSaga(
            filterPage,
            pageSize, 
            filterURL
        ))
    }, [])
    useEffect(() => {
        const parsedForUrl: ForUrlType = {}
        if(!!filter.term) parsedForUrl.term = filter.term
        if(filter.friend !== null ) parsedForUrl.friend = String(filter.friend)
        if(currentPage !== 1) parsedForUrl.page = String(currentPage)
        
        history.push({
            pathname: '/users',
            // search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
            search: queryString.stringify(parsedForUrl)
        })
    }, [filter, currentPage])


    return (<>
        <div className={cl.userPage}>
            Choose your friends{isFetching && <span className={cl.preloader}>
                <Preloader />
            </span>}
        </div>
        <div>
            <SearchForm onFilterChange={onFilterChange} />
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


// types
type ForUrlType = {
    term?: string 
    friend?: string 
    page?: string
}
type filterURLType = {
    term: string
    friend: boolean | null
    page: number
}

