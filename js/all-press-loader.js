document.addEventListener('DOMContentLoaded', function () {
  const pressListContainer = document.getElementById('press-list');

  // Function to render a specific page of press items
  function renderPage() {
    allPressData.forEach((item) => {
      // Create press item container
      const pressItem = document.createElement('div');
      pressItem.className = 'press-item';

      // Create date element
      const dateDiv = document.createElement('div');
      dateDiv.className = 'press-date';
      dateDiv.textContent = item.date;

      // Create content container
      const contentDiv = document.createElement('div');
      contentDiv.className = 'press-content';

      // Create publication header
      const publication = document.createElement('h4');
      publication.textContent = item.publication;

      // Create paragraph for title and author
      const titleAuthorPara = document.createElement('p');

      // Create the link for the title
      const titleLink = document.createElement('a');
      titleLink.href = item.url;
      titleLink.target = '_blank'; // Open in new tab
      titleLink.rel = 'noopener noreferrer'; // Security best practice
      titleLink.className = 'press-title-link';
      titleLink.textContent = `"${item.title}"`;

      // Add the link to the paragraph
      titleAuthorPara.appendChild(titleLink);

      // Add the author text
      const authorSpan = document.createElement('span');
      authorSpan.textContent = `${item.author}`;
      titleAuthorPara.appendChild(authorSpan);

      // Append elements to the content div
      contentDiv.appendChild(publication);
      contentDiv.appendChild(titleAuthorPara);

      // Append all elements to the press item
      pressItem.appendChild(dateDiv);
      pressItem.appendChild(contentDiv);

      // Add to container
      pressListContainer.appendChild(pressItem);
    });
  }


  // Initialize the display
  renderPage();
});
