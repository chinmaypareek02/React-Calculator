import { useState } from "react";
import style from "./css/Calculator.module.css";
import NumberComponent from "./NumberComponent";
import OperationComponent from "./OperationComponent";

const Calculator = () => {
  const [arr, setArr] = useState([0, 0]);
  const [dataOnScreen, setDataOnScreen] = useState(0);
  const [operand1, setOperand1] = useState(true);
  const [operation, setOperation] = useState("");

  const showResult = (data) => {
    setDataOnScreen(data);
  };

  const setOperandArr = (opArr) => {
    setArr(opArr);
  };

  const isSetOperand1 = (isSet) => {
    setOperand1(isSet);
  };

  return (
    <div className={style.calculator}>
      <div className="firstLine">
        <input className={style.resultText} type="text" value={dataOnScreen} />
      </div>
      <div className={style.secondLine}>
        <NumberComponent
          operandsArr={arr}
          showResult={showResult}
          operand1={operand1}
          setOperandArr={setOperandArr}
          isSetOperand1={isSetOperand1}
          operation={operation}
        />
        <OperationComponent
          operandsArr={arr}
          showResult={showResult}
          setOperandArr={setOperandArr}
          isSetOperand1={isSetOperand1}
          setOperation={setOperation}
          operation={operation}
        />
      </div>
    </div>
  );
};

export default Calculator;
