import style from "./css/Calculator.module.css";

const AdditionComponent = (props) => {
  return (
    <div>
      <button
        className={style.operationBtn}
        onClick={props.calculationHandler}
        value="+"
      >
        +
      </button>
    </div>
  );
};

export default AdditionComponent;
