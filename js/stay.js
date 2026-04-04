// Array of stays combining original 'Antigravity' concepts with realistic formatting
const staysData = [
  {
    id: 1,
    title: "Neon Orbit Suite",
    location: "Space Station Alpha",
    rating: "4.95",
    price: "$450",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bx-wifi', text: 'Stellar Wi-Fi' },
       { icon: 'bx-swim', text: 'Zero-G Pool' },
       { icon: 'bx-bed', text: '1 Float Bed' }
    ]
  },
  {
    id: 2,
    title: "Aurora Glass Dome",
    location: "Lunar North Pole",
    rating: "4.82",
    price: "$320",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bx-wifi', text: 'Wi-Fi' },
       { icon: 'bx-landscape', text: 'Vista View' },
       { icon: 'bx-area', text: '800 sq ft' }
    ]
  },
  {
    id: 3,
    title: "Quantum Pod",
    location: "Martian Outpost",
    rating: "4.70",
    price: "$210",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bxs-bot', text: 'AI Butler' },
       { icon: 'bx-bed', text: '2 Beds' }
    ]
  },
  {
    id: 4,
    title: "Nebula Retreat",
    location: "Andromeda Sector",
    rating: "5.0",
    price: "$890",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bx-wifi', text: 'Quantum Net' },
       { icon: 'bx-shower', text: 'Sonic Shower' },
       { icon: 'bx-area', text: '1200 sq ft' }
    ]
  }
];

function renderStays() {
  const container = document.getElementById('stays-grid');
  if(!container) return;

  const html = staysData.map(stay => {
    // Generate amenities string
    const amenitiesHtml = stay.amenities.map(a => `
      <div><i class='bx ${a.icon}'></i> ${a.text}</div>
    `).join('');

    return `
      <article class="stay-card">
        <div class="img-container">
          <button class="heart-icon" onclick="toggleHeart(this)"><i class='bx bx-heart'></i></button>
          <img src="${stay.image}" alt="${stay.title}" loading="lazy">
        </div>
        
        <div class="card-info">
          <div class="card-header-flex">
            <h3 class="stay-location">${stay.location}</h3>
            <div class="stay-rating">
              <i class='bx bxs-star'></i> ${stay.rating}
            </div>
          </div>
          
          <p class="stay-title">${stay.title}</p>
          
          <div class="stay-amenities">
            ${amenitiesHtml}
          </div>
          
          <div class="stay-price-row">
            <div class="stay-price">
              ${stay.price} <span>night</span>
            </div>
            <button class="btn-details">View Details</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

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
    renderStays();
});
