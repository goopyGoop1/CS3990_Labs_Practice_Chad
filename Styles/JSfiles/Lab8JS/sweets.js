// wait for the full html document to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // get a reference to the menu title (the part you click to expand/collapse the menu)
    const menuTitle = document.getElementById('menu-title');

    // get the list of menu items (initially hidden)
    const menuList = document.getElementById('menu-list');

    // get the image element that will show the selected sweet's picture
    const sweetImage = document.getElementById('sweet-image');

    // track which item is currently selected, starts as null
    let selectedItem = null;

    // when the menu title is clicked, toggle open/collapse
    menuTitle.addEventListener('click', () => {

        // check if the menu is currently open (visible)
        const isOpen = menuList.style.display === 'block';

        // toggle the menu's visibility based on its current state
        menuList.style.display = isOpen ? 'none' : 'block';

        if (!isOpen) {
            // if the menu is being opened
            if (selectedItem) {
                // if there was a previously selected item, show the image again
                sweetImage.style.display = 'block';
            }
        } else {
            // if the menu is being collapsed (closed)
            if (selectedItem) {
                // remove the red highlight from the selected item
                selectedItem.classList.remove('active');

                // reset the selected item variable
                selectedItem = null;
            }

            // hide the image when the menu is collapsed
            sweetImage.style.display = 'none';
        }
    });

    // use event delegation to handle clicks on any of the list items
    menuList.addEventListener('click', (e) => {
        // check if the clicked element is an <li> item (a menu option)
        if (e.target.tagName === 'LI') {

            // if there's a previously selected item, remove its highlight
            if (selectedItem) {
                selectedItem.classList.remove('active');
            }

            // set the clicked element as the new selected item
            selectedItem = e.target;

            // add the highlight class to it so it appears red
            selectedItem.classList.add('active');

            // get the image url stored in the selected item
            const imageUrl = selectedItem.getAttribute('data-img');

            // update the image source to match the selected item
            sweetImage.src = imageUrl;

            // make sure the image is visible
            sweetImage.style.display = 'block';
        }
    });
});

