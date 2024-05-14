import React from "react";

const EncartContact = () => {
  return (
    <div className="encart-contact">
      <h3>
        Envie de travailler avec moi ? <br />
        Laissez moi un message ✨
      </h3>
      <button
        className="btn-red"
        onClick={() =>
          (window.location.href = "mailto:celia.letellier@gmail.com")
        }
      >
        Contact.
      </button>
    </div>
  );
};

export default EncartContact;
