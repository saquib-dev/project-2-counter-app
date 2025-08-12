# Simple Counter App

This is a simple full-stack application that demonstrates a basic interaction between a frontend and a backend API. The application features a counter that can be incremented and decremented. The current count is stored and managed by a backend server, ensuring the value persists across browser refreshes and multiple client sessions.

## Features

-   **Frontend:** A clean and simple user interface built with `HTML`, `CSS`, and vanilla `JavaScript`.
-   **Backend:** A lightweight API created with `Node.js` and the `Express.js` framework to handle counter data.
-   **RESTful API:** Uses `GET` and `POST` endpoints to retrieve and update the counter value.
-   **In-Memory Storage:** The counter value is stored in the server's memory, making it easy to understand the core logic without a database.

## 📂 File Structure

```bash
project-2-counter-app/
├── public/
│   ├── index.html       # The main HTML file for the user interface
│   ├── style.css        # The CSS file for styling the app
│   └── script.js        # The JavaScript file to handle frontend logic and API calls
├── server.js          # The Node.js and Express.js server
├── package.json       # Defines project metadata and dependencies
└── .gitignore         # Specifies intentionally untracked files to ignore
```

## 🛠️ Set Up

Follow these steps to get the application up and running on your local machine.
You must have Node.js installed on your system. You can download it from the official Node.js website.

### **1. Clone the repository**

Clone the repository or create the file structure as outlined above and add the provided code to the respective files.

```bash
git clone [Simple Hello World App](https://github.com/saquib-dev/project-2-counter-app.git)
```

### **2. Open your terminal**

Open your terminal and navigate to the project directory:

```bash
cd project-2-counter-app
```

### **3. Install dependencies**

Install the dependencies listed in package.json:

```bash
npm install
```

### **4. Start the server**

Launch the server with the following command. It will run on `http://localhost:3000`.

```bash
npm start
```

### **Open your web browser and navigate to**

```bash
http://localhost:3000
```
You will see the counter app in your browser, and you can now interact with it!
