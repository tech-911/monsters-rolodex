import React from "react";
import CardList from "./components/card-list/Card_list.components";
import "./App.css";
import SearchBox from "./components/search-box/search-box.components";
class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="format">
        <center>
        <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder='search monsters'
            handleChange={(e)=>this.setState({searchField:e.target.value})}
          />
        </center>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
