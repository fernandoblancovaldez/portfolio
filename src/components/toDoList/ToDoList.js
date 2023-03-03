import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ToDoListHome from "./ToDoListHome";
import ToDoListLogg from "./ToDoListLogg";
import firebaseApp from "../../helpers/toDoListCreds";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

const ToDoList = () => {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setGlobalUser(userFirebase);
    } else {
      setGlobalUser(null);
    }
  });
  return (
    <Card className="glass text-secondary border-glass shadow py-3 gap-3 text-center align-items-center mx-auto">
      {globalUser ? (
        <ToDoListHome userEmail={globalUser.email} />
      ) : (
        <ToDoListLogg />
      )}
    </Card>
  );
};

export default ToDoList;
