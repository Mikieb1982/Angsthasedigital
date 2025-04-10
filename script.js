document.addEventListener('DOMContentLoaded', () => {
    console.log("Exploration space script loaded.");

    const artworksData = [
        // --- PASTE YOUR POPULATED artworksData ARRAY HERE ---
        // (Using the example from the previous step for brevity)
        { id: "cafe_potsdam_night", title: "Café Corner, Potsdam Night", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/7_eiddxy.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209003/7_eiddxy.png", description: "Highlights the contrast...", theme: "Nightscape", location: "Potsdam", related: ["woodhouse_baabe", "potsdam_street_1", "night_scene_1"], initialX: 250, initialY: 180 },
        { id: "woodhouse_baabe", title: "Woodhouse, Baabe", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/9_gkmvef.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209004/9_gkmvef.png", description: "Captures a structure...", theme: "Coastal", location: "Rügen", related: ["coastal_scene_1"], initialX: 600, initialY: 550 },
        { id: "img_5_ulpq6j", title: "Moody Landscape 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/5_ulpq6j.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209004/5_ulpq6j.png", description: "A landscape scene...", theme: "Landscape", location: "Unknown", related: ["landscape_2", "forest_scene_1"], initialX: 100, initialY: 400 },
        { id: "img_8_vtftql", title: "Architectural Detail 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/8_vtftql.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209003/8_vtftql.png", description: "Detail study...", theme: "Architecture", location: "Unknown", related: ["building_detail_1", "potsdam_street_1"], initialX: 850, initialY: 100 },
        { id: "night_scene_1", title: "Night Scene 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209002/6_typwgx.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209002/6_typwgx.png", description: "An atmospheric digital painting...", theme: "Nightscape", location: "Unknown", related: ["cafe_potsdam_night"], initialX: 1100, initialY: 300 },
        { id: "landscape_2", title: "Landscape 2", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/4_null04.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/4_null04.png", description: "Another landscape...", theme: "Landscape", location: "Unknown", related: ["img_5_ulpq6j", "forest_scene_1"], initialX: 350, initialY: 700 },
        { id: "potsdam_street_1", title: "Street Scene 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/3_cyiqpk.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/3_cyiqpk.png", description: "Digitally rendered street view...", theme: "Streetscape", location: "Potsdam", related: ["cafe_potsdam_night", "img_8_vtftql"], initialX: 1300, initialY: 500 },
        { id: "abstract_texture_1", title: "Abstract Texture 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/1_sbzyhy.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/1_sbzyhy.png", description: "Exploration of digital textures...", theme: "Abstract", location: "N/A", related: ["light_study_1", "reflection_study_1"], initialX: 950, initialY: 800 },
        { id: "coastal_scene_1", title: "Coastal Scene 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209000/13_at5ibg.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209000/13_at5ibg.png", description: "Atmospheric scene...", theme: "Coastal", location: "Rügen", related: ["woodhouse_baabe"], initialX: 50, initialY: 650 },
        { id: "forest_scene_1", title: "Forest Scene 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209009/14_lnxo5n.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209009/14_lnxo5n.png", description: "Digital painting capturing mood...", theme: "Landscape", location: "Bad Belzig Area", related: ["img_5_ulpq6j", "landscape_2"], initialX: 1500, initialY: 150 },
        { id: "building_detail_1", title: "Building Detail 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209008/11_wcbenb.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209008/11_wcbenb.png", description: "Close-up study...", theme: "Architecture", location: "Unknown", related: ["img_8_vtftql"], initialX: 1700, initialY: 600 },
        { id: "reflection_study_1", title: "Reflection Study 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209007/10_to7taw.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209007/10_to7taw.png", description: "Study focusing on reflections...", theme: "Study", location: "Unknown", related: ["abstract_texture_1", "light_study_1"], initialX: 1250, initialY: 900 },
        { id: "light_study_1", title: "Light Study 1", imageUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/2_t9vs7f.png", fragmentUrl: "https://res.cloudinary.com/duhxa0mbi/image/upload/c_thumb,w_200/v1744209001/2_t9vs7f.png", description: "Artwork focusing on light...", theme: "Study", location: "Unknown", related: ["reflection_study_1", "abstract_texture_1"], initialX: 1800, initialY: 350 }
        // --- END OF artworksData ARRAY ---
    ];

    console.log("Artwork Data:", artworksData);

    const space = document.getElementById('exploration-space');
    const toggleButton = document.getElementById('view-toggle-button'); // Get the button

    if (!space || !toggleButton) {
        console.error("Required element(s) not found!");
        return;
    }

    // --- Create and Place Fragments ---
    artworksData.forEach(artwork => {
        const fragment = document.createElement('div');
        fragment.classList.add('artwork-fragment');
        fragment.style.left = `${artwork.initialX}px`;
        fragment.style.top = `${artwork.initialY}px`;
        fragment.dataset.id = artwork.id;

        const img = document.createElement('img');
        img.src = artwork.fragmentUrl;
        img.alt = `Fragment of ${artwork.title}`;
        img.loading = 'lazy';
        fragment.appendChild(img);

        space.appendChild(fragment);

        fragment.addEventListener('click', () => {
            console.log(`Clicked fragment ID: ${artwork.id}`);
            const clickedArtworkData = artworksData.find(item => item.id === artwork.id);
            if (clickedArtworkData) {
                // Placeholder alert - replace with lightbox later
                alert(`Artwork Clicked:\nTitle: ${clickedArtworkData.title}\nTheme: ${clickedArtworkData.theme}\nLocation: ${clickedArtworkData.location}`);
            }
        });
    });

    // --- Add Logic for the Toggle Button ---
    toggleButton.addEventListener('click', () => {
        // Toggle the class on the main container
        space.classList.toggle('mobile-view-active');

        // Update button text based on whether the class is now present
        if (space.classList.contains('mobile-view-active')) {
            toggleButton.textContent = 'Switch to Desktop View';
        } else {
            toggleButton.textContent = 'Switch to Mobile View';
        }
    });

    // --- Step 3: Implement Pan & Zoom (will be added here later) ---
    // --- Step 4: Implement Detail View/Lightbox (will be added here later) ---

}); // End DOMContentLoaded
