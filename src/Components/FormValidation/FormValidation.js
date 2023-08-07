import React, { useEffect, useState } from "react";
const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, seterror] = useState(false);
  const [show, setShow] = useState(false);
  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });

  const submitForm = (e) => {
    e.preventDefault();

    if (name === "") {
      setShow(true);
      seterror("Fill the Name");
    } else if (email === "") {
      setShow(true);
      seterror("Fill the Email");
    } else {
      console.log(name, email);

      setName("");
      setEmail("");
    }
  };
  return (
    <div>
      <h1>Form Validation </h1>
      <form>
        {show && (
          <div
            style={{
              padding: "5px",
              color: "red",
              backgroundColor: "yellow",
              fontSize: "50px",
              fontFamily: "sans-serif",
            }}
          >
            {error}
          </div>
        )}
        <label>Name</label>
        <input type="text" onChange={inputName} value={name} />
        <br />
        <br />
        <label>Email</label>
        <input type="text" onChange={inputEmail} value={email} />

        <button type="button" onClick={submitForm}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
