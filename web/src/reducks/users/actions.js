export const LOG_IN = "LOG_IN";

export const logInAction = (userState) => {
  return{
    type: "LOG_IN",
    payload: {
      isLogedIn: true,
      uid: userState.uid,
      err: userState.err
    }
  }
}