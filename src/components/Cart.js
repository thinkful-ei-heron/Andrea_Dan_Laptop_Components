import React from 'react';
import CartItems from './CartItems'
import Total from './Total'


export default class Cart extends React.Component {

    render() {
        const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.props.state.selected[feature];
    
          return (
            <CartItems
              key={featureHash}
              featureHash={featureHash}
              feature={feature}
              name={selectedOption.name}
              USCurrency={this.props.currencyFormat}
              cost={selectedOption.cost}
            />
          );
        });

        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <Total 
            state= {this.props.state}
            USCurrency={this.props.currencyFormat}
            />
          </section>
        )
    }

}