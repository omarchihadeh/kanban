import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TaskForm from "./TaskForm";

const initialValues = {
  title: "",
  description: "",
  startDate: new Date(),
  endDate: new Date(),
};

function NewTask(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => { }, []);

  const onSubmit = (values, submitProps) => {
    submitProps.setSubmitting(false);
    props.addNewTask(values);
    setShow(false);
    submitProps.resetForm();
  };

  return (
    <div className="container">
      <Button variant="secondary" size="lg" active onClick={handleShow}>Add New Task</Button>
      <TaskForm taskState='New' show={show} handleClose={handleClose} initialValues={initialValues} onSubmit={onSubmit}></TaskForm>
    </div>
  );
}

export default NewTask;
