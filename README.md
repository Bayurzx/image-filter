Udagram Image Filter Microservice
=====================================

This is a Node.js application that allows users to filter and manipulate images using the Jimp module and the fs module. The filtered image can be posted to the client using the `res.status(200).sendFile` method.

## Home ('/')
http://image-filter-dev2222.us-east-1.elasticbeanstalk.com/

## FilteredImage ('/filteredimage?')
http://image-filter-dev2222.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://img.freepik.com/premium-photo/abstract-texture-cubic-geometric-color-background_305419-1919.jpg

Features
--------

-   Use of good cloud git process for version control
-   Use of TypeScript and Node.js for development
-   Understanding of RESTFUL design for API creation
-   Understanding of HTTP status codes for handling responses
-   Functional cloud deployments using Elastic Beanstalk
-   Understanding of AWS Elastic Beanstalk's CLI and Console Dashboard for managing deployments

Requirements
------------

-   Node.js
-   npm
-   AWS Elastic Beanstalk CLI

Installation
------------

-  Clone the repository to your local machine

``` bash
git clone https://github.com/bayurzx/image-filter.git
```


-  Install the dependencies

``` bash
npm install
```

-  Build the TypeScript files

``` bash
npm run build
```


-  Deploy the application to Elastic Beanstalk

``` bash
eb  init
eb create
```


Usage
-----

-  Start the application



``` bash
npm run dev
```


-  Make a POST request to the `/filter` endpoint with the image attached as a form-data file
-  The filtered image will be returned with a status code of 200.

Note
----

Make sure you have the correct permissions for your IAM user to create and manage Elastic Beanstalk environments.

The image-filter project originally created by `Udacity` is for educational and demonstration purposes only. Be sure to properly handle and validate user input before applying any image manipulation in a production environment.