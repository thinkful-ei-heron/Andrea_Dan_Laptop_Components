import React from 'react';
import CustomizableFeatures from './CustomizableFeatures';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class CustomizeLaptop extends React.Component {
  render() {
    let features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
        return (
          <CustomizableFeatures
            key={itemHash}
            id={itemHash}
            name={slugify(feature)}
            feature={feature}
            item={item}
            itemName={item.name}
            cost={item.cost}
            checked={item.name === this.props.state.selected[feature].name}
            updateFeature={this.props.updateFeature}
            currencyFormat={this.props.currencyFormat}
          />
        );
    });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
