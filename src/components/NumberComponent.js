import { useState } from "react";
import style from "./css/NumberComponent.module.css";

const NumberComponent = (props) => {
  let [op1, op2] = [...props.operandsArr];
  const [displayvalue, setDisplayValue] = useState(0);
  const operation = props.operation;
  const operand1 = props.operand1;

  const numberPressedHandler = (event) => {
    const num = event.target.value;

    if (operand1) {
      if (String(op1).length < 9) {
        if (op1 == "0") {
          if (num != ".") {
            op1 = num;
          } else {
            op1 = "0.";
          }
        } else {
          if (!(num == "." && op1.indexOf(".") > -1)) {
            op1 = op1 + num;
          }
        }
      }
      props.showResult(op1);
    } else {
      if (String(op2).length < 9) {
        if (
          op2 == "0" ||
          ((operation == "*" || operation == "÷") && op2 == "1")
        ) {
          if (num != ".") {
            op2 = num;
          } else {
            op2 = "0.";
          }
        } else {
          if (!(num == "." && op2.indexOf(".") > -1)) {
            op2 = op2 + num;
          }
        }
      }
      props.showResult(op2);
    }
    props.setOperandArr([op1, op2]);
  };

  const clearHandler = () => {
    props.showResult(0);
    props.setOperandArr([0, 0]);
    props.isSetOperand1(true);
  };

  return (
    <div className={style.numberComponent}>
      <div>
        <button className={style.clearBtn} onClick={clearHandler}>
          clear
        </button>
      </div>
      <div>
        <button className={style.numberBtn} onClick={numberPressedHandler} value="7">
          7
        </button>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="8">
          8
        </button>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="9">
          9
        </button>
      </div>
      <div>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="4">
          4
        </button>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="5">
          5
        </button>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="6">
          6
        </button>
      </div>
      <div>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="1">
          1
        </button>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="2">
          2
        </button>
        <button className={style.numberBtn}  onClick={numberPressedHandler} value="3">
          3
        </button>
      </div>
      <div>
        <button
          className={style.zeroNumberBtn}
          onClick={numberPressedHandler}
          value="0"
        >
          0
        </button>
        <button className={style.dotBtn} onClick={numberPressedHandler} value=".">
          .
        </button>
      </div>
    </div>
  );
};

export default NumberComponent;
