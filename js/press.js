// press.js - Script to load press items from JSON file

document.addEventListener('DOMContentLoaded', function () {
  // Fetch the press data
  fetch('press.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Get the press-grid element
      const pressGrid = document.querySelector('.press-grid');

      // Clear existing content
      pressGrid.innerHTML = '';

      // Add each press item to the grid
      data.pressItems.forEach((item) => {
        const pressElement = document.createElement('div');
        pressElement.className = 'press-item';

        // Handle missing values with fallbacks
        const imageUrl = item.image || 'images/press/default-press.jpg';
        const articleUrl = item.url || '#';
        const articleTitle = item.title || 'Untitled Article';

        // Create and populate the press content
        pressElement.innerHTML = `
          <a href="${articleUrl}" class="press-link" target="_blank">
            <div class="press-image" style="background-image: url('${imageUrl}');"></div>
            <h4>${articleTitle}</h4>
          </a>
        `;

        pressGrid.appendChild(pressElement);
      });
    })
    .catch((error) => {
      console.error('Error loading press items:', error);
      document.querySelector('.press-grid').innerHTML =
        '<p>Error loading press items. Please try again later.</p>';
    });
});
