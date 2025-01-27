```markdown
# Recipe Manager Application

A simple and elegant recipe management application built with **React** and **Firebase Realtime Database**. This app allows users to add, edit, delete, and search recipes by title or ingredients.

---

## Features

- Add new recipes with ingredients and preparation steps.
- Edit existing recipes.
- Delete recipes from the list.
- Search for recipes by title or ingredients.
- Minimalistic and user-friendly interface.

---

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Firebase Realtime Database**: Backend to store and manage recipe data.
- **JavaScript**: Main programming language.
- **CSS**: For styling the application.

---

## Prerequisites

Before running the application, make sure you have the following installed:

1. **Node.js** (version 14.x or higher) and **npm** (Node Package Manager).
2. A Firebase account and a project set up in the Firebase console.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/DharaniKrishnan2298/recipe-application.git
cd recipe-manager
```

### 2. Install Dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Configure Firebase

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable the **Realtime Database** service in your Firebase project.
3. Go to the project settings, find your **Firebase configuration**, and copy the credentials.

4. Create a `.env` file in the root directory of the project and add the Firebase configuration:

```plaintext
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

> **Note**: Replace `your-api-key` and other placeholders with your actual Firebase configuration values.

### 4. Start the Application

Run the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

---

## Folder Structure

```plaintext
recipe-manager/
├── public/
│   └── index.html             # HTML file
├── src/
│   ├── components/
│   │   ├── AddRecipeForm.js   # Component for adding/editing recipes
│   │   ├── RecipeList.js      # Component for listing recipes
│   │   └── SearchBar.js       # Component for searching recipes
│   ├── firebase/
│   │   └── firebaseConfig.js  # Firebase configuration
│   ├── pages/
│   │   └── HomePage.js        # Main page of the app
│   ├── App.js                 # Main React component
│   ├── index.js               # Entry point of the app
│   └── styles.css             # Styling for the app
├── .env                       # Environment variables (not committed to Git)
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

---

## Usage

### Adding a Recipe
1. Fill in the **Recipe Title**, **Ingredients** (comma-separated), and **Steps** in the form.
2. Click "Add Recipe" to save the recipe.

### Editing a Recipe
1. Click the "Edit" button on a recipe.
2. The form will populate with the recipe details.
3. Update the details and click "Update Recipe" to save changes.

### Deleting a Recipe
1. Click the "Delete" button on a recipe.
2. The recipe will be permanently removed from the database.

### Searching Recipes
1. Use the search bar to filter recipes by title or ingredients.
2. The list will update in real-time based on your input.

---

## Deployment

You can deploy this app using **Netlify**, **Vercel**, or any static hosting service. To build the app for production:

```bash
npm run build
```

Upload the contents of the `build` directory to your hosting provider.

---
