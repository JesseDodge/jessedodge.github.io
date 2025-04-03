document.addEventListener('DOMContentLoaded', function () {
  // Configuration
  const ITEMS_PER_PAGE = 3;
  let currentPage = 1;

  // Get the interview grid container
  const interviewGrid = document.getElementById('interview-grid');
  if (!interviewGrid) return;

  // Calculate pages
  const totalItems = allInterviewData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Function to render a specific page of interview items
  function renderPage(page) {
    // Clear the current content
    interviewGrid.innerHTML = '';

    // Calculate start and end indices for the current page
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

    // Get the current page items
    const currentItems = allInterviewData.slice(startIndex, endIndex);

    // Create and append elements for each interview
    currentItems.forEach((item) => {
      // Create interview container
      const interviewItem = document.createElement('div');
      interviewItem.className = 'interview-item';

      // Create text content area
      const textContent = document.createElement('div');
      textContent.className = 'interview-text';

      // Create venue paragraph
      const venue = document.createElement('p');
      venue.className = 'talk-venue';
      venue.textContent = item.venue;

      // Create title
      const title = document.createElement('h4');
      title.textContent = item.title;

      // Create description
      const description = document.createElement('p');
      description.textContent = item.description;

      // Append text elements
      textContent.appendChild(title);
      textContent.appendChild(description);
      textContent.appendChild(venue);

      // Create media container
      const mediaContainer = document.createElement('div');
      mediaContainer.className = 'interview-media';

      // Add appropriate media
      if (item.mediaType === 'image') {
        const image = document.createElement('img');
        image.className = 'interview-image';
        image.src = item.mediaSource;
        image.alt = item.mediaAlt || item.title;
        mediaContainer.appendChild(image);
      } else if (item.mediaType === 'video') {
        const iframe = document.createElement('iframe');
        iframe.className = 'interview-video';
        iframe.src = item.mediaSource;
        iframe.title = item.mediaTitle || item.title;
        iframe.frameBorder = '0';
        iframe.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
      }

      // Assemble the interview item
      interviewItem.appendChild(textContent);
      interviewItem.appendChild(mediaContainer);

      // Add to container
      interviewGrid.appendChild(interviewItem);
    });
  }

  // Function to create pagination controls
  function createPagination() {
    const paginationContainer = document.getElementById('interview-pagination');
    if (!paginationContainer) return;

    // Clear existing pagination
    paginationContainer.innerHTML = '';

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
        createPagination();
      }
    });
    paginationContainer.appendChild(prevBtn);

    // Calculate which page buttons to show
    const MAX_VISIBLE_BUTTONS = 3;
    let startPage, endPage;

    if (totalPages <= MAX_VISIBLE_BUTTONS) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.floor(MAX_VISIBLE_BUTTONS / 2) + 1) {
        // Near beginning
        startPage = 1;
        endPage = MAX_VISIBLE_BUTTONS;
      } else if (
        currentPage >
        totalPages - Math.floor(MAX_VISIBLE_BUTTONS / 2)
      ) {
        // Near end
        startPage = totalPages - MAX_VISIBLE_BUTTONS + 1;
        endPage = totalPages;
      } else {
        // In middle
        startPage = currentPage - Math.floor(MAX_VISIBLE_BUTTONS / 2);
        endPage = currentPage + Math.floor(MAX_VISIBLE_BUTTONS / 2);
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
        createPagination();
      });
      paginationContainer.appendChild(firstBtn);

      // Add ellipsis if needed
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
        createPagination();
      });
      paginationContainer.appendChild(pageBtn);
    }

    // Last page button if needed
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
        createPagination();
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
        createPagination();
      }
    });
    paginationContainer.appendChild(nextBtn);
  }

  // Initialize
  renderPage(currentPage);
  createPagination();
});
