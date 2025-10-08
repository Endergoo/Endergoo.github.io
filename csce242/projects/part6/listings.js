// Add this to a new file like 'listings.js' or at the bottom of your HTML in a <script> tag

async function loadListings() {
    try {
        // Fetch the JSON file
        const response = await fetch('listings.json');
        const listings = await response.json();
        
        // Get the listings grid container
        const listingsGrid = document.querySelector('.listings-grid');
        
        // Clear existing listings
        listingsGrid.innerHTML = '';
        
        // Loop through each listing and create HTML
        listings.forEach(listing => {
            const listingCard = `
                <div class="listing-card">
                    <div class="listing-image">
                        <div class="house-img">
                            <a href="#"><img class="house-picture" src="images/${listing.img}"></a>
                        </div>
                        <div class="listing-badge">For Sale</div>
                    </div>
                    <div class="listing-info">
                        <div class="price">$${listing.price.toLocaleString()}</div>
                        <div class="details">${listing.beds} Bed | ${listing.baths} Bath | ${listing.sqft} sqft | ${listing['available?'] === 'yes' ? 'Available' : 'Sold'}</div>
                        <div class="address">${listing.location}</div>
                    </div>
                </div>
            `;
            
            listingsGrid.innerHTML += listingCard;
        });
        
        // Update results count
        document.querySelector('.results-count').textContent = `Showing ${listings.length} results`;
        
    } catch (error) {
        console.error('Error loading listings:', error);
    }
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', loadListings);