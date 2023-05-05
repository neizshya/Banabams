import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const Forms = ({ name, setName, email, setEmail, message, setMessage }) => {
  const form = useRef();
  const handleSubmit = () => {};

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Nama
          </label>
          <input
            type="text"
            value={name}
            onChange={setName}
            className="form-control"
            id="name"
            placeholder="Masukan Nama"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={setEmail}
            placeholder="Masukan email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Pesan
          </label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Masukan pesan"
            required
          />
        </div>
        <button
          type="submit"
          className="btn  w-100"
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
