import React from 'react'

export default class Total extends React.Component{
    render(){
    const total = Object.keys(this.props.state.selected).reduce(
    (acc, curr) => acc + this.props.state.selected[curr].cost,0);

    return(
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">{this.props.USCurrency.format(total)}</div>
            </div>
    )
    }
}