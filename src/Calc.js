import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value1: '',
      value2: '',
      operation: '+',
      result: 0
    }

    this.result = (value1, value2, operation) => {
      let r = 0;
      switch (operation) {
        case '+':
          r = value1 + value2
          break
        case '-':
          r = value1 - value2
          break
        default:
          r = value1 + value2
          break
      }
      this.setState({result: r})
    }

    this.input1Change = (e) => {
      let value1 = +e.target.value
      if (value1 === '' ) {
        this.setState({ value1: '0' })
      } else {
        this.setState({ value1: value1 })
        let {value2, operation} = this.state
        //let value2 = this.state.value2
        //let operation = this.state.operation
        this.result(value1, value2,operation)
      }
      

      
      
    }

    this.input2Change = (e) => {
      let value22 = +e.target.value
      this.setState({ value2: value22})
      let {value1, operation} = this.state
      this.result(value1, value22,operation)
    }

    this.selectChange = (e) => {
      let operationn = e.target.value
      this.setState({ operation: operationn })

      let {value1, value2} = this.state
      this.result(value1, value2,operationn)

    }
  }

  render() {
    return (
      <div className='app_wrapper'>
        <div className='header'>
          Welcome to <br />
          my first React-calculator!
        </div>

        <div className="calc">
          <div className='calc_wrapper'>
            <div className="value1">
              <input onChange={this.input1Change} value={this.state.value1} placeholder='input number' />
            </div>

            <div>
              <select onChange={this.selectChange} className="operations">
                <option value={this.value1}>+</option>
                <option value={this.value2}>-</option>
              </select>
            </div>

            <div className="value2">
              <input onChange={this.input2Change} value={this.state.value2} placeholder='input number' />
            </div>

            <div className="result">
              Result = <span> {this.state.value1} {this.state.operation} {this.state.value2} = {this.state.result}</span>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Calc;
