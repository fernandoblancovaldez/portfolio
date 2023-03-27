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

export const initialState = {
  initialData: [],
  globalUser: null,
  userRegistering: false,
  arrTasks: [],
  taskToUpdate: null,
  loading: true,
};

export function toDoListReducer(state = initialState, action) {
  switch (action.type) {
    case READ_USER: {
      const user = action.payload;
      return { ...state, globalUser: user, loading: false };
    }
    case SWITCH_LOGG_METHOD: {
      return { ...state, userRegistering: !state.userRegistering };
    }
    case READ_TASKS: {
      return { ...state, arrTasks: action.payload, loading: false };
    }
    case CREATE_TASK_WITH_FILE: {
      let { id, description, fileUrl, fileName } = action.payload;
      let newTask = {
        id,
        description,
        fileUrl,
        fileName,
      };
      return {
        ...state,
        arrTasks: [...state.arrTasks, newTask],
        loading: false,
      };
    }
    case CREATE_TASK_NO_FILE: {
      let { id, description } = action.payload;
      let newTask = {
        id,
        description,
      };
      return {
        ...state,
        arrTasks: [...state.arrTasks, newTask],
        loading: false,
      };
    }
    case SELECT_TASK_TO_UPDATE: {
      return { ...state, taskToUpdate: action.payload };
    }
    case UPDATE_TASK_NO_FILE: {
      let newTasks = state.arrTasks.map((el) => {
        if (el.id === state.taskToUpdate.id) {
          return {
            ...el,
            description: action.payload,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
        arrTasks: newTasks,
        taskToUpdate: null,
        loading: false,
      };
    }
    case UPDATE_TASK_WITH_FILE: {
      const { description, fileUrl, fileName } = action.payload;
      let newTasks = state.arrTasks.map((el) => {
        if (el.id === state.taskToUpdate.id) {
          return {
            ...el,
            description,
            fileUrl,
            fileName,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
        arrTasks: newTasks,
        taskToUpdate: null,
        loading: false,
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        arrTasks: state.arrTasks.filter((el) => el.id !== action.payload.id),
        loading: false,
      };
    }
    case SHOW_LOADER: {
      return { ...state, loading: action.payload };
    }
    case CLEAR_LIST: {
      return { initialState };
    }
    default:
      return state;
  }
}
