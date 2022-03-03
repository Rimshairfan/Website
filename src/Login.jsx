import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Form, Formik, Field, useFormik, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Login = () => {
    const GridStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const btnStyle = { margin: '12px 0' }
    const history = useHistory();

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
            console.log(values);
            history.push("/Window");
            axios.post('https://dev.muawin.com:9000/LoginWithUsername', null, {
                params: {
                    username: values.username,
                    password: values.password
                }


            }).then(result => {
                console.log(result);
            }).catch(error => {
                console.log(error)
            })


        },





    })


    return (
        <Grid style={GridStyle}>

            {/* <Paper elevation={10}  style={paperStyle}> */}
            <Grid align='center'>
                <Avatar src=""></Avatar>
                <h2> Sign in </h2>
            </Grid>
            <Formik >
                {() => (
                    <Form onSubmit={formik.handleSubmit}  >
                        <Field as={TextField}
                            id="standard-basic"
                            name='username'
                            onChange={formik.handleChange}
                            values={formik.values.username}
                            label="username"
                            placeholder='Enter Username'
                            variant="standard"


                            fullWidth />
                        {
                            formik.touched.username && formik.errors.username ?
                                <div class="error_msg">{formik.errors.username}</div> : null
                        }
                        <Field as={TextField}
                            id="standard-basic"
                            label="Password"
                            onChange={formik.handleChange}
                            values={formik.values.password}
                            name='password'
                            placeholder='Enter Password'
                            type={'password'}
                            variant="standard" fullWidth />
                        {
                            formik.touched.password && formik.errors.password ?
                                <div class="error_msg">{formik.errors.password}</div> : null
                        }
                        <FormGroup>
                            <Field as={FormControlLabel}
                                control={<Checkbox defaultChecked />}
                                label="Remember me" />

                        </FormGroup>
                       
                            <Button
                                variant="contained"
                                type='submit'
                                onClick={formik.handleSubmit}
                                name='submit'
                                fullWidth
                                style={btnStyle}>
                                Sign In
                            </Button>
                        
                    </Form>
                )}

            </Formik>


            {/* </Paper> */}
        </Grid>
    );
}

export default Login;       