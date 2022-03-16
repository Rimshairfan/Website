import {createBrowserHistory} from "history";
import { makeObservable, observable } from "mobx";
export class WindowHistory {

history=createBrowserHistory();

constructor(){
 makeObservable(this,{
     history:observable
 })
}


}