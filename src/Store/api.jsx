import axios from "axios";

export const call = (values) => {

    console.log(values);

      return  axios.post('https://dev.muawin.com:9000/LoginWithUsername', null, {

            params: {
                username: values.username,
                password: values.password
            }
        })
}
