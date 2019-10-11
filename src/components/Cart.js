import React from 'react'

class Cart extends React.Component {
  render() {
    //Cart
      return (
        <div className="summary__option" key={this.props.featureHash}>
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.name}</div>
          <div className="summary__option__cost">{this.props.USCurrency.format(this.props.cost)}</div>
        </div>
      );
    };  
}

export default Cart;




    