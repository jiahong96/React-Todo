import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
const AppModal = ({ modal, setModal, children, header, body, footer }) => {
  const modalElRef = useRef(null);
  const modalRef = useRef(null);
  const hasHeaderSlot = !!header;
  const hasBodySlot = !!body;
  const hasFooterSlot = !!footer;

  useEffect(() => {
    const modalElement = modalRef.current;

    const initModal = () => {
      if (!modalElRef.current) {
        modalElRef.current = new Modal(modalElement);
        modalElement.addEventListener("shown.bs.modal", handleShown);
        modalElement.addEventListener("hidden.bs.modal", handleHidden);
        console.log("hey init event");
      }
    };
    const handleShown = (event) => {
      console.log(event);
      setModal(true);
    };
    const handleHidden = (event) => {
      console.log(event);
      setModal(false);
    };

    initModal();

    return () => {
      modalElement.addEventListener("shown.bs.modal", handleShown);
      modalElement.addEventListener("hidden.bs.modal", handleHidden);
      console.log("unmount");
    };
  }, [setModal]);

  useEffect(() => {
    if (modal) {
      modalElRef.current.show();
      console.log(modal);
    } else {
      modalElRef.current.hide();
      console.log(modal);
    }
  }, [modal]);

  return (
    <div className="modal" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          {hasHeaderSlot && <div className="modal-header">{header}</div>}
          {hasBodySlot && <div className="modal-body">{body}</div>}
          {hasFooterSlot && <div className="modal-footer">{footer}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppModal;
