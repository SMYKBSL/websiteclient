// @flow
import React, { Component } from 'react';
import SelectedFoods from './SelectedFoods';
import FoodSearch from './FoodSearch';

class App extends Component {
  state = {
    selectedFoods: []
  };

  removeFoodItem = itemIndex => {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedFoods: filteredFoods });
  };

  addFood = food => {
    const newFoods = this.state.selectedFoods.concat(food);
    this.setState({ selectedFoods: newFoods });
  };

  render() {
    const { selectedFoods } = this.state;

    return (
      <div className="App">
        <div className="ui text container">
          <SelectedFoods
            foods={selectedFoods}
            onFoodClick={this.removeFoodItem}
          />
          <FoodSearch onFoodClick={this.addFood} />
        </div>
        <div>
          <h1>Smyk Business Solutions Ltd.</h1>
          <h2>Why</h2>
          <p>Achieve joy in every workplace</p>
          <h2> Who </h2>
          <p>Development team</p>
          <p>Product Owners and Managers</p>
          <p>Other stakeholders</p>
          <h2>How</h2>
          <p>Achieve flow of products/services into hands of users</p>
          <p>Work to be better every day</p>
          <p>Compete against yourself rather than others</p>
          <h2>What</h2>
          <p>Continous delivery</p>
          <p>Learning organisation</p>
        </div>
      </div>
    );
  }
}

export default App;
