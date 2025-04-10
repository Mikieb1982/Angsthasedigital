document.addEventListener('DOMContentLoaded', () => {
    console.log("Exploration space script loaded.");

    // --- Step 1: Define Artwork Data ---
    // Populated from the portfolio HTML provided earlier.
    // Review and adjust descriptions, themes, locations, related IDs, and positions.
    const artworksData = [
        // Spotlight / Gallery Items
        {
            id: "cafe_potsdam_night",
            title: "Café Corner, Potsdam Night",
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/7_eiddxy.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209003/7_eiddxy.png",
            description: "Highlights the contrast between the warm, inviting light spilling from the windows and the cool darkness of the surrounding night.",
            theme: "Nightscape",
            location: "Potsdam",
            related: ["woodhouse_baabe", "potsdam_street_1", "night_scene_1"],
            initialX: 250,
            initialY: 180
        },
        {
            id: "woodhouse_baabe",
            title: "Woodhouse, Baabe",
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/9_gkmvef.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209004/9_gkmvef.png",
            description: "Captures a structure within the unique landscape of the Rügen coast. Digitally transformed to emphasize mood and atmosphere.",
            theme: "Coastal",
            location: "Rügen",
            related: ["cafe_potsdam_night", "coastal_scene_1"],
            initialX: 600,
            initialY: 550
        },
        // Gallery Items
        {
            id: "img_5_ulpq6j",
            title: "Moody Landscape 1", // Inferred from Alt Text "Artwork 4" + visual guess
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/5_ulpq6j.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209004/5_ulpq6j.png",
            description: "A landscape scene focused on atmospheric rendering.", // Generic description
            theme: "Landscape",
            location: "Unknown", // Or assign specific location if known
            related: ["landscape_2", "forest_scene_1"],
            initialX: 100,
            initialY: 400
        },
        {
            id: "img_8_vtftql",
            title: "Architectural Detail 1", // Inferred from Alt Text "Artwork 5"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/8_vtftql.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209003/8_vtftql.png",
            description: "Detail study focusing on architectural elements and light.", // Generic
            theme: "Architecture",
            location: "Unknown",
            related: ["building_detail_1", "potsdam_street_1"],
            initialX: 850,
            initialY: 100
        },
        {
            id: "night_scene_1", // More descriptive ID
            title: "Night Scene 1", // Inferred from Alt Text "Artwork 6"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209002/6_typwgx.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209002/6_typwgx.png",
            description: "An atmospheric digital painting capturing a scene after dark.", // Generic
            theme: "Nightscape",
            location: "Unknown",
            related: ["cafe_potsdam_night"],
            initialX: 1100,
            initialY: 300
        },
        {
            id: "landscape_2", // More descriptive ID
            title: "Landscape 2", // Inferred from Alt Text "Artwork 7"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/4_null04.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/4_null04.png",
            description: "Another landscape exploration with painterly textures.", // Generic
            theme: "Landscape",
            location: "Unknown",
            related: ["img_5_ulpq6j", "forest_scene_1"],
            initialX: 350,
            initialY: 700
        },
        {
            id: "potsdam_street_1", // More descriptive ID
            title: "Street Scene 1", // Inferred from Alt Text "Artwork 8"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/3_cyiqpk.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/3_cyiqpk.png",
            description: "Digitally rendered street view, focusing on light and structure.", // Generic
            theme: "Streetscape",
            location: "Potsdam", // Assumed based on other Potsdam work
            related: ["cafe_potsdam_night", "img_8_vtftql"],
            initialX: 1300,
            initialY: 500
        },
        {
            id: "abstract_texture_1", // More descriptive ID
            title: "Abstract Texture 1", // Inferred from Alt Text "Artwork 9"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/1_sbzyhy.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/1_sbzyhy.png",
            description: "Exploration of digital textures and abstract forms.", // Generic
            theme: "Abstract",
            location: "N/A",
            related: ["light_study_1", "reflection_study_1"],
            initialX: 950,
            initialY: 800
        },
        {
            id: "coastal_scene_1", // More descriptive ID
            title: "Coastal Scene 1", // Inferred from Alt Text "Artwork 10"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209000/13_at5ibg.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209000/13_at5ibg.png",
            description: "Atmospheric scene from a coastal area, likely Rügen.", // Generic
            theme: "Coastal",
            location: "Rügen", // Assumed
            related: ["woodhouse_baabe"],
            initialX: 50,
            initialY: 650
        },
        {
            id: "forest_scene_1", // More descriptive ID
            title: "Forest Scene 1", // Inferred from Alt Text "Artwork 11"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209009/14_lnxo5n.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209009/14_lnxo5n.png",
            description: "Digital painting capturing the mood of a forest.", // Generic
            theme: "Landscape",
            location: "Bad Belzig Area", // Assumed based on user location context
            related: ["img_5_ulpq6j", "landscape_2"],
            initialX: 1500,
            initialY: 150
        },
        {
            id: "building_detail_1", // More descriptive ID
            title: "Building Detail 1", // Inferred from Alt Text "Artwork 12"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209008/11_wcbenb.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209008/11_wcbenb.png",
            description: "Close-up study of architectural form and texture.", // Generic
            theme: "Architecture",
            location: "Unknown",
            related: ["img_8_vtftql"],
            initialX: 1700,
            initialY: 600
        },
        {
            id: "reflection_study_1", // More descriptive ID
            title: "Reflection Study 1", // Inferred from Alt Text "Artwork 13"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209007/10_to7taw.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209007/10_to7taw.png",
            description: "Study focusing on reflections and light on surfaces.", // Generic
            theme: "Study",
            location: "Unknown",
            related: ["abstract_texture_1", "light_study_1"],
            initialX: 1250,
            initialY: 900
        },
        {
            id: "light_study_1", // More descriptive ID
            title: "Light Study 1", // Inferred from Alt Text "Artwork 14"
            imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/2_t9vs7f.png",
            fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/2_t9vs7f.png",
            description: "Artwork focusing on the qualities and interplay of light.", // Generic
            theme: "Study",
            location: "Unknown",
            related: ["reflection_study_1", "abstract_texture_1"],
            initialX: 1800,
            initialY: 350
        }
    ];

    // Log the data to the console to confirm it's loaded
    console.log("Artwork Data:", artworksData);

    // Get the container element
    const space = document.getElementById('exploration-space');
    if (!space) {
        console.error("Exploration space element not found!");
        return;
    }

    // --- Step 2: Create and Place Fragments ---
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
        img.alt = `Fragment of ${artwork.title}`; // Add descriptive alt text
        img.loading = 'lazy'; // Lazy load images for performance
        fragment.appendChild(img);

        // Add the fragment to the exploration space
        space.appendChild(fragment);

        // Add click listener (basic example - logs ID)
        fragment.addEventListener('click', () => {
            console.log(`Clicked fragment ID: ${artwork.id}`);
            // --- Step 4: Implement Detail View/Lightbox (will be added here later) ---
            // Placeholder: Find the data for this ID and show it somehow
            const clickedArtworkData = artworksData.find(item => item.id === artwork.id);
            if (clickedArtworkData) {
                // Alert is just a placeholder - replace with lightbox/modal
                alert(`Artwork Clicked:\nTitle: ${clickedArtworkData.title}\nTheme: ${clickedArtworkData.theme}\nLocation: ${clickedArtworkData.location}`);
            }
        });
    });


    // --- Step 3: Implement Pan & Zoom (will be added here later) ---


}); // End DOMContentLoaded

