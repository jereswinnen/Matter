// =======================================================================
// Imports
// =======================================================================

// Imported scripts go here ;)

// =======================================================================
// Site scripts
// =======================================================================

var mastheadToggle = document.querySelector('.c-masthead__toggle');
var mastheadModal = document.querySelector('.c-masthead-modal');

var handleToggleClick = function handleToggleClick(e) {
   e.preventDefault();
   mastheadModal.classList.toggle('c-masthead-modal--open');
};

mastheadToggle.addEventListener('click', handleToggleClick, false);