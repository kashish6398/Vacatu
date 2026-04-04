// Data for Experiences
const experiencesData = [
  {
    id: 1,
    title: "Zero-G Scuba Diving",
    location: "Hydro-Nebula",
    rating: "4.8",
    price: "From $120",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Mountain Trek & Camp",
    location: "Swiss Alps",
    rating: "4.9",
    price: "From $85",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Canyon Gliding",
    location: "Grand Canyon, USA",
    rating: "4.92",
    price: "From $200",
    image: "https://images.unsplash.com/photo-1520696956691-3fdfcfced7de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Bioluminescent Float",
    location: "Crystal Caverns",
    rating: "4.75",
    price: "From $65",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Local Culinary Tour",
    location: "Tokyo, Japan",
    rating: "4.98",
    price: "From $150",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Sunset Surfing Lesson",
    location: "Bali, Indonesia",
    rating: "4.85",
    price: "From $45",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80"
  }
];

function renderExperiences() {
  const container = document.getElementById('experiences-grid');
  if(!container) return;

  const html = experiencesData.map(exp => `
    <article class="exp-card">
      <div class="img-container">
        <button class="heart-icon" onclick="toggleHeart(this)"><i class='bx bx-heart'></i></button>
        <img src="${exp.image}" alt="${exp.title}" loading="lazy">
      </div>
      
      <div class="card-info">
        <div class="card-header-flex">
          <h3 class="exp-title">${exp.title}</h3>
          <div class="exp-rating">
            <i class='bx bxs-star'></i> ${exp.rating}
          </div>
        </div>
        
        <p class="exp-location">${exp.location}</p>
        
        <div class="exp-price-row">
          <div class="exp-price">
            ${exp.price} <span>/ person</span>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  container.innerHTML = html;
}

// Function to handle favorite toggling
window.toggleHeart = function(btn) {
  btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  if(btn.classList.contains('active')) {
    icon.classList.remove('bx-heart');
    icon.classList.add('bxs-heart');
  } else {
    icon.classList.remove('bxs-heart');
    icon.classList.add('bx-heart');
  }
};

document.addEventListener('DOMContentLoaded', () => {
    renderExperiences();
});
