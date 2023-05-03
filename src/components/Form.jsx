import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const Forms = ({ name, setName, email, setEmail, message, setMessage }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <form>
        <div class="mb-2">
          <label for="name" class="form-label">
            Nama
          </label>
          <input
            type="text"
            value={name}
            onChange={setName}
            class="form-control"
            id="name"
            placeholder="Masukan Nama"
          />
        </div>
        <div class="mb-2">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            value={email}
            onChange={setEmail}
            placeholder="Masukan email"
          />
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">
            Pesan
          </label>
          <input
            type="text"
            class="form-control"
            id="message"
            placeholder="Masukan pesan"
          />
        </div>
        <button
          type="submit"
          class="btn  w-100"
          style={{
            backgroundColor: "#FEBF00",
            border: "2px solid rgba(119, 59, 48, 1)",
          }}>
          Kirim
        </button>
      </form>
    </>
  );
};

export default Forms;
