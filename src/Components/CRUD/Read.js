import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, getData] = useState([]);

  const getDataFromDataBase = async () => {
    const response = await axios.get(
      "https://crudcrud.com/api/869806e72f05453e864d02524af52ef4/Crud"
    );

    console.log(response.data);
    getData(response.data);
  };

  //   delete data :

  const deleteData = async (id) => {
    await axios.delete(
      `https://crudcrud.com/api/869806e72f05453e864d02524af52ef4/Crud/${id}`
    );
    getData((prevData) => prevData.filter((item) => item._id !== id));
  };

  useEffect(() => {
    getDataFromDataBase();
  }, []);

  const setDataToLocal = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div>Read the DATA </div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ marginTop: "3rem", marginLeft: "20rem", width: "50%" }}
      >
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>email</th>
          </tr>
        </thead>

        {data.map((data, i) => {
          return (
            <tbody key={data._id}>
              <tr>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <Link to="/update">
                  <button
                    onClick={() =>
                      setDataToLocal(data._id, data.name, data.email)
                    }
                    style={{
                      color: "white",
                      background: "red",
                      borderRadius: "10px",
                      marginLeft: "1rem",
                    }}
                  >
                    Edit
                  </button>
                </Link>

                <button
                  style={{
                    color: "white",
                    background: "red",
                    borderRadius: "10px",
                    marginLeft: "1rem",
                  }}
                  onClick={() => deleteData(data._id)}
                >
                  Delete
                </button>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <Link to="/">
        <Button>Back To Read</Button>
      </Link>
    </>
  );
};

export default Read;
