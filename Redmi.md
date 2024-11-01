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

## Table of Contents

- [Project Setup](#project-setup)
- [Endpoints Summary](#endpoints-summary)
- [Endpoints](#endpoints)
  - [Welcome Route](#1-welcome-route)
  - [Get All Todos](#2-fetch-all-todos)
  - [Get Todo by ID](#3-fetch-a-single-todo-by-id)
  - [Add a New Todo](#4-add-a-new-todo)
  - [Update a Todo by ID](#5-update-a-todo-by-id)
  - [Delete a Todo by ID](#6-delete-a-todo-by-id)
- [Middleware](#middleware)
  - [Data Validator](#dataValidator)
  - [Check Duplicate Task](#chackDuplicateTask)
  - [Check ID](#chackID)
- [Error Handling](#error-handling)
- [License](#license)

---

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pravin7878/Todo_API.git
