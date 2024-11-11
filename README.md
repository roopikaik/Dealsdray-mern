# Dealsdray MERN Assignment

This project is a MERN stack-based application that displays a list of employees with an option to edit and delete their details. It includes both the frontend (React) and the backend (Node.js with Express) to handle API requests and database management. The application allows users to manage employee data such as name, email, phone, designation, and courses.

## Introduction

This project is built as a part of an assignment to create a full-stack application using the MERN stack. It allows users to manage an employee list, which includes options to edit or delete records. The frontend is built with React, and the backend is developed using Node.js and Express, with MongoDB as the database.

## Features
- Display a list of employees from the database.
- Edit employee details.
- Delete employees from the list.
- Responsive design using Material UI.
- Backend API endpoints for handling employee data.

## Tech Stack
- **Frontend**: React, Material UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (optional for secure routes)
- **Deployment**: GitHub (Frontend), Heroku/Local (Backend)

## Installation

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/roopikaik/Dealsdray-mern.git
cd Dealsdray-mern
```

### 2. Install Backend Dependencies

Navigate to the backend folder and install the necessary packages:

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Navigate to the frontend folder and install the necessary packages:

```bash
cd frontend
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the `backend` directory and configure it with your MongoDB URI and other configurations. Example:

```env
MONGO_URI=mongodb+srv://Roopika:emp@cluster0.ydsby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=4001
```

### 5. Run the Application

To run both the backend and frontend:

- **Backend**: Run the following command in the backend directory:

```bash
node Express.js
```

- **Frontend**: Run the following command in the frontend directory:

```bash
npm start
```

The application should now be running locally on [http://localhost:3000](http://localhost:3000) (Frontend) and [http://localhost:4001](http://localhost:4001) (Backend).

## Usage

Once the application is up and running, you will be able to:

- View the employee list.
- Edit employee details by clicking on the "Edit" link.
- Delete employees by clicking the "Delete" button.


## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Open a pull request.

