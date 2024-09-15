/**
 * This script must be load after jQuery is loaded.
 */

$(window).on('keypress', (e) => {
    if (e.key == 'r') {
        alert('You pressed the "r" key!');
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        a.click();
    }
});
