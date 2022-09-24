jQuery(document).ready(function(){
    /*
        We would now manipulate the DOM, by adding the "X" button dynamically to each ui-message box
        We would therefore take out the <span> element from index.html and create this button by JS
    */
        // Adding the "X" button
        jQuery(".ui-message").append('<span class="ui-close">X</span>');

    /* 
        We would like to select/access the "X" button on the boxed div and do the following actions: 
    */

    // jQuery(".ui-close").hide();  // just a poc we hide the "X" button when the form loads/refreshes
    // jQuery(".ui-close").fadeOut();  // just a poc we fade out the "X" button when the form loads/refreshes
    // jQuery(".ui-close").slideUp();  // just a poc we slide up the "X" button when the form loads/refreshes

    /*  
        But, we want to write a code in JS, an eventHandler such that 
        when we click on the "X" button, the entire box disappears 
    */
        // Handling the Click event
        jQuery(".ui-close").click(function() {
            // alert("Hello!!!"); // just a poc
            
            /*  this hides all the div-boxes with class ui-message. Which is not the intended goal. 
                We want to apply hide when clicked on individual boxes */
            // jQuery(".ui-message").hide();   

            /*  To do individual box hide we need to traverse the DOM
                We need to find the immediate nearest parent of the clicked element "X"  */
                jQuery(this).parents(".ui-message").fadeOut();
        });
    
    /*
        Now, let's hide the answers to the questions initially, 
        let the questions be highlighted and when clicked it displays the answers
    */
        // Initially hide the annswers for the FAQ section
        jQuery(".answer").hide();
    
    /*
        Now, let's find the JS to handle the FAQ question click
    */
        // Handling the FAQ question click
        jQuery(".faq h4").click(function() {

            // Onclick we want to move/traverse to the nearest class of div of answer and act on that
            // jQuery(this).next(".answer").slideDown(); // slideDown/expand on the answer div
            jQuery(this).next(".answer").slideToggle();  // toggle up on down on click for anser div
        })
        
        // Make the appearance of the FAQ question as clickable blue (from the .faq-question css)
        jQuery(".faq h4").addClass("faq-question");

    /*
        Dynamically load "about" content - that is we do not load the heavy content into the page automatically
        It is loaded on the fly on demand when the user clicks on "Learn More!" - this is the send/receive function
        of Javascript/jQuery with the help of Ajax/j
    */
        // we target the id "about" for the click event on the link "Learn More!" we create some function for the click 
        jQuery("#about").click(function(){
            // we load the about.html only for the body-text class of div within the div of about-placeholder
            // jQuery(".about-placeholder").load("about.html .body-text", function(){alert("load was performed")});
            // jQuery(".about-placeholder").load("about.html .body-text"); 
            $(".about-placeholder").load('file://D:/Debasis/PCS Global/External Training/AI Labs/JQuery-JavaScript/about.html .body-text', function(e){alert("load was performed")}, complete);
            // jQuery(".about-placeholder").live("about.html .body-text"); 
                // the jQuery load method is a powerful Ajax method. 
                // Now, when someone clicks on the link we do not want to follow the link to open a page of about.html
                // so we return false
                // e.preventDefault();
                return false;
                // So, when the link is clicked, it dynamically loads the content into the DOM of the current page 
                // from a different source (about.html) without a page refresh or page reload
        });
});