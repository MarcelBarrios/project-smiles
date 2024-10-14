window.onscroll = function() {
    var navbar = document.querySelector('#top');
    
    if (window.scrollY > 200) { 
        // Add transparent class when scrolled down more than 200px
        navbar.classList.add('white');
    } else {
        // Remove transparent class when at the top
        navbar.classList.remove('white');
    }
};
