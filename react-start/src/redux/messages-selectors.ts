import { createSelector } from "reselect"
import { AppStateType } from "./redux-store"

const getDialogsData = (state: AppStateType) => { return state.messagesPage}

export const getMessages = createSelector(getDialogsData, (dialogsPage) => { return dialogsPage.messagesData })
export const getDialogs = createSelector(getDialogsData, (dialogsPage) => { return dialogsPage.dialogsUsersData })
export const getUserId = createSelector(getDialogsData, (dialogsPage) => { return dialogsPage.selectedUserId})
export const getIsFetching = createSelector(getDialogsData, (dialogsPage) => { return dialogsPage.isFetching})

