import React, { useState } from "react";
import { useDispatch } from "react-redux";

function InputField() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  let onTaskAdd = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  let addTaskinTaskManager = () => {
    dispatch({ type: "ADD_TASK", payload: task });
    setTask("");
  };

  let keyPress = (e) => {
    if (e.key === "Enter") addTaskinTaskManager();
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-group row">
              <label className="col-md-2 col-form-label">Task:</label>
              <div className="col-md-10">
                <input
                  type="text"
                  id="task"
                  name="task"
                  className="form-control"
                  placeholder="eg, singing"
                  value={task}
                  onKeyPress={keyPress}
                  onChange={(e) => {
                    onTaskAdd(e);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <button
            type="button"
            onClick={addTaskinTaskManager}
            className="btn btn-primary"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
