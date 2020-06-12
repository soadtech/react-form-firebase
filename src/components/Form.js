import React, { useState } from "react";
import firebase from "../Firebase";
import Swal from "sweetalert2";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("form")
      .add(data)
      .then(() => {
        Swal.fire("Good job!", "Se han agregado tus datos", "success");
        setData({
          name: "",
          email: "",
          city: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Lo sentimos, no se pudo agregar tus datos",
        });
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={data.email}
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          className="form-control"
          id="city"
          name="city"
          value={data.city}
          onChange={handleChange}
        >
          <option value="México">México</option>
          <option value="Guadalajara">Guadalajara</option>
          <option value="Monterrey">Monterrey</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          className="form-control"
          id="phone"
          name="phone"
          placeholder="+52 1"
          value={data.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          name="message"
          value={data.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default Form;
