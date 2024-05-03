// AdminDashboard.js
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./AdminDashboard.css"; // Import your CSS file for styling

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleAddBook = (values, { resetForm }) => {
    setBooks([...books, values]);
    resetForm();
  };

  const handleAddAuthor = (values, { resetForm }) => {
    setAuthors([...authors, values]);
    resetForm();
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
        <Formik
          initialValues={{ title: "", author: "", isbn: "", publicationDate: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = "Title is required";
            }
            if (!values.author) {
              errors.author = "Author is required";
            }
            if (!values.isbn) {
              errors.isbn = "ISBN is required";
            }
            if (!values.publicationDate) {
              errors.publicationDate = "Publication date is required";
            }
            return errors;
          }}
          onSubmit={handleAddBook}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="title" placeholder="Title" />
              <ErrorMessage name="title" component="div" className="error" />
              <Field type="text" name="author" placeholder="Author" />
              <ErrorMessage name="author" component="div" className="error" />
              <Field type="text" name="isbn" placeholder="ISBN" />
              <ErrorMessage name="isbn" component="div" className="error" />
              <Field type="date" name="publicationDate" />
              <ErrorMessage name="publicationDate" component="div" className="error" />
              <button type="submit" disabled={isSubmitting}>
                Add Book
              </button>
            </Form>
          )}
        </Formik>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} - {book.author} - {book.isbn} - {book.publicationDate}
              <button onClick={() => handleDeleteBook(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="authors-section">
        <h2>Authors</h2>
        <Formik
          initialValues={{ name: "", birthDate: "", biography: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Name is required";
            }
            if (!values.birthDate) {
              errors.birthDate = "Birth date is required";
            }
            if (!values.biography) {
              errors.biography = "Biography is required";
            }
            return errors;
          }}
          onSubmit={handleAddAuthor}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />
              <Field type="date" name="birthDate" />
              <ErrorMessage name="birthDate" component="div" className="error" />
              <Field as="textarea" name="biography" placeholder="Biography" />
              <ErrorMessage name="biography" component="div" className="error" />
              <button type="submit" disabled={isSubmitting}>
                Add Author
              </button>
            </Form>
          )}
        </Formik>
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
