// Data for Featured Rentals mimicking image_1.png and repairing missing details
const featuredProperties = [
  {
    id: 1,
    title: "Luxury Beach Villa",
    location: "Maldives",
    rating: "4.98",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bx-wifi', text: 'Wi-Fi' },
       { icon: 'bx-swim', text: 'Pool' },
       { icon: 'bx-bed', text: '4 Beds' }
    ]
  },
  {
    id: 2,
    title: "Modern City Penthouse",
    location: "New York City, USA",
    rating: "4.95",
    price: "$850",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bx-wifi', text: 'Fast Wi-Fi' },
       { icon: 'bx-buildings', text: 'Skyline' },
       { icon: 'bx-bed', text: '2 Beds' }
    ]
  },
  {
    id: 3,
    title: "Charming Stone Cottage",
    location: "Tuscany, Italy",
    rating: "4.89",
    price: "$340",
    image: "https://images.unsplash.com/photo-1542853655-09cd9e71cc81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bx-wifi', text: 'Wi-Fi' },
       { icon: 'bx-leaf', text: 'Garden' },
       { icon: 'bx-bed', text: '3 Beds' }
    ]
  },
  {
    id: 4,
    title: "Glass Observatory Dome",
    location: "Tromsø, Norway",
    rating: "5.0",
    price: "$600",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
       { icon: 'bx-wifi', text: 'Wi-Fi' },
       { icon: 'bx-landscape', text: 'Views' },
       { icon: 'bx-bed', text: '1 Bed' }
    ]
  }
];

function renderFeatured() {
  const container = document.getElementById('featured-grid');
  if(!container) return;

  const html = featuredProperties.map(prop => {
    // Generate amenities string
    const amenitiesHtml = prop.amenities.map(a => `
      <div><i class='bx ${a.icon}'></i> ${a.text}</div>
    `).join('');
    
    return `
      <article class="property-card">
        <div class="img-container">
          <button class="heart-icon" onclick="toggleHeart(this)"><i class='bx bx-heart'></i></button>
          <img src="${prop.image}" alt="${prop.title}" loading="lazy">
        </div>
        
        <div class="card-info">
          <div class="card-header-flex">
            <h3 class="property-title">${prop.location}</h3>
            <div class="property-rating">
              <i class='bx bxs-star'></i> ${prop.rating}
            </div>
          </div>
          
          <p class="property-desc">${prop.title}</p>
          
          <div class="property-amenities">
            ${amenitiesHtml}
          </div>
          
          <div class="property-price-row">
            <div class="property-price">
              ${prop.price} <span>night</span>
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
    renderFeatured();
});
