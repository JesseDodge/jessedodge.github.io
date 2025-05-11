class InfoBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <aside class="profile-section">
        <div class="profile-content">
          <div class="profile-avatar">
            <img
              src="headshots/jesse_headshot_for_ai2.jpg"
              alt="Jesse Dodge"
              style="max-width: 100%"
            />
          </div>
          <div class="profile-info">
            <p>Jesse Dodge</p>
            <p>Senior Research Scientist</p> 
            <p>Allen Institute for AI</p>
            <p>PhD, Carnegie Mellon University</p>
            <a href="mailto:jessed@allenai.org">jessed@allenai.org</a>
          </div>
          <div class="profile-links">
            <a
              target="_blank"
              href="https://scholar.google.com/citations?hl=en&user=nHy_1doAAAAJ&view_op=list_works&sortby=pubdate"
              class="profile-link"
              ><i class="ai ai-google-scholar fa-2x"></i
            ></a>
            <a
              target="_blank"
              href="https://www.semanticscholar.org/author/Jesse-Dodge/34176020"
              class="profile-link"
              ><i class="ai ai-semantic-scholar fa-2x"></i
            ></a>
            <a
              target="_blank"
              href="https://www.twitter.com/JesseDodge"
              class="profile-link"
              ><i class="fab fa-twitter fa-2x"></i
            ></a>
          </div>
        </div>
      </aside>
      `;
  }
}

customElements.define('info-box', InfoBox);
