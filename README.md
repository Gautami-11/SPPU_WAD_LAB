# SPPU_WAD_LAB
Web Application Development Assignments of SPPU Third Year IT Syllabus (2019 pattern)

Assignment No.	Problem Statement

1. Create a responsive web page which shows the ecommerce/college/exam admin dashboard with sidebar and statistics in cards using HTML, CSS and Bootstrap.

2. Write a JavaScript Program to get the user registration data and push to array/local storage with AJAX POST method and data list in new page.

3. Create version control account on GitHub and using Git commands to create repository and push your code to GitHub.

4. Create Docker Container Environment (NVIDEIA Docker or any other).

5. Create an Angular application which will do following actions: Register User, Login User, Show User Data on Profile Component.

6. Create a Node.JS Application which serves a static website.

7. Create four API using Node.JS, ExpressJS and MongoDB for CURD Operations on assignment 2.C

8. Create a simple Mobile Website using jQuery Mobile.

FOR DOCKER
🛠️ 1. Create Project Directory & Files

mkdir demodocker
cd demodocker
touch index.html
touch Dockerfile
📝 2. Add Content to index.html

<!-- index.html -->
<!DOCTYPE html>
<html>
  <head><title>Demo</title></head>
  <body><h1>Hello from Docker!</h1></body>
</html>
📝 3. Add Content to Dockerfile
Dockerfile

# Dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
🐳 4. Build Docker Image


docker build -t demodocker .
▶️ 5. Run Docker Container (Foreground)

docker run -p 8080:80 demodocker
Or to run in background (detached):

b
docker run -d -p 8080:80 demodocker
🌐 6. View in Browser
Open:

http://localhost:8080
