import ReactDom from "react-dom";
import "./modal.scss";
import Close from "../images/times-close-circle.png";
import React from "react";




const Modal = ({ show, close, title, children, src, id,link }) => {
    

  return ReactDom.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}
        key={id}>
          <header className="modal_header">
            <a href={link}>
            <h2 className="modal_header-title">{title}</h2>
            </a>
            <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modal_content"
            style={{ display: "flex" }}>
            <div> {}
              <img className="image" src={src} style={{ width: "100%" }} alt="" />
            </div>
            <div className="description text-break scroller"
            >{children}</div>
          </main>
          <footer className="modal_footer">
            <button className="modal-close" onClick={() => close()}>
              Cancel
            </button>
            <button className="submit">Submit</button>
          </footer>
        </div>
      </div>

    </>,
    document.getElementById("modal")
  );
}
export default Modal;