# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./images/screenshot-coding-bootcamp%20-testimonials-slider.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/responsive-webpage-using-flexbox-DFQxFITMVd)
- Live Site URL: (https://doileo.github.io/bootcamp-testimonials/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

While working on this project I've learned how to create and navigate a slider using JavaScript.

Here it goes the code snippet below for the slider:

```html
<div class="review-button">
  <button id="prev" onclick="previousReview()">
    <img src="./images/icon-prev.svg" alt="Previous arrow">
  </button>
        
  <button id="next" onclick="nextReview()">
    <img src="./images/icon-next.svg" alt="Next arrow">
  </button>
</div>
```
```js
let rev = 0;
        carousel(rev);
  
        function previousReview() {
            rev = rev - 1;
            carousel(rev);
        }

        function nextReview() {
            rev = rev + 1;
            carousel(rev);
        }

        function carousel(review) {
            let reviews = document
                .getElementsByClassName("review-items");
  
            if (review >= reviews.length) {
                review = 0;
                rev = 0;
            }
            if (review < 0) {
                review = reviews.length - 1;
                rev = reviews.length - 1;
            }
            for (let i = 0; i < reviews.length; i++) {
                reviews[i].style.display = "none";
            }
            reviews[review].style.display = "block";
        }
```

### Continued development

I would like to keep using and implementing the length property for other projects. 

### Useful resources

- [Resource 1](https://www.geeksforgeeks.org/how-to-create-a-review-carousel-using-javascript/) - This example illustrated how to make the slider work. I really liked it and plan to use it in the future.

## Author

- Website - [Doina](https://doileo.github.io/portfolio/)
- Frontend Mentor - [@Doileo](https://www.frontendmentor.io/profile/Doileo)

