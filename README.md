
# FED Starter Kit


## General info
This is a Bootstrap 5 Boilerplate with Gulp 4+. Sass, browser-sync.
“Basic” is the ultimate Bootstrap 5 starter boilerplate with Gulp 4 and webpack for automation and rapid development.

## Feature
* Modular Architecture (Scss, html, javascript) in dev side.
* BEM Methodology
* Gsap for animations.

## Prerequisite
Project is created with:
* Node > 14 (tested in 14.18.2)

## Technologies
Project is created with:
* Bootstrap 5
* Gulp 4
* Sass
* Sourcemaps
* Webpack
* Concatenation
* CSS minification
* HTML minitification
* Uglify
* Image optimization
* Gulpfile Include
* BroswserSync
* Live reload
* Jquery if required.


  

## Installation
```
yarn install
```

```
yarn dev
```

```
yarn build
```


You should see a live browser at http://localhost:3000/.

## Development
Override Bootstrap’s variables and create your custom styles

dev/scss/_variables_.scss


Add custom scripts Modular structure

src/js/index.js



## Production

```
yarn build
```

## Folder Architecture
* dev
    * fonts (Used for custom font)
    * images (Used for static image and assets)
    * includes (Used to include modular html file throughout the pages)
        * Include has modules folder where all developed modules section are inserted.
        * Global Modules html like header, footer.html are kept outside
        * Each Modules and its variation should have separate modules scss and javascript file if needed within the modules.
    * scripts (Used to define global and modular javascript within)
        * Global functions and utility should be present within app.js which will be called throughout the files.
        * Separate modules javascript should have same name as modules developed and should be included with the modules inside <b>Includes</b> folder with same name.
    * scss (Used to define global app.scss and design.scss as entry point. app.scss is used globally and design.scss is used to define modular scss file associated within the files)
        * app.css complied should be used globally.
        * app.scss contains all bootstrap5 needed global things like variables(colors, size ...) , buttons , form input  which are being used throughout the site.
        * design.scss will contain all the modular css associated with the modules and included on our architecture but should be implemented individually within the modules used while developing on sitecore.
* gulpfile.js / gulpSettings (Used to automate the process with gulp 4 and webpack )




