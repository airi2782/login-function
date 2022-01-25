import { logInAction } from "./actions"
import axios from 'axios';

export const logIn = (id,password) => {
  return async (dispatch,) => {

    //validation
    if(id === "" || password === ""){
      alert("必須項目が未入力です")
      return false
    }
    // const data = {id: id,password: password}
    // await fetch('/',{
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'default',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(data)
    // })
    await axios.get("http://localhost:3000",{
      id: id,
      password: password})

      .then(res => {
        console.log(res.data);
        // const user = res.user
        // if(user) {
        //   const uid = user.uid
        
        //   dispatch(logInAction({
        //     isLoggedIn: true,
        //     uid: uid,
        //     err: ""
        // }));}
        // console.log("認証OK");
      }
        )
      // .catch(error => {
      //   dispatch(logInAction({
      //     isLoggedIn: false,
      //     uid: "",
      //     err: "IDまたはPASSWORDが間違っています"
      //   }))
      //   alert("IDまたはPASSWORDが間違っています");
      //   console.log(error);
        
      // }
      // )
        
        
    


  }
}