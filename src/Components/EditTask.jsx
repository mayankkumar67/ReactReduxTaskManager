import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

function EditTask({ prevTask }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [task, setTask] = useState(prevTask);
  const dispatch = useDispatch();

  useEffect(() => {
    setTask(prevTask);
  }, [prevTask]);

  let onTaskAdd = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  let addTaskinTaskManager = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { prevTask: prevTask, newTask: task },
    });
    handleClose();
  };

  let keyPress = (e) => {
    if (e.key === "Enter") addTaskinTaskManager();
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pencil"
        viewBox="0 0 16 16"
        className="ml-2"
        onClick={handleShow}
      >
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
      </svg>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update {prevTask}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addTaskinTaskManager}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;
