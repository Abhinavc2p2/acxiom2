import React from "react";
import Layout from "./../components/Layout";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
const ApplyDoctor = () => {
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //handle form
    const handleFinish = async(values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post(
                "/api/v1/user/apply-doctor", {
                    ...values,
                    userId: user._id,
                    timings: [
                        moment(values.timings[0]).format("HH:mm"),
                        moment(values.timings[1]).format("HH:mm"),
                    ],
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(hideLoading());
            if (res.data.success) {
                message.success(res.data.message);
                navigate("/");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("Somthing Went Wrrong ");
        }
    };
    return ( <
        Layout >
        <
        h1 className = "text-center" > Apply
        for vendors < /h1> <
        Form layout = "vertical"
        onFinish = { handleFinish }
        className = "m-3" >
        <
        h4 className = "" > Details of vendors: < /h4> <
        Row gutter = { 20 } >
        <
        Col xs = { 24 }
        md = { 24 }
        lg = { 8 } >
        <
        Form.Item label = "First Name"
        name = "firstName"
        required rules = {
            [{ required: true }]
        } >
        <
        Input type = "text"
        placeholder = "your first name" / >
        <
        /Form.Item> < /
        Col > <
        Col xs = { 24 }
        md = { 24 }
        lg = { 8 } >
        <
        Form.Item label = "Last Name"
        name = "lastName"
        required rules = {
            [{ required: true }]
        } >
        <
        Input type = "text"
        placeholder = "your last name" / >
        <
        /Form.Item> < /
        Col > <
        Col xs = { 24 }
        md = { 24 }
        lg = { 8 } >
        <
        Form.Item label = "Phone No"
        name = "phone"
        required rules = {
            [{ required: true }]
        } >
        <
        Input type = "text"
        placeholder = "your contact no" / >
        <
        /Form.Item> < /
        Col > <
        Col xs = { 24 }
        md = { 24 }
        lg = { 8 } >
        <
        Form.Item label = "Email"
        name = "email"
        required rules = {
            [{ required: true }]
        } >
        <
        Input type = "email"
        placeholder = "your email address" / >
        <
        /Form.Item> < /
        Col >

        <
        Col xs = { 24 }
        md = { 24 }
        lg = { 8 } >
        <
        Form.Item label = "Address"
        name = "address"
        required rules = {
            [{ required: true }]
        } >
        <
        Input type = "text"
        placeholder = "your address" / >
        <
        /Form.Item> < /
        Col > <
        /Row> <
        h4 > Professional Details: < /h4>

        <
        Col xs = { 24 }
        md = { 24 }
        lg = { 8 } > < /Col> <
        Col xs = { 24 }
        md = { 24 }
        lg = { 8 } >
        <
        button className = "btn btn-primary form-btn"
        type = "submit" >
        Submit <
        /button> < /
        Col >

        <
        /Form> < /
        Layout >
    );
};

export default ApplyDoctor;