import {
  CLEAR_LIST,
  CREATE_TASK_NO_FILE,
  CREATE_TASK_WITH_FILE,
  DELETE_TASK,
  READ_TASKS,
  READ_USER,
  SELECT_TASK_TO_UPDATE,
  SHOW_LOADER,
  SWITCH_LOGG_METHOD,
  UPDATE_TASK_NO_FILE,
  UPDATE_TASK_WITH_FILE,
} from "../types";
import firebaseApp from "../helpers/toDoListCreds";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const createUserOrSignIn = (userRegistering, email, pass) => {
  return (dispatch) => {
    dispatch(showLoader());
    userRegistering
      ? createUserWithEmailAndPassword(auth, email, pass)
      : signInWithEmailAndPassword(auth, email, pass);
  };
};

export const redirect = () => {
  return (dispatch) => {
    dispatch(showLoader());
    const googleProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvider);
  };
};

export const updateTaskWithFile = (
  taskToUpdate,
  localFile,
  description,
  arrTasks,
  globalUser
) => {
  return async (dispatch) => {
    dispatch(showLoader());
    if (taskToUpdate.fileName) {
      deleteObject(ref(storage, `docs/${taskToUpdate.fileName}`));
    }
    await uploadBytes(ref(storage, `docs/${localFile.name}`), localFile);
    const url = await getDownloadURL(ref(storage, `docs/${localFile.name}`));

    const newTasks = arrTasks.map((el) => {
      if (el.id === taskToUpdate.id) {
        return {
          ...el,
          description,
          fileUrl: url,
          fileName: localFile.name,
        };
      } else {
        return el;
      }
    });

    await updateDoc(doc(firestore, `usuarios/${globalUser.email}`), {
      tasks: [...newTasks],
    });

    dispatch(
      updateTask({ description, fileUrl: url, fileName: localFile.name }, true)
    );
  };
};

export const updateTaskNoFile = (
  taskToUpdate,
  description,
  arrTasks,
  globalUser
) => {
  return async (dispatch) => {
    dispatch(showLoader());

    const newTasks = arrTasks.map((el) => {
      if (el.id === taskToUpdate.id) {
        return {
          ...el,
          description,
        };
      } else {
        return el;
      }
    });

    await updateDoc(doc(firestore, `usuarios/${globalUser.email}`), {
      tasks: [...newTasks],
    });
    dispatch(updateTask(description));
  };
};

export const createTaskWithFile = (
  localFile,
  description,
  arrTasks,
  globalUser
) => {
  return async (dispatch) => {
    dispatch(showLoader());

    await uploadBytes(ref(storage, `docs/${localFile.name}`), localFile);
    const url = await getDownloadURL(ref(storage, `docs/${localFile.name}`));
    const newTask = {
      id: +new Date(),
      description,
      fileUrl: url,
      fileName: localFile.name,
    };
    const newTasks = [...arrTasks, newTask];
    await updateDoc(doc(firestore, `usuarios/${globalUser.email}`), {
      tasks: [...newTasks],
    });
    dispatch(createTask(newTask, true));
  };
};

export const createTaskNoFile = (description, arrTasks, globalUser) => {
  return async (dispatch) => {
    dispatch(showLoader());

    const newTask = {
      id: +new Date(),
      description,
    };
    const newTasks = [...arrTasks, newTask];
    await updateDoc(doc(firestore, `usuarios/${globalUser.email}`), {
      tasks: [...newTasks],
    });
    dispatch(createTask(newTask));
  };
};

export const switchLoggMethod = () => ({ type: SWITCH_LOGG_METHOD });

export const readUser = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (userFirebase) => {
      userFirebase
        ? dispatch({ type: READ_USER, payload: userFirebase })
        : dispatch({ type: READ_USER, payload: null });
    });
  };
};

export const readTasks = (email) => {
  return (dispatch) => {
    dispatch(showLoader());

    getDoc(doc(firestore, `usuarios/${email}`))
      .then((res) => res.data())
      .then((res) => dispatch({ type: READ_TASKS, payload: res.tasks }));
  };
};

export const createTask = (data, file = false) =>
  file
    ? { type: CREATE_TASK_WITH_FILE, payload: data }
    : { type: CREATE_TASK_NO_FILE, payload: data };

export const selectTaskToUpdate = (data) => ({
  type: SELECT_TASK_TO_UPDATE,
  payload: data,
});

export const updateTask = (data, file = false) =>
  file
    ? { type: UPDATE_TASK_WITH_FILE, payload: data }
    : { type: UPDATE_TASK_NO_FILE, payload: data };

export const deleteTask = (task, arrTasks, globalUser) => {
  return async (dispatch) => {
    dispatch(showLoader());

    const newTasks = arrTasks.filter((el) => el.id !== task.id);
    const refDoc = doc(firestore, `usuarios/${globalUser.email}`);
    await updateDoc(refDoc, { tasks: [...newTasks] });
    if (task.fileName) {
      const fileRef = ref(storage, `docs/${task.fileName}`);
      await deleteObject(fileRef);
    }
    dispatch({ type: DELETE_TASK, payload: task });
  };
};

export const showLoader = (show = true) => ({
  type: SHOW_LOADER,
  payload: show,
});
export const clearList = () => ({
  type: CLEAR_LIST,
});
