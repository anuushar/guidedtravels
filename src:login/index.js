import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render (<app/>,document.getElementById("root"));
import { useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

import styles from "./index.style.css";
const index = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.index}>
      <div className={styles.indexChild} />
      <img
        className={styles.indexItem}
        alt=""
        src="/rectangle-26@2x.png"
        data-animate-on-scroll
      />
      <TextField
        className={styles.indexInner}
        sx={{ width: 551 }}
        color="primary"
        variant="filled"
        type="text"
        label="Email adress or phone number"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 551 }}
        color="primary"
        variant="filled"
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <div className={styles.lineDiv} />
      <Button
        className={styles.rectangleButton}
        sx={{ width: 292 }}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
      <div className={styles.indexChild1} />
      <Button
        className={styles.termsAndCondition}
        sx={{ width: 265 }}
        variant="text"
        color="primary"
      >
        Terms and Condition
      </Button>
      <Button
        className={styles.forgottenPassword}
        sx={{ width: 314 }}
        variant="text"
        color="primary"
      >
        Forgotten Password?
      </Button>
      <Button
        className={styles.termsAndCondition1}
        sx={{ width: 265 }}
        variant="text"
        color="primary"
      >
        Privacy Policies
      </Button>
      <img className={styles.viewHideIcon} alt="" src="/view-hide.svg" />
      <Button
        className={styles.signUp}
        sx={{ width: 190 }}
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default index;
