import { makeObservable, observable, action, flow} from "mobx";
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

    display = flow(function* (values) {

        try {
            const response = yield loginApi(values);
            console.log(response);
            
                this.authorize = true;
                store.windowHistory.history.push("/home/window");
            
        } catch (error) {
            console.error(error);
        }
    })
}