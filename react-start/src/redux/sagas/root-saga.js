import { all } from "redux-saga/effects";
import { sagaWatcher, sagaWatcher2 } from "./sagaTest";

export default function* rootSaga (){
    yield all([
        sagaWatcher(),
        sagaWatcher2()
    ])
}