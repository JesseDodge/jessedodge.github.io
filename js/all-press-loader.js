document.addEventListener('DOMContentLoaded', function () {
  // Configuration
  const ITEMS_PER_PAGE = 9;
  let currentPage = 1;

  // DOM elements
  const pressListContainer = document.getElementById('press-list');
  const paginationContainer = document.getElementById('press-pagination');

  // Function to render a specific page of press items
  function renderPage(page) {
    // Clear the current content
    pressListContainer.innerHTML = '';

    // Calculate start and end indices for the current page
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, allPressData.length);

    // Get the current page items
    const currentItems = allPressData.slice(startIndex, endIndex);

    // Create and append elements for each press item
    currentItems.forEach((item) => {
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

  // Function to create pagination controls
  function createPagination() {
    // Clear existing pagination
    paginationContainer.innerHTML = '';

    // Calculate total pages
    const totalPages = Math.ceil(allPressData.length / ITEMS_PER_PAGE);

    if (totalPages <= 1) {
      // No need for pagination if there's only one page
      return;
    }

    // Create previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn prev';
    prevBtn.innerHTML = '&laquo;';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updatePagination();
      }
    });
    paginationContainer.appendChild(prevBtn);

    // Determine which page buttons to show
    const maxVisibleButtons = 3;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisibleButtons) {
      const halfButtons = Math.floor(maxVisibleButtons / 2);

      if (currentPage <= halfButtons) {
        // Near the beginning
        endPage = maxVisibleButtons;
      } else if (currentPage > totalPages - halfButtons) {
        // Near the end
        startPage = totalPages - maxVisibleButtons + 1;
      } else {
        // In the middle
        startPage = currentPage - halfButtons;
        endPage = currentPage + halfButtons;
      }
    }

    // First page button if not in range
    if (startPage > 1) {
      const firstBtn = document.createElement('button');
      firstBtn.className = 'pagination-btn';
      firstBtn.textContent = '1';
      firstBtn.addEventListener('click', () => {
        currentPage = 1;
        renderPage(currentPage);
        updatePagination();
      });
      paginationContainer.appendChild(firstBtn);

      if (startPage > 2) {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
      }
    }

    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.className = 'pagination-btn';
      if (i === currentPage) {
        pageBtn.classList.add('active');
      }
      pageBtn.textContent = i;
      pageBtn.addEventListener('click', () => {
        currentPage = i;
        renderPage(currentPage);
        updatePagination();
      });
      paginationContainer.appendChild(pageBtn);
    }

    // Last page button if not in range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
      }

      const lastBtn = document.createElement('button');
      lastBtn.className = 'pagination-btn';
      lastBtn.textContent = totalPages;
      lastBtn.addEventListener('click', () => {
        currentPage = totalPages;
        renderPage(currentPage);
        updatePagination();
      });
      paginationContainer.appendChild(lastBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn next';
    nextBtn.innerHTML = '&raquo;';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        document.addEventListener('DOMContentLoaded', function () {
          // Configuration
          const ITEMS_PER_PAGE = 9;
          let currentPage = 1;

          // DOM elements
          const pressListContainer = document.getElementById('press-list');
          const paginationContainer =
            document.getElementById('press-pagination');

          // Function to render a specific page of press items
          function renderPage(page) {
            // Clear the current content
            pressListContainer.innerHTML = '';

            // Calculate start and end indices for the current page
            const startIndex = (page - 1) * ITEMS_PER_PAGE;
            const endIndex = Math.min(
              startIndex + ITEMS_PER_PAGE,
              allPressData.length
            );

            // Get the current page items
            const currentItems = allPressData.slice(startIndex, endIndex);

            // Create and append elements for each press item
            currentItems.forEach((item) => {
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
              authorSpan.textContent = `, ${item.author}`;
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

          // Function to create pagination controls
          function createPagination() {
            // Clear existing pagination
            paginationContainer.innerHTML = '';

            // Calculate total pages
            const totalPages = Math.ceil(allPressData.length / ITEMS_PER_PAGE);

            if (totalPages <= 1) {
              // No need for pagination if there's only one page
              return;
            }

            // Create previous button
            const prevBtn = document.createElement('button');
            prevBtn.className = 'pagination-btn prev';
            prevBtn.innerHTML = '&laquo;';
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', () => {
              if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
                updatePagination();
              }
            });
            paginationContainer.appendChild(prevBtn);

            // Determine which page buttons to show
            const maxVisibleButtons = 5;
            let startPage = 1;
            let endPage = totalPages;

            if (totalPages > maxVisibleButtons) {
              const halfButtons = Math.floor(maxVisibleButtons / 2);

              if (currentPage <= halfButtons) {
                // Near the beginning
                endPage = maxVisibleButtons;
              } else if (currentPage > totalPages - halfButtons) {
                // Near the end
                startPage = totalPages - maxVisibleButtons + 1;
              } else {
                // In the middle
                startPage = currentPage - halfButtons;
                endPage = currentPage + halfButtons;
              }
            }

            // First page button if not in range
            if (startPage > 1) {
              const firstBtn = document.createElement('button');
              firstBtn.className = 'pagination-btn';
              firstBtn.textContent = '1';
              firstBtn.addEventListener('click', () => {
                currentPage = 1;
                renderPage(currentPage);
                updatePagination();
              });
              paginationContainer.appendChild(firstBtn);

              if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-ellipsis';
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
              }
            }

            // Page number buttons
            for (let i = startPage; i <= endPage; i++) {
              const pageBtn = document.createElement('button');
              pageBtn.className = 'pagination-btn';
              if (i === currentPage) {
                pageBtn.classList.add('active');
              }
              pageBtn.textContent = i;
              pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderPage(currentPage);
                updatePagination();
              });
              paginationContainer.appendChild(pageBtn);
            }

            // Last page button if not in range
            if (endPage < totalPages) {
              if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-ellipsis';
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
              }

              const lastBtn = document.createElement('button');
              lastBtn.className = 'pagination-btn';
              lastBtn.textContent = totalPages;
              lastBtn.addEventListener('click', () => {
                currentPage = totalPages;
                renderPage(currentPage);
                updatePagination();
              });
              paginationContainer.appendChild(lastBtn);
            }

            // Next button
            const nextBtn = document.createElement('button');
            nextBtn.className = 'pagination-btn next';
            nextBtn.innerHTML = '&raquo;';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', () => {
              if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
                updatePagination();
              }
            });
            paginationContainer.appendChild(nextBtn);
          }

          // Function to update pagination based on current page
          function updatePagination() {
            createPagination();
          }

          // Initialize the display
          renderPage(currentPage);
          createPagination();
        });
        currentPage++;
        renderPage(currentPage);
        updatePagination();
      }
    });
    paginationContainer.appendChild(nextBtn);
  }

  // Function to update pagination based on current page
  function updatePagination() {
    createPagination();
  }

  // Initialize the display
  renderPage(currentPage);
  createPagination();
});
