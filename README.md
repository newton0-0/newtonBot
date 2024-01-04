# NewtonBot Chat Application

This repository contains a simplified version of an AI chat application with a React frontend and a Nest.js backend. The application allows users to input text and receive responses from an AI assistant.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Code Quality](#code-quality)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Minimal user interface for text input and responses.
- Chat-like display for user input and AI assistant responses.
- Type-safe code using TypeScript.
- Simple yet user-friendly styling.
- REST API for receiving user input and providing responses.
- Response algorithm based on predefined keywords.
- Integration of frontend and backend for seamless communication.

## Prerequisites

Make sure you have the following installed:

- Node.js and npm: [Install Node.js](https://nodejs.org/)
- Git: [Install Git](https://git-scm.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chatbot.git
   ```

2. Change into the project directory:

   ```bash
   cd chatbot
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

4. Run the application:

   ```bash
   # Run frontend (in the frontend directory)
   npm start

   # Run backend (in the backend directory)
   npm run start:dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use the AI chat application.

## Folder Structure

```
chatbot/
├── frontend/           # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── styles/
│       └── ...
└── backend/            # Nest.js backend
    ├── src/
    │   ├── controllers/
    │   ├── services/
    │   └── ...
    └── ...
```

## Code Quality

- The code follows Airbnb's coding standards.
- Clean, maintainable, and efficient code.
- Comments and documentation explain complex logic where necessary.

## API Endpoints

- `POST http://localhost:3000/tasks`: Receives user input from the frontend.
