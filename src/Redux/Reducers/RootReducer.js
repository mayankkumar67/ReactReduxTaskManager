let prevTasks = localStorage.getItem('Tasks').split(',');

let initialState = { tasks: prevTasks.length && prevTasks[0]!==''? prevTasks:[] };

let RootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_TASK":
      localStorage.setItem("Tasks", [actions.payload, ...state.tasks]);
      return { tasks: [actions.payload, ...state.tasks] };
    case "REMOVE_TASK":
      localStorage.setItem(
        "Tasks",
        // eslint-disable-next-line 
        state.tasks.filter((record) => record != actions.payload)
      );
      return {
        // eslint-disable-next-line 
        tasks: state.tasks.filter((record) => record != actions.payload),
      };
    case "EDIT_TASK":
      localStorage.setItem(
        "Tasks",
        state.tasks.map((task) => {
          if (task === actions.payload.prevTask) return actions.payload.newTask;
          else return task;
        })
      );
      return {
        tasks: state.tasks.map((task) => {
          if (task === actions.payload.prevTask) return actions.payload.newTask;
          else return task;
        }),
      };
    default:
      return state;
  }
};

export default RootReducer;
