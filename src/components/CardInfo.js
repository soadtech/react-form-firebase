import React from "react";

const CardInfo = ({ info }) => {
  const { name, city, message, phone, email } = info;
  return (
    <div className="col-sm-6" style={{ margin: `0px 0px 30px 0px` }}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{city}</h6>
          <p className="card-text">{message}</p>
          <a href={`tel:${phone}`} className="card-link">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="card-link">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
