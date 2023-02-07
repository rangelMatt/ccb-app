import ReactDom from "react-dom";
import "./modal.scss";
import Close from "../images/times-close-circle.png";
import React from "react";
import 'react-medium-image-zoom/dist/styles.css'




const Modal = ({ show, close, title, children, src, id, link }) => {

  const linked = link

  return ReactDom.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}
          key={id}>
          <header className="modal_header">
            <a href={link}
              style={{ textDecoration: 'none' }}
            >
              <h2 className="modal_header-title">{title}</h2>
            </a>
            <button
              className="close"
              onClick={() => close()}
              aria-label="*">
              <img
                src={Close}
                alt="close"
                aria-label="*" />
            </button>
          </header>
          <div>
            <main className="modal_content"
              style={{ display: "flex" }}>
            </main>
          </div>

          <div className="image">
            <img
              src={src}
              style={{ width: "50%" }}
              alt=""
              aria-label="*" />

          </div>
          <div className="description text-break scroller"
          >{children}</div>

          <footer className="modal_footer">
            <button 
            className="modal-close" 
            onClick={() => close()}
            aria-label="*">
              Cancel
            </button>
            <div>
              {linked ? (
                <a href={link}><button className="submit">Video</button></a>
              ) : null}
            </div>
          </footer>
        </div>
      </div>

    </>,
    document.getElementById("modal")
  );
}
export default Modal;