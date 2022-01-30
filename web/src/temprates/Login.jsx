import React, {useState, useEffect, useCallback} from 'react';
import {LoginButton, TextInput,} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../reducks/users/operations";

const LogIn = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const inputId = useCallback((e) => {
        setId(e.target.value)
    },[]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[]);


    return (
        <div className="c-section-container">
            <div className="u-text-center u-text__headline">LOGIN</div>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true} label={"ID"} multiline={false} required={true}
                rows={1} value={id} type={"text"} onChange={inputId}
            />
            <TextInput
                fullWidth={true} label={"PASSWORD"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword}
            />
            <div className="module-spacer--medium" />
            <div className="module-spacer--medium" />
            <div className="center">
                <LoginButton label={"LOGIN"} onClick={() => dispatch(logIn(id, password))} />
            </div>
        </div>
    );
};

export default LogIn;