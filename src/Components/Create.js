import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const naviagte = useNavigate();
  const [name, setName] = useState();
  const [email, SetEmail] = useState();

  const formSubmithandler = async (e) => {
    e.preventDefault();
    console.log("button clicked");

    const response = await axios.post(
      "https://crudcrud.com/api/869806e72f05453e864d02524af52ef4/Crud",
      {
        name: name,
        email: email,
      }
    );
    // if (response.status >= 200 && response.status < 300) {
    //   console.log(response.data);
    // }
    naviagte("/read");
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
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Password"
          onChange={(e) => SetEmail(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;
