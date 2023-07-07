import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const UpdateData = () => {
  const naviagte = useNavigate();
  const [id, setId] = useState("");
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    SetName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const formSubmithandler = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://crudcrud.com/api/869806e72f05453e864d02524af52ef4/Crud/${id}`,
      {
        name: name,
        email: email,
      }
    );
    naviagte("/read");
    console.log("Update Successfull");
  };

  return (
    <Form
      className="mainform"
      style={{ width: "70%", marginLeft: "5rem" }}
      onSubmit={formSubmithandler}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateData;
