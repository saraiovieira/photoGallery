# 📸 Photo Gallery

Using Vanilla Javacript (frontend) and Node.js (back-end) to build a photo gallery with photos from Porto, Portugal that has a login authentication (using bcrypt and express-session) and the possibility to add more photos.


## Table of Contents

- [Purpose](#purpose)
- [Screenshots](#screenshots)
- [Run Locally](#run-locally)
- [Tech Stack](#tech-stack)

## Purpose

I did the front-end when I was taking the course [Frontend Masters Web Development](https://frontendmasters.com/bootcamp/) and I customized it in my way.
Later I had the idea to create a server-side for this project where only authenticated users could upload new photos.

## Screenshots

#### Home page
<img height="600" width="1029" src="https://raw.githubusercontent.com/saraiovieira/photoGallery/main/screenshots/main-page.png" alt="Main Page" />

#### Login page
<img height="700" width="1029" src="https://raw.githubusercontent.com/saraiovieira/photoGallery/main/screenshots/login-page.png" alt="Login Page">

#### Upload page
<img height="600" width="1000" src="https://raw.githubusercontent.com/saraiovieira/photoGallery/main/screenshots/upload-page.png" alt="Upload Page">

#### Upload page with image
<img height="600" width="1000" src="https://raw.githubusercontent.com/saraiovieira/photoGallery/main/screenshots/upload-page-image.png" alt="Upload Page with image">

#### Uploaded page
<img height="600" width="1000" src="https://raw.githubusercontent.com/saraiovieira/photoGallery/main/screenshots/uploaded-page.png" alt="Uploaded Page">
 


## Run Locally

Clone the project

```bash
  git clone https://saraiovieira/photoGallery.git
```

Go to the project directory

```bash
  cd photoGallery
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Client:** [Pug](https://pugjs.org/api/getting-started.html),CSS and Vanilla JavaScript.
**Server:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/), [Multer](https://www.npmjs.com/package/multer) 
