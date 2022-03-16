import { makeObservable, observable, computed, action, flow, values } from "mobx";
import { loginApi } from './api';
import { store } from ".";

export class AuthStore {
    authorize = false;

    constructor() {
        makeObservable(this, {
            authorize: observable,
            display: action.bound,

        })

    }

    display = flow(function* (val) {

        try {
            const response = yield loginApi(val);
            console.log(response);
            
                this.authorize = true;
                store.windowHistory.history.push("/home/window");
            
        } catch (error) {
            console.error(error);
        }
    })
}