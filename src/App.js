import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import CardInfo from "./components/CardInfo";
import firebase from "./Firebase";

function App() {
  const [infos, setInfo] = useState([]);
  const fetchData = () => {
    firebase
      .firestore()
      .collection("form")
      .onSnapshot((snapshot) => {
        const newInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInfo(newInfo);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container" style={{ padding: `40px 0px` }}>
        <div className="row">
          <div className="col-sm-4">
            <h2>Contact Form</h2>
            <Form />
          </div>
          <div className="col-sm-8">
            <div className="row">
              {infos.map((info) => (
                <CardInfo key={info.id} info={info} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="alert alert-info fixed-bottom" style={{ margin: `0px` }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              GnDx:{" "}
              <a
                href="https://gndx.co/formulario-contacto-react-firebase/"
                className="alert-link"
              >
                Formulario de Contacto con React + Firebase{" "}
              </a>
              GitHub:{" "}
              <a
                href="https://github.com/gndx/react-form-firebase"
                className="alert-link"
              >
                react-form-firebase
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
