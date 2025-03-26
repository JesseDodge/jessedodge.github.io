class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="sticky-header">
  <div class="header-content">
    <div class="logo">
      <a class="logo nav-link" style="text-decoration: none;" href="index.html">Jesse Dodge</a>
    </div>

    <div id="menuToggle" class="mobile-menu">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li>
          <a href="index.html" class="nav-link">Home</a>
        </li>
        <li>
          <a href="publications.html" class="nav-link">Publications</a>
        </li>
        <li>
          <a href="press_and_talks.html" class="nav-link">Press and Talks</a>
        </li>
        <li><a href="about_me.html" class="nav-link">About Me</a></li>
      </ul>
    </div>

    <nav class="desktop-navigation">
      <a href="index.html" class="nav-link">Home</a>
      <a href="publications.html" class="nav-link">Publications</a>
      <a href="press_and_talks.html" class="nav-link">Press and Talks</a>
      <a href="about_me.html" class="nav-link">About Me</a>
    </nav>
  </div>
</header>
      `;
  }
}

customElements.define('site-header', SiteHeader);
