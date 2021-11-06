import { useState } from "react";
import UserFormError from "./UserFormError";

function UserForm(props) {
  const [newUserName, setUserName] = useState("");
  const [newUserAge, setUserAge] = useState("");
  const [flashMessage, setFlashMessage] = useState(false);

  function userNameHandler(event) {
    setUserName(event.target.value);
  }

  function userAgeHandler(event) {
    setUserAge(event.target.value);
  }

  function getUserInfo(event) {
    event.preventDefault();

    let userNameEntered = true;
    let userAgeEntered = true;

    if (newUserName.length === 0) {
      userNameEntered = false;
    }

    if (newUserAge.length === 0) {
      userAgeEntered = false;
    }

    if (userNameEntered === true && userAgeEntered === true) {
      const newUser = {
        id: Math.random.toString(),
        name: newUserName,
        age: newUserAge,
      };

      props.formDataHandler(newUser);
      setUserName("");
      setUserAge("");
      setFlashMessage(false);
    } else {
      setFlashMessage(true);
    }
  }

  return (
    <div>
      <UserFormError flashMessage={flashMessage} />
      <form onSubmit={getUserInfo}>
        <div>
          <label>Username</label>
          <input
            type="string"
            value={newUserName}
            onChange={userNameHandler}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={newUserAge}
            onChange={userAgeHandler}
            min="1"
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
