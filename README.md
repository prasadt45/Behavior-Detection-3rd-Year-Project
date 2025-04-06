# Body Posture Recognition System 🚀

This is a full-stack application for body posture recognition, combining:
- **Backend**: Node.js, Express, MongoDB 🖥️
- **Frontend**: React, Vite, TailwindCSS 💻
- **Machine Learning**: Python-based posture detection model 🤖

The system analyzes user posture through uploaded images and provides feedback.

## Table of Contents 📚

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Machine Learning Model](#machine-learning-model)
- [Middleware](#middleware)
- [Utilities](#utilities)
- [License](#license)

## Installation ⚙️

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration 🔧

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

## Usage 🚀

1. Start the development server:
    ```sh
    npm run dev
    ```

2. The server will be running on `http://localhost:<PORT>`.

## Folder Structure 🗂️

### Backend 🖥️
- **Controllers/**: 🎮 Request/response handlers
- **DB/**: 🗃️ MongoDB connection & models
- **Middlewares/**: 🛡️ Auth & file handling
- **Routes/**: 🛣️ API endpoint definitions  
- **utils/**: 🧰 Helper functions
- **MLmodel/**: 🤖 Python posture detection
- **public/**: 🖼️ Static assets

### Frontend 💻
- **src/**: 🏗️ Main application code
  - **components/**: 🧩 UI components
    - HeroSection.jsx: 🌟 Landing page hero
    - UploadSection.jsx: ⬆️ Image upload
    - Navbar.jsx: 🧭 Navigation
    - Footer.jsx: 🦶 Page footer
  - **context/**: 🌐 State management
  - **assets/**: 🎨 Images & icons
- **public/**: 🌐 Static files

## API Endpoints 🔌

### User Routes 👤
- `POST /api/v1/users/register` - ✍️ Register new user
- `POST /api/v1/users/login` - 🔑 Login user
- `POST /api/v1/users/logout` - 🚪 Logout user  
- `GET /api/v1/users/profile` - 👤 Get user profile
- `POST /api/v1/users/uploadimage` - 📤 Upload posture image

## Frontend Components 🧩

- **HeroSection.jsx**: 🌟 Landing page introduction
- **UploadSection.jsx**: 📤 Image upload interface
- **Navbar.jsx**: 🧭 Navigation menu
- **Footer.jsx**: 🦶 Page footer content
- **About.jsx**: ℹ️ Project information
- **Contact.jsx**: 📞 Contact form
- **Usecase.jsx**: 💡 Use case examples

## Machine Learning Model 🤖

The `MLmodel/` directory contains files related to the machine learning model used in the project:
- **box.jpg**, **dancing.jpeg**, **swim.jpg**: Sample images used for testing the model.
- **checkpoint.pth**: The trained model checkpoint file.
- **label_map.csv**: Mapping of labels for the model's output.
- **test.py**: Script for testing the model's performance.

## Middleware 🛡️

- [auth.middleware.js](http://_vscodecontentref_/0) - Middleware for verifying JWT tokens.
- [multer.middleware.js](http://_vscodecontentref_/1) - Middleware for handling file uploads using Multer.

## Utilities 🛠️

- [ApiError.js](http://_vscodecontentref_/2) - Custom error class for API errors.
- [Apiresponce.js](http://_vscodecontentref_/3) - Custom response class for API responses.
- [asyncHandler.js](http://_vscodecontentref_/4) - Utility for handling async route handlers.
- [cloudinary.js](http://_vscodecontentref_/5) - Utility for uploading and deleting files from Cloudinary.

## License 📜

This project is licensed under the ISC License.
