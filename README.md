# Text-Translator-be
## Deployed Frontend Link: https://punt-partner-text-translator-deepak-y.netlify.app/

## Project Presentation Video Link: https://www.loom.com/share/55ea11acb6354d6093eb84dc3ec61bb5
This is the text-translator backend repo
**Backend API Link:** https://text-translator-be.onrender.com/translator/


# Translator Backend

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Translator Backend application provides a robust backend for translating text between various languages using the Google Translate API. It stores the translation history in a MongoDB database and provides simple API endpoints for translation and health checks.

## Features

- Translate text from one language to another using the Google Translate API.
- Save translation history to a MongoDB database.
- Simple API endpoints for translation and health check.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors
- translate-google-api

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>=14.x)
- MongoDB

### Installation Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Deepak-25yadav/text-translator-be.git
    cd translator-backend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your configuration:**

    ```plaintext
    PORT=8080
    MONGODB_URL=mongodb://localhost:27017/translator
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:8080`.

## Usage

Once the server is running, you can use the provided API endpoints to interact with the translation service.

## API Endpoints

### Health Check

- **GET /translator/**

  **Response:**
  ```json
  {
    "message": "Congratulations your translator is working fine."
  }



![postman-punt-partner-1](https://github.com/Deepak-25yadav/text-translator-be/assets/112754831/792db5dc-f418-4019-8f21-18ec3ec83817)

![postman-punt-partner-2](https://github.com/Deepak-25yadav/text-translator-be/assets/112754831/673c7946-99e8-4716-9d07-9a006cde7da1)
