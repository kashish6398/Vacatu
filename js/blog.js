// Data for Blog
const blogData = [
  {
    id: 1,
    title: "10 Tips for Your European Vacation",
    category: "guides",
    date: "Aug 12, 2026",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    excerpt: "Everything you need to know to prepare for a multi-city trip across Europe without stress."
  },
  {
    id: 2,
    title: "Eco-Friendly Hospitality is the Future",
    category: "tech",
    date: "Sep 04, 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    excerpt: "How hosts are implementing sustainable practices into modern luxury retreats effortlessly."
  },
  {
    id: 3,
    title: "My Week Disconnected in the Alps",
    category: "stories",
    date: "Oct 28, 2026",
    image: "https://images.unsplash.com/photo-1522814890259-246e7f8069d2?auto=format&fit=crop&w=800&q=80",
    excerpt: "A personal account of leaving all communications behind and hiking through the silent mountains."
  },
  {
    id: 4,
    title: "Packing Essentials for Tropical Escapes",
    category: "guides",
    date: "Nov 10, 2026",
    image: "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=800&q=80",
    excerpt: "Stay cool without the bulk using our curated list for the ultimate beach getaway."
  }
];

function renderBlog(filterCategory = 'all') {
  const container = document.getElementById('blog-grid');
  if(!container) return;

  // Filter logic
  let filtered = blogData.filter(post => {
    return filterCategory === 'all' || post.category === filterCategory;
  });

  const html = filtered.map(post => `
    <article class="blog-card">
      <div class="img-wrapper">
        <img src="${post.image}" alt="${post.title}" class="blog-img" loading="lazy">
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span>${post.category}</span>
          <span>${post.date}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <span class="read-more">Read Article <i class='bx bx-right-arrow-alt'></i></span>
      </div>
    </article>
  `).join('');

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; color: var(--text-gray); width: 100%;">No entries found matching your criteria.</p>`;
  } else {
    container.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderBlog();

  // Tags filter listener
  const tags = document.querySelectorAll('.tag');
  
  tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      // Update active styling
      tags.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');

      // Update state and re-render
      const currentCategory = e.target.getAttribute('data-category');
      renderBlog(currentCategory);
    });
  });
});
