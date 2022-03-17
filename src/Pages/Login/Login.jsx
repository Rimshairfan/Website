import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Form, Formik, Field, useFormik} from 'formik';

import * as Yup from 'yup';
import { store } from '../../Store';

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: 550
    },
    field: {
        width: 400,

        marginLeft: 300
    },

    btn: {

        width: 400,

    }

}));
export const Login = () => {

    // const fieldstyle = {
    //     width: 300,
    //     margin: "20px auto"
    // }
    // const GridStyle = { padding: 20, height: '70vh',  width: 300, margin: "20px auto" }
    // const btnStyle = { margin: '12px 0', margin: "20px auto" }
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        }
        ,
        validationSchema: Yup.object({
            username: Yup.string().required('username is required'),
            password: Yup.string().required('password is required'),

        }),

        onSubmit: (values) => {
            store.authStore.display(values);
        }
    })

    return (

        <Grid
        //  style={GridStyle}
        >
            {/* //  <Paper elevation={10}  style={paperStyle}> */}
            <Grid align='center' marginTop={10}>
                <Avatar src=""></Avatar>
                <h2 align='center'> Sign in </h2>
            </Grid>
            <Formik >
                {() => (
                    <Form onSubmit={formik.handleSubmit} className={classes.root}>
                        <TextField
                            id="filled-basic" variant="filled"
                            name='username'
                            onChange={formik.handleChange}
                            values={formik.values.username}

                            placeholder='Enter Username'
                            // label="username"
                            autoComplete='off'
                            className={classes.field} 

                        />
                        {
                            formik.touched.username && formik.errors.username ?
                                <div class="error_msg">{formik.errors.username}</div> : null
                        }
                        <br></br>
                        <TextField
                            id="filled-basic" variant="filled"
                            // label="Password"
                            onChange={formik.handleChange}
                            values={formik.values.password}
                            name='password'
                            className={classes.field}
                            placeholder='Enter Password'
                            type={'password'}
                        />
                        {
                            formik.touched.password && formik.errors.password ?
                                <div class="error_msg">{formik.errors.password}</div> : null
                        }
                        <FormGroup>
                            <Field as={FormControlLabel}
                                control={<Checkbox defaultChecked />}
                                label="Remember me"
                                className={classes.field}

                            />

                        </FormGroup>

                        <Button
                            variant="contained"
                            type='submit'
                            onClick={formik.handleSubmit}
                            name='submit'
                            className={classes.btn}

                        >
                            Sign In
                        </Button>

                    </Form>

                )}

            </Formik>
            {/* </Paper> */}
        </Grid>
    );
}

