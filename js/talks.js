// talks.js - Script to load featured talks from JSON file

document.addEventListener('DOMContentLoaded', function () {
  // Fetch the talks data
  fetch('talks.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Process the talks with date handling
      const processedTalks = data.talks.map((talk) => {
        // Create a copy of the talk object to avoid modifying the original
        const processedTalk = { ...talk };

        // If date is missing or invalid, use current date
        if (!processedTalk.date) {
          const today = new Date();
          processedTalk.dateObj = today;
          // Format as YYYY-MM-DD for consistency
          processedTalk.date = today.toISOString().split('T')[0];
          console.log(
            `Missing date for talk "${processedTalk.title}", using current date.`
          );
        } else {
          // Try to parse the provided date, fall back to current date if invalid
          try {
            processedTalk.dateObj = new Date(processedTalk.date);
            if (isNaN(processedTalk.dateObj.getTime())) {
              throw new Error('Invalid date');
            }
          } catch (e) {
            const today = new Date();
            processedTalk.dateObj = today;
            processedTalk.date = today.toISOString().split('T')[0];
            console.log(
              `Invalid date for talk "${processedTalk.title}", using current date.`
            );
          }
        }

        return processedTalk;
      });

      // Sort talks by date (newest first)
      const sortedTalks = processedTalks.sort((a, b) => b.dateObj - a.dateObj);

      // Get the 3 most recent talks
      const recentTalks = sortedTalks.slice(0, 4);
      console.log('recent talks', recentTalks)

      // Get the featured-grid element
      const featuredGrid = document.querySelector('.featured-grid');

      // Clear existing content
      featuredGrid.innerHTML = '';

      // Add each talk to the grid
      recentTalks.forEach((talk) => {
        const talkElement = document.createElement('div');
        talkElement.className = 'featured-item';

        // Handle missing values with fallbacks
        const imageUrl = talk.image || 'images/talks/default-talk.jpg';
        const talkUrl = talk.url || '#';
        const talkTitle = talk.title || 'Untitled Talk';

        // Create and populate the talk content
        talkElement.innerHTML = `
          <a href="${talkUrl}" target="_blank">
            <div class="featured-image" style="background-image: url('${imageUrl}'); background-size: contain; background-position: center;"></div>
            <h4>${talkTitle}</h4>
          </a>
        `;

        featuredGrid.appendChild(talkElement);
      });
    })
    .catch((error) => {
      console.error('Error loading talks:', error);
      document.querySelector('.featured-grid').innerHTML =
        '<p>Error loading talks. Please try again later.</p>';
    });
});
