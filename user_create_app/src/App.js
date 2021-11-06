import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const existingUsers = [
  { id: "u1", name: "Steven", age: 36 },
  { id: "u2", name: "Kelsi", age: 31 },
  { id: "u3", name: "Cayden", age: 15 },
  { id: "u4", name: "Caitlyn", age: 14 },
  { id: "u5", name: "Luca", age: 1 },
];

function App() {
  const [allUsers, setAllUsers] = useState(existingUsers);

  function formDataHandler(formData) {
    setAllUsers((prevUsers) => {
      return [formData, ...prevUsers];
    });
  }

  return (
    <div>
      <UserForm formDataHandler={formDataHandler} />
      <UserList userList={allUsers} />
    </div>
  );
}

export default App;
