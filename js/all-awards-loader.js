document.addEventListener('DOMContentLoaded', function () {
  // Configuration
  const ITEMS_PER_PAGE = 2;
  const MAX_VISIBLE_BUTTONS = 3; // Fewer pagination buttons
  let currentPage = 1;

  // DOM elements
  const awardsGridContainer = document.getElementById('awards-grid');
  const paginationContainer = document.getElementById('awards-pagination');

  // Function to render a specific page of award items
  function renderPage(page) {
    // Clear the current content
    awardsGridContainer.innerHTML = '';

    // Calculate start and end indices for the current page
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, allAwardsData.length);

    // Get the current page items
    const currentItems = allAwardsData.slice(startIndex, endIndex);

    // Create and append elements for each award item
    currentItems.forEach((item) => {
      // Create award item container
      const awardItem = document.createElement('div');
      awardItem.className = 'award-item';

      // Create award link
      const awardLink = document.createElement('a');
      awardLink.href = item.url;
      awardLink.className = 'award-link';
      awardLink.target = '_blank'; // Open in new tab

      // Create award info container
      const awardInfo = document.createElement('div');
      awardInfo.className = 'award-info';

      // Create award title
      const awardTitle = document.createElement('h4');
      if (item.url) {
        // Create clickable link that opens in new tab
        const awardLink = document.createElement('a');
        awardLink.href = item.url;
        awardLink.textContent = item.title;
        awardLink.className = 'award-link';
        awardLink.target = '_blank'; // Open in new tab
        awardLink.rel = 'noopener noreferrer'; // Security best practice
        awardTitle.appendChild(awardLink);
      } else {
        // No URL, just display as text
        awardTitle.textContent = item.title;
      }

      // Create award description
      const awardDesc = document.createElement('p');
      awardDesc.textContent = item.description;

      // Build the award item structure
      awardInfo.appendChild(awardTitle);
      awardInfo.appendChild(awardDesc);
      awardItem.appendChild(awardInfo);
  

      // Add to container
      awardsGridContainer.appendChild(awardItem);
    });
  }

  // Function to create pagination controls
  function createPagination() {
    paginationContainer.innerHTML = '';

    // Calculate total pages
    const totalPages = Math.ceil(allAwardsData.length / ITEMS_PER_PAGE);

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
    let startPage, endPage;

    if (totalPages <= MAX_VISIBLE_BUTTONS) {
      // Show all pages if fewer than MAX_VISIBLE_BUTTONS
      startPage = 1;
      endPage = totalPages;
    } else {
      // In the beginning
      if (currentPage <= Math.floor(MAX_VISIBLE_BUTTONS / 2) + 1) {
        startPage = 1;
        endPage = MAX_VISIBLE_BUTTONS;
      }
      // In the middle
      else if (currentPage < totalPages - Math.floor(MAX_VISIBLE_BUTTONS / 2)) {
        startPage = currentPage - Math.floor(MAX_VISIBLE_BUTTONS / 2);
        endPage = currentPage + Math.floor(MAX_VISIBLE_BUTTONS / 2);
      }
      // At the end
      else {
        startPage = totalPages - MAX_VISIBLE_BUTTONS + 1;
        endPage = totalPages;
      }
    }

    // First page button if not visible
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

      // Add ellipsis if there's a gap
      if (startPage > 2) {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
      }
    }

    // Create visible page buttons
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

    // Last page button if not visible
    if (endPage < totalPages) {
      // Add ellipsis if there's a gap
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

    // Create next button
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

  // Initialize the display
  if (awardsGridContainer && paginationContainer) {
    renderPage(currentPage);
    createPagination();
  }
});
