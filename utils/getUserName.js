export function getUserName(userNameArg) {
  const index = userNameArg.indexOf("=");
  if (userNameArg.slice(0, index) === "username") {
    let userName = userNameArg.slice(index + 1);
    if(userName){
        userName=userName.slice(0,1).toUpperCase()+userName.slice(1)
    }
    return userName ? userName : false;
  }
}
