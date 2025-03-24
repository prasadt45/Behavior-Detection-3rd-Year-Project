"# Behavior-Detection-3rd-Year-" 
# Backend

This is the backend for the Behavior Detection 3rd Year project. It is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Utilities](#utilities)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    MONGODB_URI=<your-mongodb-uri>
    ACCESS_TOKEN_SECRET=<your-access-token-secret>
    ACCESS_TOKEN_EXPIRY=<access-token-expiry-time>
    REFRESH_TOKEN_SECRET=<your-refresh-token-secret>
    REFRESH_TOKEN_EXPIRY=<refresh-token-expiry-time>
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    PORT=<your-port>
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. The server will be running on `http://localhost:<PORT>`.

## Folder Structure


## API Endpoints

### User Routes

- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - Login a user
- `POST /api/v1/users/logout` - Logout a user
- `GET /api/v1/users/profile` - Get user profile
- `POST /api/v1/users/uploadimage` - Upload user image

## Middleware

- [auth.middleware.js](http://_vscodecontentref_/0) - Middleware for verifying JWT tokens
- [multer.middleware.js](http://_vscodecontentref_/1) - Middleware for handling file uploads using Multer

## Utilities

- [ApiError.js](http://_vscodecontentref_/2) - Custom error class for API errors
- [Apiresponce.js](http://_vscodecontentref_/3) - Custom response class for API responses
- [asyncHandler.js](http://_vscodecontentref_/4) - Utility for handling async route handlers
- [cloudinary.js](http://_vscodecontentref_/5) - Utility for uploading and deleting files from Cloudinary

## License

This project is licensed under the ISC License.
