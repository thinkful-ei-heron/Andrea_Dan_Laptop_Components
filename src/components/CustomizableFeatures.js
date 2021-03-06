import React from 'react';

export default class CustomizableFeatures extends React.Component {
  render() {

    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemName}
          name={this.props.name}
          checked={this.props.checked}
          onChange={e => {
            this.props.updateFeature(this.props.feature, this.props.item);
          }}
        />
        <label htmlFor={this.props.itemName} className="feature__label">
          {this.props.itemName} ({this.props.currencyFormat.format(this.props.cost)})
        </label>
      </div>
    );
  }
}
