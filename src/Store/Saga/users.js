import { takeLatest, put, call } from "redux-saga/effects";
import userAction from "../Actions/userActions";

export const userRegisterWorker = function* (action) { }
export const userRegisterWatcher = function* () {
    yield takeLatest(userAction.USER_REGISTER, userRegisterWorker);
}