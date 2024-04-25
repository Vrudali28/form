import React, { useState } from "react";
import "./AdminDashboard.css"; // Import your CSS file for styling

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleAddBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBook = {
      title: formData.get("title"),
      author: formData.get("author"),
      isbn: formData.get("isbn"),
      publicationDate: formData.get("publicationDate"),
    };
    setBooks([...books, newBook]);
    e.target.reset();
  };

  const handleAddAuthor = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAuthor = {
      name: formData.get("name"),
      birthDate: formData.get("birthDate"),
      biography: formData.get("biography"),
    };
    setAuthors([...authors, newAuthor]);
    e.target.reset();
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleDeleteAuthor = (index) => {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(index, 1);
    setAuthors(updatedAuthors);
  };

  return (
    <div className="admin-dashboard">
      <div className="books-section">
        <h2>Books</h2>
        <form onSubmit={handleAddBook}>
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="author" placeholder="Author" required />
          <input type="text" name="isbn" placeholder="ISBN" required />
          <input type="date" name="publicationDate" required />
          <button type="submit">Add Book</button>
        </form>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} - {book.author} - {book.isbn} -{" "}
              {book.publicationDate}
              <button onClick={() => handleDeleteBook(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="authors-section">
        <h2>Authors</h2>
        <form onSubmit={handleAddAuthor}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="date" name="birthDate" required />
          <textarea name="biography" placeholder="Biography" required />
          <button type="submit">Add Author</button>
        </form>
        <ul>
          {authors.map((author, index) => (
            <li key={index}>
              {author.name} - {author.birthDate} - {author.biography}
              <button onClick={() => handleDeleteAuthor(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
