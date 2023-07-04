import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');


    //`calculator.add()` - add 1 to 4 and get 5
  })
  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
  })
  
  
  //`calculator.subtract()` subtract 4 from 7 and get 3
  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    const subtractButton = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })
 
 
 //`calculator.multiply()` - multiply 3 by 5 and get 15
  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15');
  })
  
  
  // `calculator.divide()` - divide 21 by 7 and get 3
  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divideButton = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })
  
  
  //concatenate multiple number button clicks
  it('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('217');
  })
  
  
  //`calculator.operatorClick()` - chain multiple operations together
  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const multiplyButton = container.getByTestId('operator-multiply');
    const addButton = container.getByTestId('operator-add');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(multiplyButton);
    fireEvent.click(button3);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('10');
  })

  //- `calculator.clearClick()` - clear the running total without affecting the calculation
  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const button5 = container.getByTestId('number5');
    const button4 = container.getByTestId('number4');
    const addButton = container.getByTestId('operator-add');
    const clear = container.getByTestId('clear');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(clear);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    
    expect(runningTotal.textContent).toEqual('7');
  })

})

