import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import ToDoListHome from "./ToDoListHome";
import ToDoListLogg from "./ToDoListLogg";
import firebaseApp from "../../helpers/toDoListCreds";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

const ToDoList = () => {
  const [globalUser, setGlobalUser] = useState(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (userFirebase) => {
    userFirebase ? setGlobalUser(userFirebase) : setGlobalUser(null);
    setLoading(false);
  });

  return (
    <Card className="bg-transparent  text-secondary border-glass shadow py-3 gap-3 text-center align-items-center mx-auto">
      {loading && <Spinner />}
      {globalUser ? (
        <ToDoListHome userEmail={globalUser.email} />
      ) : (
        <ToDoListLogg />
      )}
    </Card>
  );
};

export default ToDoList;
