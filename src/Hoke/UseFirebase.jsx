import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const UseFirebase = () => {
  const { createUser, signInUser } = useContext(AuthContext);

  //------------------ Register ------------------
  const hendelRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    createUser(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //------------------ Login ------------------

  const hendelLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      const user = result.user;
      
      console.log(user);
    });
  };

  return {
    hendelLogin,
    hendelRegister,
  };
};

export default UseFirebase;
