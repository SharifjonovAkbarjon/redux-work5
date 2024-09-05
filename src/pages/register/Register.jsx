import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

const Register = ({ show, setShow }) => {
    const onFinish = (values) => {
        console.log(values);
        mainUrl.post("/admins/sign-in", values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }; 
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>

        </>
    )
}

export default Register