document.addEventListener('DOMContentLoaded', () => {
    console.log("Exploration space script loaded.");

    // --- Step 1: Define Artwork Data ---
    // This array holds the information for each artwork piece.
    // We use the structure we discussed. Replace placeholders with real data.
    const artworksData = [
        {
            id: "cafe_potsdam_night",
            title: "Café Corner, Potsdam Night",
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/7_eiddxy.png", // Full image
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209003/7_eiddxy.png", // Smaller thumbnail for fragment
            description: "Highlights the contrast between warm light and cool darkness...",
            theme: "Nightscape",
            location: "Potsdam",
            related: ["woodhouse_baabe", "potsdam_street_1"], // Example related IDs
            initialX: 200, // Pixels from left for starting position
            initialY: 150  // Pixels from top for starting position
        },
        {
            id: "woodhouse_baabe",
            title: "Woodhouse, Baabe",
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/9_gkmvef.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209004/9_gkmvef.png",
            description: "Captures a structure within the unique landscape of the Rügen coast...",
            theme: "Coastal",
            location: "Rügen",
            related: ["coastal_scene_1"],
            initialX: 500,
            initialY: 400
        },
        {
            id: "potsdam_street_1", // Example ID for another piece
            title: "Potsdam Street View",
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/5_ulpq6j.png", // Placeholder image
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209004/5_ulpq6j.png", // Placeholder thumb
            description: "A quiet street scene capturing the afternoon light.",
            theme: "Architecture",
            location: "Potsdam",
            related: ["cafe_potsdam_night"],
            initialX: 800,
            initialY: 250
        }
        // --- Add more artwork objects here ---
    ];

    // Log the data to the console to confirm it's loaded
    console.log("Artwork Data:", artworksData);

    // --- Step 2: Create and Place Fragments (will be added here next) ---
    const space = document.getElementById('exploration-space');

    artworksData.forEach(artwork => {
        // Create a div element for the fragment
        const fragment = document.createElement('div');
        fragment.classList.add('artwork-fragment');
        fragment.style.left = `${artwork.initialX}px`;
        fragment.style.top = `${artwork.initialY}px`;
        fragment.dataset.id = artwork.id; // Store id for later reference

        // Create an img element inside the fragment div
        const img = document.createElement('img');
        img.src = artwork.fragmentUrl;
        img.alt = `Fragment of ${artwork.title}`; // Add alt text
        fragment.appendChild(img);

        // Add the fragment to the exploration space
        space.appendChild(fragment);

        // Add click listener (basic example - logs ID)
        fragment.addEventListener('click', () => {
            console.log(`Clicked fragment ID: ${artwork.id}`);
            // Later, this will open the detailed view/lightbox
        });
    });


    // --- Step 3: Implement Pan & Zoom (will be added here later) ---


    // --- Step 4: Implement Detail View/Lightbox (will be added here later) ---


}); // End DOMContentLoaded
