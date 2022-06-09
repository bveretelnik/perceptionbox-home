import React, { useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import styles from "./Login.module.scss";

export const Login = ({ setUser }) => {
  const responseFacebook = (response) => {
    setUser(response);
  };

  useEffect(() => {
    return setUser(null);
  }, []);

  return (
    <div className={styles.login}>
      <FacebookLogin
        appId="536102324827115"
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};
