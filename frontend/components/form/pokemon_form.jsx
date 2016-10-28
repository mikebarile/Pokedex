import React from 'react';
import { withRouter } from 'react-router';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {moves: []};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  updateArray(property, num) {
    return e => {
      let arr = this.state[property];
      arr[num] = e.target.value;
      this.setState({[property]: arr});
    };
  }

  handleSubmit() {
    console.log(this.state);
    return e => {
      e.preventDefault();
      this.props.createPokemon(this.state);
    };
  }

  render() {

    return(
      <div>
        <h1>Create a pokemon!</h1>

        <label>Name:
          <input type="text" onChange={this.update("name")}/>
        </label>
        <br/>

        <label>Attack:
          <input type="text" onChange={this.update("attack")}/>
        </label>
        <br/>

        <label>Defense:
          <input type="text" onChange={this.update("defense")}/>
        </label>
        <br/>

        <label>First move:
          <input type="text" onChange={this.updateArray("moves", 0)}/>
        </label>
        <br/>

        <label>Second move:
          <input type="text" onChange={this.updateArray("moves", 1)}/>
        </label>
        <br/>

        <label>Third move:
          <input type="text" onChange={this.updateArray("moves", 2)}/>
        </label>
        <br/>

        <label>Image URL:
          <input type="text" onChange={this.update("image_url")}/>
        </label>
        <br/>

        <label>Type:
          <select onChange={this.update("poke_type")}>
            <option value="fire">fire</option>
            <option value="electric">electric</option>
            <option value="normal">normal</option>
            <option value="ghost">ghost</option>
            <option value="psychic">psychic</option>
            <option value="water">water</option>
            <option value="bug">bug</option>
            <option value="dragon">dragon</option>
            <option value="grass">grass</option>
            <option value="fighting">fighting</option>
            <option value="ice">ice</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="steel">steel</option>
          </select>
        </label>
        <br/>

        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    );
  }
}



export default PokemonForm;
