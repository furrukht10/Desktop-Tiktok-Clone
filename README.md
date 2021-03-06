
<h1 align ="center" > Tiktok Clone </h1>
A MERN Stack, desktop-oriented version of Tiktok being built with React.js, Node.js, Express.js, MongoDB & Firebase.

This is still in development and a lot of implementations will be made accordingly.

This simple work-in progress application mocks Tiktok and allows users to view and play videos. Developers can connect to a database
and add more videos to the API. User posting functionality will be implemented soon.

- Utilized Node.js, Express.js, and MongoDB to develop a RESTful API and run the back-end (Deployed on Heroku)
- Utilized React.js + Material UI for the front-end (Deployed on Firebase)

## How To Use

To use the application as a user, simple head over to the <a href="https://tiktok-clone-8030b.web.app/">Deployed Version</a>
Click on a video to play it, and press the like button to like a video. Scroll down to view more videos.

To use the application as a developer and add videos to the database, clone the repository.
```
cd tiktok-backend
npm install
npm start
```
To retrive all the posts
```
GET : localhost:/v2/posts
```
To make a post:
```
POST: localhost:/v2/posts
In req.body (json) include -> url, channel, messages, song, likes, shares, description
```

You can then open up Postman and use localhost to send a POST request with the appropriate requirements
of a video model.

Note, you must set up the config.env variables for your PORT and MongoDB connection


## Demo

### Deployed Version

https://tiktok-clone-8030b.web.app/

![React App](https://user-images.githubusercontent.com/79553858/148662472-e072d04c-d3a7-4741-a1e3-d121d86571f6.gif)

## To Do

Implement posting functionality for users
</br>
Implement commenting functionality for users

