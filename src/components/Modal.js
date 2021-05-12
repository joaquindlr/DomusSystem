import React from "react";

const Modal = ({ visible, handleVisible }) => {
  return (
    <>
      {visible && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "15rem",
              width: "25rem",
              position: "fixed",
              top: "5rem",
              bottom: 0,
              right: "35%",
              borderRadius: 10,
            }}
          >
            <>
              <button
                onClick={() => handleVisible(false)}
                className="btn btn-primary"
              >
                Cerrar
              </button>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
