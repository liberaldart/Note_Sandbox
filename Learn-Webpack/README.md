# [Home](https://github.com/liberaldart/Note_Sandbox)

#Learn Webpack:

## Install

	0. install webpack: npm install webpack -g
	
## Create Entry

	1. create file entry.js with content:
		document.write("it works!");

## Create html file

	2. Create index.html:
	<html>
    	<head>
        	<meta charset="utf-8">
        </head>
        <body>
        	<script type="text/javascript" src="bundle.js" charset="utf-8"></script>
        </body>
	</html>

## Run webpack command to get bundle.js

	3. Run command: webpack ./entry.js bundle.js
	4. open index.html it will display "it works!"
	
## Use Require

	5. Create content.js with the content: module.exports = "It works from content.js.";
	6. Edit entry.js: 
		- document.write("It works.");
		+ document.write(require("./content.js"));	
	7. Run 3. again
	8. Run 4 and see the result. It should print "It works from content.js";

## Concept of Loaders

webpack only knows how to work with JavaScript files. We also need it to be able to load css and apply style:
	9. Install css-loader and style-loader locally: npm i css-loader style-loader --save-dev
	10. Add style.css with content: 
	body {
	    background: yellow;
	}
	11. Update entry.js with :
	+ require("!style!css!./style.css");
	  document.write(require("./content.js"));
!style!css! : This specifies the loaders chain that would convert the style.css file into javascript module
There is a lesser cryptic way of dealing with this. We could write require('./style.css'), but then we would
need to run the command `webpack ./entry.js bundle.js --module-bind 'css=style!css'`. In my eyes, the 11.
way of doing this is better.

## Configuration file

	12. Lets write the configuration in webpack.config.js
	module.exports = {
		entry: './entry.js',
		output: {
			path: __dirname,
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{ test: /\.css$/, loader: "style!css" }
			]
		}
	};
	13. Now we just need to run `webpack`

For some extra information please visit: [Official Webpage for Webpack](https://webpack.github.io/docs/tutorials/getting-started/)
