import { logInAction } from "./actions"
import axios from 'axios';
// import { queryAllByAttribute } from "@testing-library/react";

export const logIn = (id,password) => {
  return async (dispatch,) => {
    const data = {id: id,password: password}

    //validation
    if(id === "" || password === ""){
      alert("必須項目が未入力です")
      return false
    }

    await axios.post("https://login-function-iwamoto.herokuapp.com",data)

      .then(res => {
        if(res.data === null){
          dispatch(logInAction({
                isLoggedIn: false,
                uid: "",
                err: "IDまたはPASSWORDが間違っています"
            }));
            alert("IDまたはPASSWORDが間違っています");
              return false
        }else{
          const uid = res.data
          dispatch(logInAction({
            isLoggedIn: true,
            uid: uid,
            err: ""
        }));
        console.log("認証OK");
      }}
        )
    
      .catch(error => {
        console.log(error);  
      }
      )

  }
}