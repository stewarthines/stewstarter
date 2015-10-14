# Stew's Starter Pack

*Stewart Hines | October 2015*

This is my starter pack. Just combining a lot of things that I've learned to make my own framework. The purpose of the framework is to be a starting point for future project. So, this is not an end in and of it's self. Let's take a quick look at what's inside!

### Basic Files and Wish List
- [x] My own very own **Reset.sass** file that's [based off a tutorial from TUTS+](http://code.tutsplus.com/tutorials/quick-tip-create-your-own-simple-resetcss-file--net-206)
- [x] A Typographic based vertical spacing system from [Gridlvoer](http://www.gridlover.net/app/)
- [x] 11 Shades of Gray. Not 50. [From Viget](https://viget.com/inspire/shades-of-gray-yes-really)
- [x] Good Contrast for my text, backgrounds, and borders. [Thanks Colorable](http://jxnblk.com/colorable/demos/text/)
- [ ] A very simple (responsive) Flexbox based Block System.
- [ ] A very simpe (responsive) Flexbox grid system. Based off of [Solved by Flexbox.](https://philipwalton.github.io/solved-by-flexbox/)
- [ ] Basic Forms
- [ ] Basic Buttons
- [ ] Simple Global Responsive Header
- [ ] Optional *"sticky"* header
- [ ] Dropdowns for the header
- [ ] Consistent look and feel / art style

### Nerdy Code Stuff
- [x] .SASS based styles instead of.SCSS or .LESS [(Thanks @DevTips!)](https://www.youtube.com/watch?v=-Z3qznaE9vc)
- [x] Gulp!
- [x] Auto compile my SASS - [Gulp Sass baby.](https://www.npmjs.com/package/gulp-sass)
- [x] Use [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [x] Auto refresh the browser
- [ ] Auto compress images
- [x] Angularjs Based
- [ ] As semantic as I know how to get the HTML

### How to get started

This starter pack is made to assist me in learning new stuff as well as serving as my own framework that isn't Bootstrap or some other 3rd Party framework. As such, it's not going to be super robust since it is serving my needs. **But** if you'd like to learn with me or use it, here's the low-down on getting started:

1. Clone or download the repo
2. Installed [Node.js](https://nodejs.org/en/) You're going to want [NPM](https://www.npmjs.com/) which is installed with Node.js
3. Install [Gulp](http://gulpjs.com/) with `npm install -g gulp`
4. `npm install` should handle the rest. This will install:
  - [Gulp Sass](https://www.npmjs.com/package/gulp-sass) to use the .SASS files. If you're new to this check out [SASS](http://sass-lang.com/).
  - [AutoPrefixer](https://www.npmjs.com/package/gulp-autoprefixer) to auto prefix CSS3 stuff
  - [BrowserSync](http://www.browsersync.io/docs/gulp/) to reload the browser on changes because I'm lazy.
5. CD to the directory and run `gulp` to start the server, watch for changes, and compile the SASS

### What's inside?

Here's what is in the project:

**App Directory** is where the project lives. You'll see the `index.html` file there. This is the file that *BrowserSync* is looking at. Inside of **App** you'll find the following:

- **CSS** is the directory where the stylesheets live. These are compiled from the SASS files. So there should only be one file, `master.css` which comes from `master.sass`
- **img** is where you put images. I've added a **favicon** folder to store the favicon icons.
- **sass** is where the SASS files live. We'll get in to that structure in a moment.
- **scripts** is where JavaScript is stored. Right now i've got angular and my `webPage.js`
- **index.html** is the home page.

After you run `npm install` you'll see a **node_modules** directory. This is where the dependences for *gulp, gulp-sass, AutoPrefixer, & BrowserSync* live. Node Package Manager (npm) installs these for you.

The **.gitignore** file is telling git which files to ignore and not check in. We want to ignore our node_modules folder because we don't want to be depended on it. NPM will create a fresh node_modules folder when we run npm install

**gulpfile.js** is our build system. This is where we go and tell our app to compile SASS and reload the page as well as autoprefix our CSS. In the future i'll compress images, strip comments, and compress code here.

**package.json** tells `npm install` what to install. It's going to go grab the dependinces of every thing that needs to be installed.

**readme.md** is this file. It's a markdown file. Why are you reading about a file that told you to read it? :)

### About SASS

I choose `.SASS` over `.SCSS` `.LESS` or `.CSS` because [I like it better.]((https://www.youtube.com/watch?v=-Z3qznaE9vc)) Do you want to use SCSS? You just need to go to the `gulpfile.js` and change all the `.sass` to `.scss` You'll also need to convert all the files. If you want to use `.LESS` you'll need to do `npm install --save-dev gulp-less` and you'll need to adjust the gulpfile accordingly. You can learn more about it [here.](https://www.npmjs.com/package/gulp-less) If you want to use plain old CSS that's fine too. Just put it in the CSS directory, ignore the gulpfile and link to it in the head of the `index.html` file.

### SASS Structure

- `master.sass` is importing all the other files and compiling them together to make `master.css`
- `_reset.sass` is my reset file. I wanted control over my reset and to understand what was happening. So i used this insead of something like [normalize.](https://necolas.github.io/normalize.css/) As it stands this file is a little bloated. I could strip out all the variables and move them to `_config.sass` and I could move all the type stuff to `_type.sass` But I also use this file as-is and don't want to have to keep up with 3 or 4 files. This is what it is, a reset that is reseting the browser and giving me super common class names and styles that I change all the time.
- `_config.sass` This is a variables page. Change colors, font sizes, etc. here.
- `_mixins.sass` Mixins are reuseable chunks of code. They can be simple styles like the shadows or whole chucnks of code. If you do something over and over again, put it here. If it's a single value put it in the config.
- `_forms.sass` is where i style form elements like inputs and textareas
- `_btns.sass` is where I style buttons.
- `_block-grid.sass` is where the structure comes from. It's based off of [Start Up Framework,](http://designmodo.com/startup/) [Blocs App,](http://blocsapp.com/) and [Solved by Flexbox.](https://philipwalton.github.io/solved-by-flexbox/) It uses the newer [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) instead of the [Older](http://960.gs/) floats and clears. I have built it so that you don't use a normal grid but instead you use pre-built blocks. I'll add a grild later.
- `_block-styles.sass` This is where I'll add special styles to each block. Blocks should be broken apart. So a hero block should get it's own `_block-hero.sass` file.
- `_layous.sass` This is where I start to deal with things that don't fit into the block model. It's not done yet.
- `_layous-header.sass` This is for the **global** header. You know, the one that goes on each page. It'll be responsive in the end. Right now, it's just kind of there.
- `_layous-footer.sass` This is for the **global** footer. You know ,the one that goes on the bottom of each page. It's not even close to done yet.

### Angular Stuff

I'm new to angular. We use it here at work. It's pretty nice. I feel like HTML should have been written with some of these superpowers. That said. I'm still new to this game. So you can follow the same tutorial I am. It's [LevelUp Tut's](http://leveluptuts.com/) fantastic [AngularJS for Everyone](https://www.youtube.com/playlist?list=PLLnpHn493BHF6utwkwpo7RN-GPg1sZhvK) series.
