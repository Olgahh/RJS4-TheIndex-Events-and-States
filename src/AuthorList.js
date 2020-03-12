import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorList extends Component {
  state = {
    authors: this.props.authors
  };
  filterAuthors = query => {
    // we can't modify props
    const filteredAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({ authors: filteredAuthors });
  };
  render() {
    // using state insted of props so the filterd items won't be removed
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));
    return (
      <div className="authors">
        <SearchBar filter={this.filterAuthors} />
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;
