import React from 'react';
import CustomizableFeatures from './CustomizableFeatures';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
// import { react } from 'babel-types';

export default class CustomizeLaptop extends React.Component {
  render() {
    let features = Object.keys(this.props.features).map((feature, idx) => {
      console.log(this.props.state);
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        console.log('in customizeLaptop itemHash is ' + itemHash);
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
        /*
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.state.selected[feature].name}
              onChange={e => this.props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.currencyFormat.format(item.cost)})
            </label>
          </div>
        );
        */
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
