import React from "react";

function AuthorDetail(props) {
  const author = props.author;
  return (
    <div className="author col-xs-10">
      <div>
        <h3>{author.first_name + " " + author.last_name}</h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail"
          alt={author.first_name + " " + author.last_name}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{author.books.title}</td>
            <td>{author.first_name + " " + author.last_name}</td>
            <td>{author.books.color}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AuthorDetail;
