import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, Select, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const { Option } = Select;

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form handler
    const onFinishHandler = async(values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/register", values);
            dispatch(hideLoading());
            if (res.data.success) {
                message.success("Register Successfully!");
                navigate("/login");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("Something Went Wrong");
        }
    };

    return ( <
        >
        <
        div className = "block" >
        <
        div className = "main-text" > Event Management System < /div>

        <
        div className = "form-container" >
        <
        Form layout = "vertical"
        onFinish = { onFinishHandler }
        className = "register-form" >
        <
        h3 className = "text-center" > Register Form < /h3>

        <
        Form.Item label = "Name"
        name = "name"
        rules = {
            [{ required: true, message: 'Please enter your name' }]
        } >
        <
        Input type = "text" / >
        <
        /Form.Item>

        <
        Form.Item label = "Email"
        name = "email"
        rules = {
            [{ required: true, message: 'Please enter your email' }]
        } >
        <
        Input type = "email" / >
        <
        /Form.Item>

        <
        Form.Item label = "Password"
        name = "password"
        rules = {
            [{ required: true, message: 'Please enter your password' }]
        } >
        <
        Input type = "password" / >
        <
        /Form.Item>

        { /* Updated dropdown field according to Mongoose schema */ } <
        Form.Item label = "Role"
        name = "role"
        rules = {
            [{ required: false, message: 'Please select your role' }]
        } >
        <
        Select placeholder = "Select your role" >
        <
        Option value = "Catering" > Catering < /Option> <
        Option value = "Florist" > Florist < /Option> <
        Option value = "Lighting" > Lighting < /Option> < /
        Select > <
        /Form.Item>

        <
        Link to = "/login"
        className = "m-2" >
        Already a user ? Login here <
        /Link>

        <
        button className = "btn btn-primary"
        type = "submit" >
        Register <
        /button>

        <
        br / > < br / >

        <
        button type = "reset"
        className = "btn btn-primary" >
        Reset <
        /button> < /
        Form > <
        /div> < /
        div > <
        />
    );
};

export default Register;