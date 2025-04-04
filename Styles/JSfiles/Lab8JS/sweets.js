document.addEventListener('DOMContentLoaded', () => {
    const menuTitle = document.getElementById('menu-title');
    const menuList = document.getElementById('menu-list');
    const sweetImage = document.getElementById('sweet-image');
    let selectedItem = null;

    // Toggle menu open/collapse
    menuTitle.addEventListener('click', () => {
    const isOpen = menuList.style.display === 'block';
    menuList.style.display = isOpen ? 'none' : 'block';

    if (!isOpen) {
        // When opening the menu, re-show selection if any
        if (selectedItem) {
        sweetImage.style.display = 'block';
        }
    } else {
        // When collapsing, hide image and deselect item
        if (selectedItem) {
        selectedItem.classList.remove('active');
        selectedItem = null;
        }
        sweetImage.style.display = 'none';
    }
    });

    // Event delegation for menu item clicks
    menuList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        if (selectedItem) {
        selectedItem.classList.remove('active');
        }

        selectedItem = e.target;
        selectedItem.classList.add('active');

        const imageUrl = selectedItem.getAttribute('data-img');
        sweetImage.src = imageUrl;
        sweetImage.style.display = 'block';
    }
    });
});
