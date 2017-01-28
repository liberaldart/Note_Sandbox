# [Home](https://github.com/liberaldart/Note_Sandbox)

# Understand the project

## Webpack
In order to understand this project we need to understand how webpack works. Please visit
[Learn-Webpack](https://github.com/liberaldart/Note_Sandbox/tree/master/Learn-Webpack) in the parent directory

## React
Later comes the concept of React. In order to understand React, we need to understand 
how a react component is made, how the component stores it's state privately and 
allows only to change it with setState method. Follow the [YouTube playlist](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA)

## Redux
Later we understand how two components interact through their parent component.
For handling complex heirarchy of components communicating among each other, we need an organized
approach. Redux provides that approach through one store, one provider, dumb component, 
smart components,
actions and reducers. Follow the [YouTube Playlist](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a)

## Material
Later on, we learn to use material design components in our components heirarchy. In order to learn
that please visit [Learn-Material](https://github.com/liberaldart/Note_Sandbox/tree/master/Learn-Material) in the parent directory.

## Citation
I learnt the basics of React and Redux pretty quickly with Bucky roberts: [Bucky Roberts Youtube channel](https://www.youtube.com/user/thenewboston)

I learnt the basics of webpack: [webpack](https://webpack.github.io/docs/tutorials/getting-started/)

I learnt the basics of how to use material design for React application from: [material-ui](https://github.com/callemall/material-ui)


![](http://i.imgur.com/DUiL9yn.png)

# React/Sass/Redux Boilerplate

Boilerplate and guide for a React/Sass/Redux build.

## Getting Started

To get started, first install all the necessary dependencies.
```
> npm install
```

Run an initial webpack build
```
> webpack
```

Start the development server (changes will now update live in browser)
```
> npm run start
```

To view your project, go to: [http://localhost:3000/](http://localhost:3000/)

## Links

- [Donate](https://www.patreon.com/thenewboston)
- [thenewboston.com](https://thenewboston.com/)
- [Facebook](https://www.facebook.com/TheNewBoston-464114846956315/)
- [Twitter](https://twitter.com/bucky_roberts)
- [Google+](https://plus.google.com/+BuckyRoberts)
- [reddit](https://www.reddit.com/r/thenewboston/)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
I used the boiler plate from Bucky Roberts's github profile.

# Developing further 

I need to use some UI components from material. Look it up at [this link](https://github.com/liberaldart/Note_Sandbox/tree/master/Learn-Material)

# Got Async functionality in the application with axios

# Connected with elasticsearch api

Had to change the config/elasticsearch.yml file. I added the following lines at the end of the file:


```
http.cors.enabled : true
 
http.cors.allow-origin : "*"
http.cors.allow-methods : OPTIONS, HEAD, GET, POST, PUT, DELETE
http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type, Content-Length
```

This was to allow cross origin in my elaticsearch instance
Design

# Learnt to use Redux with async actions. 

Also learnt the concept of middleware for redux. Learnt to use promise middle, thunk middleware and

# Need for ES7 features

Inside a React subclass you can't use ES6 arrow notation functions. For this we need ES7
Following the article: http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/

Need to install: 
# If you want to use experimental ES7 features
npm install babel-preset-stage-0 --save-dev

Also installed babel runtime. This is needed so that we can reduce filesize that results from 
repeated code. With this runtime liberary the repeated code will be transformed by babel at runtime.

npm install babel-plugin-transform-runtime --save-dev

I also had to follow the suggestion in this stackoverflow answer:
http://stackoverflow.com/questions/35266706/webpack-error-cannot-define-query-and-multiple-loaders-in-loaders-list




# How to get image loader for webpack?

npm install image-webpack-loader --save

{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }


# Get tags component from the community

npm install react-tagsinput --save

# To use the application run the following in the ElasticSearch's kibana's plugin's dev tool:

PUT /subject <= One of the index of the elasticsearch
{
  "mappings": {
      "note": {                  <= document type
        "properties": {              <= fields for this document type
          "back": {
            "type": "text"
          },
          "created": {
            "type": "date",
            "format": "yyyy-MM-dd"
          },
          "data": {
            "type": "text"
          },
          "erased": {
            "type": "boolean"
          },
          "front": {
            "type": "text"
          },
          "revised": {
            "type": "date",
            "format": "yyyy-MM-dd"
          },
          "status": {
            "type": "text"
          },
          "tags": {
            "type": "text"
          }
        }
      }
    }
}

This will initialize the schema that we are using with the application at this stage of development

# Testing React-Redux application

We are following the official recommendation of writing test cases:

[Writing Tests in Redux environment](http://redux.js.org/docs/recipes/WritingTests.html)

The link above recommends to use redux-mock-store for testing redux:
Installing redux-mock-store

It also recommends to install nock to mock the http requests

