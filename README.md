# Pre Requisite
1. Download IDE (Recommend VS Code)
2. Install Node.js onto system

# Run the Server
The server will be required to be turned on in order to call the stripe api to take payments. 
1. CD into Stripe Folder directory
2. Type node server.cjs
   
# Run Application
1. Clone Repository
2. CD into root of the repository in a IDE of your choice
3. Run npm install to install all packages
4. In the ide terminal type "npm run dev" to run the application.
5. Open localhost server on your browser.

# Structure of Files
The part of the project we will be writing code in is the src file.
## 1. Root of SRC<br>
#### Index.jsx: 
The driver function of the react application, it serves as an entry point into the app. We will likely not change this during development and leave it as such. For the sake of practical application, you can ignore this.<br>
#### Index.css: 
Global styles that can be accessed through the application, we can use this to create light/dark theme, etc.<br> 
#### App.jsx: 
Index.jsx will directly reference <App/> as a gateway into the application. It will default to the path = ```'\'```, hence we give it the Home path. We will add more paths that can be utilized throughout the application for redirection.<br>
## 2. View Folder<br>
The purpose of this folder is to store the pages into different folders, for example the View Folder contains the "Home" folder, the Home folder will contain the code to the frontend of the Home Screen.<br>
## 3. Utils Folder<br>
The purpose of this folder is to store utility functions, variables, etc.<br>
## 4. Components Folder<br>
The purpose of Components folder is to store reusable components that we will create. An example of a potential reusable component is navbar, footer, etc. These are components that can be copy and pasted into other Views.<br>
## 5. Assets Folder<br>
Assets folder can store things such as jpg files, txt files, json files, etc.<br>
