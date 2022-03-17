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
            if (response.data.Requested_Action ==  true &&  response.status==200)
            {
                localStorage.setItem ("username", response.data.displayName);

                this.authorize = true;
                window.location.href="/home/window";
            }
            else {

            }
        } catch (error) {
            console.error(error);
        }
    })
}