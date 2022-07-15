
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
    * script (Used to define global and modular javascript within)
    * scss (Used to define global app.scss and design.scss as entry point. app.scss is used globally and desgin.scss is used to define modular scss file associated within the files)
* gulpfile.js / gulpSettings (Used to automate the process with gulp 4 and webpack )




