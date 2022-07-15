let rev = 0;
        carousel(rev);
  
        /*this function will be executed when the previous button is clicked,
         it decreases the variable by 1*/
        function previousReview() {
            rev = rev - 1;
            carousel(rev);
        }

        /*this function will be executed when the next button is clicked, 
        it increases the variable by 1, 
        then it will be passed to the carousel function
        */
        function nextReview() {
            rev = rev + 1;
            carousel(rev);
        }


        //this function gets all the elements using the specified class name as an object
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