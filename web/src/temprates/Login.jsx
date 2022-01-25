import React, {useState, useEffect, useCallback} from 'react';
import {LoginButton, TextInput,ErrorMessage} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";
import {logIn} from "../reducks/users/operations";

const LogIn = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    // const [message, setMessage] = useState("")

    const inputId = useCallback((e) => {
        setId(e.target.value)
    },[]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[]);


    // const getMessage = () => {
    //   try{
    //     await axios.post("/",{id,password});
    //     console.log("認証OK");
    //   }catch(e){
    //     const errors = e.response.data;        
    //     setMessage(errors);
      
    // }
    // }

    // useEffect(() => {
    //   axios.get('/')
    //    .then(response =>
    //     console.log(response.date))
    //    .catch(
    //     setMessage('IDまたはPASSWORDが正しくありません'))
    // })

    return (
        <div className="c-section-container">
            <div className="u-text-center u-text__headline">LOGIN</div>
            <div className="module-spacer--medium" />
            {/* <ErrorMessage
                 value={message} errorMessage={setMessage}
            /> */}
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