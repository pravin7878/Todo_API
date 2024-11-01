# Todo API

This is a simple REST API for managing todos, built with Node.js and Express. The API allows users to create, retrieve, update, and delete todo items, all stored in a local `db.json` file. This project includes custom middleware for validating data, preventing duplicate tasks, and verifying IDs for operations.

---

## Features

- Retrieve all todo items
- Retrieve a single todo item by ID
- Add a new todo item with data validation
- Update an existing todo item by ID
- Delete a todo item by ID

---
## Endpoints Summary

| Endpoint          | Method | Description                      |
|-------------------|--------|----------------------------------|
| `/`               | GET    | Welcome message from the server  |
| `/todos`          | GET    | Retrieves all todos              |
| `/todos/:id`      | GET    | Fetches a single todo by ID      |
| `/add-todo`       | POST   | Adds a new todo with validation  |
| `/edit-todo/:id`  | PATCH  | Updates an existing todo by ID   |
| `/remove-todo/:id`| DELETE | Deletes a todo by ID             |

---

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pravin7878/Todo_API.git
