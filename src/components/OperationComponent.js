import AdditionComponent from "./AdditionComponent";
import DivisionComponent from "./DivisionComponent";
import SubtractionComponent from "./SubtractionComponent";
import MultiplicationComponent from "./MultiplicationComponent";
import style from "./css/Calculator.module.css";

const OperationComponent = (props) => {
  let [op1, op2] = [...props.operandsArr];
  const operation = props.operation;

  const calculationHandler = (event) => {
    let result = op1;
    if (operation == "+") {
      result = +op1 + +op2;
      props.showResult(result);
      props.setOperandArr([result, 0]);
    } else if (operation == "÷") {
      result = +op1 / +op2;
      if (String(result).length > 10) {
        result = String(result).substring(0, 10);
      }
      if (event.target.value != "÷") {
        props.setOperandArr([result, 0]);
      } else {
        props.setOperandArr([result, 1]);
      }
      props.showResult(result);
    } else if (operation == "-") {
      result = +op1 - +op2;
      props.showResult(result);
      props.setOperandArr([result, 0]);
    } else if (operation == "*") {
      result = +op1 * +op2;
      props.showResult(result);
      if (event.target.value != "*") {
        props.setOperandArr([result, 0]);
      } else {
        props.setOperandArr([result, 1]);
      }
    }
    if (event.target.value == "*" || event.target.value == "÷") {
      props.setOperandArr([result, 1]);
    }
    props.isSetOperand1(false);
    props.setOperation(event.target.value);

    if (event.target.value == "=") {
      props.setOperandArr([0, 0]);
      props.isSetOperand1(true);
    }
  };

  return (
    <div className={style.operationComponent}>
      <DivisionComponent calculationHandler={calculationHandler} />
      <SubtractionComponent calculationHandler={calculationHandler} />
      <AdditionComponent calculationHandler={calculationHandler} />
      <MultiplicationComponent calculationHandler={calculationHandler} />
      <button className={style.operationBtn} onClick={calculationHandler} value="=">
        =
      </button>
    </div>
  );
};

export default OperationComponent;
