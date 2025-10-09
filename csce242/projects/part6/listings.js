let allListings = [];
let filteredListings = [];

// function to load listings from GitHub
async function loadListings() 
{
    try 
    {
        const response = await fetch('https://raw.githubusercontent.com/Endergoo/Endergoo.github.io/main/csce242/projects/part6/json/houses.json');
        
        if (!response.ok) 
        {
            throw new Error('Failed to load listings');
        }
        
        allListings = await response.json();
        filteredListings = [...allListings];
        displayListings(allListings);
    } 
    catch (error) 
    {
        console.error('Error loading listings:', error);
        document.querySelector('.results-count').textContent = 'Error loading listings';
        document.querySelector('.listings-grid').innerHTML = '<p>Unable to load property listings. Please try again later.</p>';
    }
}

// function to display listings witht the helpof W3schools
function displayListings(listings) 
{
    const listingsGrid = document.querySelector('.listings-grid');
    listingsGrid.innerHTML = '';

    listings.forEach(listing => 
    {
        const listingCard = document.createElement('div');
        listingCard.className = 'listing-card';
        listingCard.innerHTML = 
        `
            <div class="listing-image">
                <div class="house-img">
                    <a href="#"><img class="house-picture" src="../json/images/${listing.img}" alt="Property"></a>
                </div>
                <div class="listing-badge">For Sale</div>
            </div>
            <div class="listing-info">
                <div class="price">$${listing.price.toLocaleString()}</div>
                <div class="details">${listing.beds} Bed | ${listing.baths} Bath | ${listing.sqft} sqft | ${listing['available?'] === 'yes' ? 'Available' : 'Sold'}</div>
                <div class="address">${listing.location}</div>
            </div>
        `;
        listingsGrid.appendChild(listingCard);
    });

    // results count
    document.querySelector('.results-count').textContent = `Showing ${listings.length} results`;
}

// filter listings witht the help of w3schools
function filterListings() 
{
    const location = document.getElementById('location-filter').value.toLowerCase();
    const priceRange = document.getElementById('price-filter').value;
    const type = document.getElementById('type-filter').value.toLowerCase();
    const beds = document.getElementById('beds-filter').value;
    const baths = document.getElementById('baths-filter').value;

    filteredListings = allListings.filter(listing => 
    {
        // location 
        if (location && !listing.location.toLowerCase().includes(location)) 
        {
            return false;
        }

        // price range 
        if (priceRange) 
        {
            const [min, max] = priceRange.split('-').map(Number);
            if (listing.price < min || listing.price > max) 
            {
                return false;
            }
        }

        // property type 
        if (type && listing.type.toLowerCase() !== type) 
        {
            return false;
        }

        // bedrooms 
        if (beds && listing.beds < parseInt(beds)) 
        {
            return false;
        }

        // bathrooms 
        if (baths && listing.baths < parseInt(baths)) 
        {
            return false;
        }

        return true;
    });

    displayListings(filteredListings);
}

// filter button
document.getElementById('apply-filters').addEventListener('click', filterListings);

// Load when page loads
document.addEventListener('DOMContentLoaded', loadListings);