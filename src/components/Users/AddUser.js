import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser();
    setEnteredUsername("");
    setEnteredAge("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type={"text"}
            onChange={userNameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age in (Years) </label>
          <input
            id="age"
            type={"number"}
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
