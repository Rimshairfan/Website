import  {AuthStore} from "./AuthStore";
import { WindowHistory } from "./WindowHistory";

export const store = {
     authStore :   new AuthStore(),
     windowHistory: new WindowHistory()
}