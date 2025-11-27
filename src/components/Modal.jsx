import ReactModal from "react-modal";
import { MODAL_STYLES } from "../constants/styles";
import bg from "../assets/bg-modal.svg";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}) => {
  const customStyles = {
    ...MODAL_STYLES,
    content: {
      ...MODAL_STYLES.content,
      backgroundImage: `url(${bg})`,
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={title || "Modal"}
    >
      {title && <p className="fw-bold fs-3">{title}</p>}
      {children}
      {showCloseButton && (
        <button className="btn btn-warning mt-3" onClick={onClose}>
          Tutup
        </button>
      )}
    </ReactModal>
  );
};

export default Modal;
