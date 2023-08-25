import { useEffect, useId, useRef } from "react";
import { Modal } from "bootstrap";

interface AppModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  header?: (headingId: string) => React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const AppModal = ({
  modal,
  setModal,
  children,
  header,
  body,
  footer,
}: AppModalProps) => {
  const modalHeaderId = useId();
  const modalInstanceRef = useRef(null);
  const modalRef = useRef(null);
  const hasHeaderSlot = !!header;
  const hasBodySlot = !!body;
  const hasFooterSlot = !!footer;

  useEffect(() => {
    const modalElement = modalRef.current;

    const initModal = () => {
      if (!modalInstanceRef.current) {
        modalInstanceRef.current = new Modal(modalElement);
      }
      modalElement.addEventListener("shown.bs.modal", handleShown);
      modalElement.addEventListener("hidden.bs.modal", handleHidden);
    };
    const handleShown = (event: CustomEvent) => {
      setModal(true);
    };
    const handleHidden = (event: CustomEvent) => {
      setModal(false);
    };

    initModal();

    return () => {
      modalElement.addEventListener("shown.bs.modal", handleShown);
      modalElement.addEventListener("hidden.bs.modal", handleHidden);
    };
  }, [setModal]);

  useEffect(() => {
    if (modal) {
      modalInstanceRef.current.show();
    } else {
      modalInstanceRef.current.hide();
    }
  }, [modal]);

  return (
    <div
      role="dialog"
      aria-labelledby={modalHeaderId}
      aria-hidden="true"
      className="modal"
      tabIndex={-1}
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {hasHeaderSlot && (
            <div className="modal-header">{header(modalHeaderId)}</div>
          )}
          {hasBodySlot && <div className="modal-body">{body}</div>}
          {hasFooterSlot && <div className="modal-footer">{footer}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppModal;
