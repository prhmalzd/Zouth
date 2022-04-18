import { useHistory } from "react-router-dom";
import Modal from "../../stuff/modalOverlay/Modal";
import styles from "./exitCart.module.css";
import { useSelector } from "react-redux";

const ExitCart = (props) => {
  const bgColor = useSelector((state) => state.cCh.colorpage);
  const history = useHistory();
  const goOutSide = () => {
    history.push("/homepage");
  };
  return (
    <Modal onHide={props.onHideExitCart}>
      <div className={styles.exitCart}>
        <p>Are you sure want to LogOut?</p>
        <div>
          <button onClick={goOutSide} style={{ backgroundColor: `${bgColor}` }}>
            Aha!
          </button>
          <button onClick={props.onHideExitCart}>Noooooooo</button>
        </div>
      </div>
    </Modal>
  );
};

export default ExitCart;
