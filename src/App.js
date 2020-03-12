import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";
// import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    currentAuthor: null
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  getDetail = () => {
    if (this.state.currentAuthor)
      return <AuthorDetail author={this.state.currentAuthor} />;
    return <AuthorList authors={authors} selectAuthor={this.selectAuthor} />;
  };
  unselectAuthor = () => {
    this.setState({ currentAuthor: null });
  };
  render() {
    // if (this.state.currentAuthor) not null go to list
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          {/*{(if(true) _____? do(___):(if not do) (____)}*/}
          <div className="content col-10">{this.getDetail()}</div>
        </div>
      </div>
    );
  }
}

export default App;
