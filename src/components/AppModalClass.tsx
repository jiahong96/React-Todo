import { Modal } from "bootstrap";
import * as React from "react";

interface AppModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  header?: (headingId: string) => React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

interface AppModalState {}
class AppModalClass extends React.Component<AppModalProps> {
  constructor(props: AppModalProps) {
    super(props);
    this.modalInstanceRef = React.createRef();
    this.modalRef = React.createRef();

    const { header, body, footer } = props;
    this.hasHeaderSlot = !!header;
    this.hasBodySlot = !!body;
    this.hasFooterSlot = !!footer;
  }

  componentDidMount() {
    this.initModal();
  }

  componentDidUpdate(prevProps: AppModalProps) {
    if (this.props.modal) {
      this.modalInstanceRef.current.show();
    } else {
      this.modalInstanceRef.current.hide();
    }
  }

  initModal = () => {
    const modalElement = this.modalRef.current;

    if (!this.modalInstanceRef.current) {
      this.modalInstanceRef.current = new Modal(modalElement);
    }
    modalElement.addEventListener("shown.bs.modal", this.handleShown);
    modalElement.addEventListener("hidden.bs.modal", this.handleHidden);
  };

  handleShown = (event: CustomEvent) => {
    this.props.setModal(true);
  };

  handleHidden = (event: CustomEvent) => {
    this.props.setModal(false);
  };

  render() {
    return (
      <div
        role="dialog"
        aria-hidden="true"
        className="modal"
        tabIndex={-1}
        ref={this.modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {this.hasHeaderSlot && (
              <div className="modal-header">{this.props.header}</div>
            )}
            {this.hasBodySlot && (
              <div className="modal-body">{this.props.body}</div>
            )}
            {this.hasFooterSlot && (
              <div className="modal-footer">{this.props.footer}</div>
            )}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default AppModalClass;
