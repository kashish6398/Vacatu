// script.js

const properties = [
    {
        id: 1,
        title: "Luxury Villa with Private Pool",
        price: 850,
        location: "Santorini, Greece",
        rating: 4.9,
        image: "images/luxury_villa.png",
        specs: {
            guests: 8,
            bedrooms: 4,
            bathrooms: 3,
            sqft: 3200
        }
    },
    {
        id: 2,
        title: "Modern Apartment Overlooking the Coast",
        price: 320,
        location: "Amalfi Coast, Italy",
        rating: 4.8,
        image: "images/modern_apartment.png",
        specs: {
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1400
        }
    },
    {
        id: 3,
        title: "Rustic Stone House in Braga",
        price: 210,
        location: "Braga, Portugal",
        rating: 4.7,
        image: "images/rustic_house.png",
        specs: {
            guests: 6,
            bedrooms: 3,
            bathrooms: 2,
            sqft: 2100
        }
    },
    {
        id: 4,
        title: "Contemporary Penthouse in Downtown",
        price: 540,
        location: "New York, USA",
        rating: 5.0,
        image: "images/penthouse.png",
        specs: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 1800
        }
    }
];

// Function to generate property cards
function renderPropertyCards() {
    const gridContainer = document.getElementById('rentals-grid');
    
    gridContainer.innerHTML = '';

    properties.forEach(property => {
        const card = document.createElement('article');
        card.classList.add('rental-card');
        card.dataset.id = property.id;

        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${property.image}" alt="${property.title}" loading="lazy">
                <button class="btn-wishlist" aria-label="Add to wishlist" onclick="toggleWishlist(this)">
                    <i class='bx bx-heart'></i>
                </button>
                <div class="rating-badge">
                    <i class='bx bxs-star'></i>
                    <span>${property.rating.toFixed(1)}</span>
                </div>
            </div>
            
            <div class="card-content">
                <div class="card-location">
                    <i class='bx bxs-map'></i>
                    <span>${property.location}</span>
                </div>
                
                <h3 class="card-title">${property.title}</h3>
                
                <div class="card-price">
                    $${property.price} <span>/ night</span>
                </div>
                
                <div class="card-features">
                    <div class="feature-item" title="Guests">
                        <i class='bx bx-group'></i>
                        <span>${property.specs.guests}</span>
                    </div>
                    <div class="feature-item" title="Bedrooms">
                        <i class='bx bx-bed' ></i>
                        <span>${property.specs.bedrooms}</span>
                    </div>
                    <div class="feature-item" title="Bathrooms">
                        <i class='bx bx-bath'></i>
                        <span>${property.specs.bathrooms}</span>
                    </div>
                    <div class="feature-item" title="Square Feet">
                        <i class='bx bx-area'></i>
                        <span>${property.specs.sqft} sqft</span>
                    </div>
                </div>
                
                <a href="#" class="btn-view-details">View Details</a>
            </div>
        `;

        gridContainer.appendChild(card);
    });
}

window.toggleWishlist = function(button) {
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('bx-heart')) {
        icon.classList.remove('bx-heart');
        icon.classList.add('bxs-heart', 'active');
    } else {
        icon.classList.remove('bxs-heart', 'active');
        icon.classList.add('bx-heart');
    }
}

document.addEventListener('DOMContentLoaded', renderPropertyCards);
