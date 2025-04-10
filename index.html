<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angsthase Digital Art</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&family=Raleway:wght@400;700&display=swap" rel="stylesheet">
    <style>
        html { scroll-behavior: smooth; }
        body { font-family: 'Lato', sans-serif; position: relative; min-height: 100vh; padding-bottom: 4rem; /* Ensure space for footer */ }
        h1, h2, h3, h4, h5, h6 { font-family: 'Raleway', sans-serif; }
        img { background-color: #f3f4f6; /* Placeholder background */ }
        .gallery-img { width: 100%; height: 100%; object-fit: cover; cursor: pointer; }

        /* Fixed background with opacity */
        body::before {
            content: ''; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: -1;
            background-image: url('https://res.cloudinary.com/duhxa0mbi/image/upload/v1744213680/ah_bgyg03.png');
            background-repeat: no-repeat; background-position: center center; background-size: contain;
            background-attachment: fixed; opacity: 0.25;
        }

        /* Lightbox Styles */
        #lightbox-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(0, 0, 0, 0.85);
            display: flex; align-items: center; justify-content: center;
            z-index: 50; /* High z-index */
            opacity: 0; visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
            cursor: pointer;
        }
        #lightbox-overlay.is-visible {
            opacity: 1; visibility: visible;
            transition: opacity 0.3s ease-in-out, visibility 0s linear 0s;
        }
        #lightbox-content {
            position: relative; max-width: 90vw; max-height: 85vh;
            cursor: default;
        }
        #lightbox-img { display: block; max-width: 100%; max-height: 100%; object-fit: contain; }
        #lightbox-close {
            position: absolute; top: -30px; right: -10px;
            background: none; border: none; color: white; font-size: 2rem;
            cursor: pointer; line-height: 1; padding: 5px;
        }

        /* Fade-in Animation Styles */
        .fade-in-section { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .fade-in-section.is-visible { opacity: 1; transform: translateY(0); }

        /* Divider Line Animation */
        .divider-line { stroke-dasharray: 1000; stroke-dashoffset: 1000; transition: stroke-dashoffset 1.5s ease-in-out; }
        .fade-in-section.is-visible .divider-line { stroke-dashoffset: 0; }

        /* Hotspot Styles */
        .hotspot {
            position: absolute;
            width: 1.25rem; /* w-5 */
            height: 1.25rem; /* h-5 */
            background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
            border-radius: 9999px; /* rounded-full */
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0, 0, 0, 0.1);
            z-index: 5; /* Above image */
        }
        .hotspot:hover, .hotspot:focus { /* Added focus for accessibility */
            transform: scale(1.2);
            background-color: rgba(255, 255, 255, 0.8);
            outline: none; /* Optional: remove default focus outline if needed */
        }
         /* Simple plus icon inside hotspot */
        .hotspot::after {
            content: '+';
            font-size: 0.875rem; /* text-sm */
            color: rgba(0, 0, 0, 0.6);
            line-height: 1;
        }

        /* Tooltip Styles */
        .hotspot-tooltip {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.8); /* bg-black/80 */
            color: white;
            padding: 0.5rem 0.75rem; /* p-2 px-3 */
            border-radius: 0.375rem; /* rounded-md */
            font-size: 0.75rem; /* text-xs */
            line-height: 1rem; /* leading-4 */
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
            white-space: nowrap;
            z-index: 10; /* Ensure tooltip is above hotspot/image */
            pointer-events: none; /* Allow clicks to pass through tooltip */
            transform: translate(-50%, -120%); /* Position above hotspot */
            /* Tooltip needs its 'left' set inline or via JS based on hotspot position */
        }
        .hotspot-tooltip.is-visible {
            opacity: 1;
            visibility: visible;
        }
    </style>
</head>
<body class="bg-white text-gray-800 antialiased">

    <header class="py-6 px-4 md:px-8 border-b border-gray-200 sticky top-0 z-30 bg-white/80 backdrop-blur-sm">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center gap-3">
                <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744213680/ah_bgyg03.png"
                     alt="Angsthase Logo"
                     class="w-10 h-10 rounded-full object-cover border border-gray-200">
                <h1 class="text-2xl md:text-3xl font-bold text-black">Angsthase Digital Art</h1>
            </div>
            <nav>
                <ul class="flex space-x-4 md:space-x-6 text-gray-600">
                    <li><a href="#gallery" class="hover:text-slate-600 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">Gallery</a></li>
                    <li><a href="#about-style" class="hover:text-slate-600 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">About</a></li>
                    <li><a href="#contact" class="hover:text-slate-600 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="mb-20 text-center pt-16">
         <div id="hero-image-container" class="w-full h-48 md:h-72 bg-gray-100 flex items-center justify-center mb-8 overflow-hidden">
             <img id="hero-image" src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744274602/hero_yjoq8w.png"
                  alt="Hero Artwork: Abstract representation of Angsthase Digital Art"
                  class="w-full h-full object-contain"
                  onerror="this.onerror=null; this.src='https://placehold.co/1200x400/F3F4F6/1F2937?text=Image+Error'; this.alt='Image failed to load';">
         </div>
         <div class="container mx-auto px-4 md:px-8">
             <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black mt-8">Welcome to Angsthase Digital Art</h2>
             <p class="text-gray-700 max-w-2xl mx-auto">Exploring themes through digital mediums. Browse the gallery to see the latest creations.</p>
        </div>
    </section>

    <div class="fade-in-section container mx-auto px-4 md:px-8 my-16">
         <svg width="100%" height="5" viewBox="0 0 1000 5" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-slate-500 block">
            <line class="divider-line" x1="0" y1="2.5" x2="1000" y2="2.5" stroke="currentColor" stroke-width="1"/>
        </svg>
    </div>

    <main class="container mx-auto px-4 md:px-8 py-16 relative z-10 -mt-16">

        <section class="fade-in-section mb-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div class="md:w-7/12 text-gray-700">
                <h3 class="text-2xl font-bold mb-4 text-black">Project Spotlight</h3>
                <p class="mb-4">
                    Titled 'Café Corner, Potsdam Night', this piece highlights the contrast between the warm, inviting light spilling from the windows and the cool darkness of the surrounding night. Developed from photographic source material, the scene undergoes digital processing to enhance the atmospheric quality and painterly textures, particularly noticeable in the rendering of the reflections and the sky.
                </p>
                <p>
                    The focus is on capturing a specific feeling of quiet solitude often found in illuminated structures after dark. Digital brushwork aims to evoke mood rather than precise detail, blending observed reality with a more expressive interpretation of light and shadow. (Hover over the '+' spots on the image for details).
                </p>
            </div>
            <div class="md:w-5/12 md:-mr-6 lg:-mr-10 relative">
                 <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/7_eiddxy.png"
                     alt="Artwork Example 1: Café Corner, Potsdam Night" class="w-full h-auto rounded-lg border border-gray-200 block"
                     onerror="this.onerror=null; this.src='https://placehold.co/600x400/E5E7EB/1F2937?text=Image+Error'; this.alt='Image failed to load';">

                 <button class="hotspot" style="top: 30%; left: 40%;" aria-describedby="tooltip-1"></button>
                 <div id="tooltip-1" role="tooltip" class="hotspot-tooltip" style="left: 40%;">Focus on window light</div>

                 <button class="hotspot" style="top: 75%; left: 60%;" aria-describedby="tooltip-2"></button>
                 <div id="tooltip-2" role="tooltip" class="hotspot-tooltip" style="left: 60%;">Painterly reflections</div>
                 </div>
        </section>

        <section class="fade-in-section mb-20 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
             <div class="md:w-7/12 text-gray-700">
                <h3 class="text-2xl font-bold mb-4 text-black">Atmospheric Textures</h3>
                 <p class="mb-4">
                    Titled 'Woodhouse, Baabe', this artwork captures a structure within the unique landscape of the Rügen coast. Developed from a photograph, the image has been digitally transformed to emphasize mood and atmosphere over strict realism.
                 </p>
                 <p>
                    The focus is on the interplay of light on the wooden surfaces and the surrounding environment, rendered with distinct painterly textures characteristic of the digital synthesis process. It aims to convey the quiet feeling of this specific place, blending observed reality with an expressive, atmospheric interpretation.
                 </p>
            </div>
           <div class="md:w-5/12 md:-ml-6 lg:-ml-10">
                <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/9_gkmvef.png"
                     alt="Artwork Example 2: Woodhouse, Baabe" class="w-full h-auto rounded-lg border border-gray-200"
                     onerror="this.onerror=null; this.src='https://placehold.co/600x400/E5E7EB/1F2937?text=Image+Error'; this.alt='Image failed to load';">
           </div>
        </section>

        <section id="about-style" class="fade-in-section mb-20 max-w-4xl mx-auto text-gray-700 pt-16 -mt-16">
             <h3 class="text-3xl font-bold mb-6 text-center text-black">About The Art Style</h3>
             <p class="mb-4">
                The digital art originates from photographs, often capturing scenes from familiar places in Germany – from the streets of Potsdam and the Bad Belzig area to the unique landscapes of the Rügen coast. Each image undergoes extensive digital processing and synthesis, transforming these photographic moments. The aim is less about strict realism and more focused on evoking a specific mood and atmosphere inherent in the scene.
             </p>
             <p class="mb-4">
                The resulting style is distinctly painterly, characterized by visible digital textures and brushwork that are particularly noticeable in skies, water, and shadow areas. There is a strong focus on the interplay of light – whether it's the warm glow of a window against the cool night, the transitional colours of dusk and dawn, or the quality of daylight on different surfaces. This digital synthesis process allows blending the observed reality captured in the source photograph with a more expressive, atmospheric interpretation.
             </p>
             <p>
                Through subjects often featuring architecture, streetscapes, and landscapes, themes of quiet, solitude, and the unique feeling of a place at a particular moment are explored. The goal is to create atmospheric digital paintings that invite contemplation and offer a distinctive view of these locations, filtered through this artistic process.
             </p>
        </section>

        <section id="gallery" class="fade-in-section mb-20 pt-16 -mt-16">
            <h3 class="text-3xl font-bold mb-8 text-center text-black">Gallery</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                 <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/5_ulpq6j.png" alt="Artwork: Moody landscape 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/8_vtftql.png" alt="Artwork: Architectural detail 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209002/6_typwgx.png" alt="Artwork: Night scene 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/4_null04.png" alt="Artwork: Landscape 2" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/3_cyiqpk.png" alt="Artwork: Street scene 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/1_sbzyhy.png" alt="Artwork: Abstract texture 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209000/13_at5ibg.png" alt="Artwork: Coastal scene 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209009/14_lnxo5n.png" alt="Artwork: Forest scene 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209008/11_wcbenb.png" alt="Artwork: Building detail 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209007/10_to7taw.png" alt="Artwork: Reflection study 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209001/2_t9vs7f.png" alt="Artwork: Light study 1" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                 <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209003/7_eiddxy.png" alt="Artwork: Café Corner, Potsdam Night" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                </div>
                 <div class="aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src="https://res.cloudinary.com/duhxa0mbi/image/upload/v1744209004/9_gkmvef.png" alt="Artwork: Woodhouse, Baabe" class="gallery-img gallery-item-clickable" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'flex items-center justify-center h-full text-xs text-gray-500\'>Image Error</div>';">
                 </div>
                 </div>
        </section>

        <section id="contact" class="fade-in-section mb-20 pt-16 -mt-16 max-w-xl mx-auto text-center">
            <h3 class="text-3xl font-bold mb-6 text-black">Contact</h3>
            <p class="text-gray-700 mb-4">
                For inquiries about the artwork or potential commissions, please reach out.
            </p>
            <p class="text-lg font-semibold text-slate-600">
                 contact [at] example [dot] com
            </p>
            </section>

    </main>

    <footer class="absolute bottom-0 left-0 right-0 py-4 px-4 md:px-8 border-t border-gray-200 bg-gray-50 text-center z-20">
        <p class="text-sm text-gray-500">&copy; <span id="current-year"></span> Angsthase Digital Art. All rights reserved.</p>
    </footer>

    <div id="lightbox-overlay">
        <div id="lightbox-content">
            <img id="lightbox-img" src="" alt="Enlarged gallery image">
            <button id="lightbox-close" aria-label="Close lightbox">&times;</button>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {

            // --- Set Current Year in Footer ---
            const yearSpan = document.getElementById('current-year');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }

            // --- Fade-in Sections on Scroll ---
            const fadeElements = document.querySelectorAll('.fade-in-section');
            if ("IntersectionObserver" in window) {
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            // Optional: Stop observing after fading in once
                            // observer.unobserve(entry.target);
                        }
                        // Optional: Add else block here to fade out when scrolling up
                        // else { entry.target.classList.remove('is-visible'); }
                    });
                }, {
                    rootMargin: '0px',
                    threshold: 0.1 // Trigger when 10% of the element is visible
                });

                fadeElements.forEach(el => observer.observe(el));
            } else {
                // Fallback for older browsers: just show everything
                fadeElements.forEach(el => el.classList.add('is-visible'));
            }

            // --- Gallery Lightbox ---
            const lightboxOverlay = document.getElementById('lightbox-overlay');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxClose = document.getElementById('lightbox-close');
            const galleryItems = document.querySelectorAll('.gallery-item-clickable');

            if (lightboxOverlay && lightboxImg && lightboxClose) {
                galleryItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        const imgSrc = e.target.src;
                        const imgAlt = e.target.alt;
                        if (imgSrc) {
                            lightboxImg.src = imgSrc;
                            lightboxImg.alt = imgAlt || 'Enlarged gallery image'; // Use existing alt text
                            lightboxOverlay.classList.add('is-visible');
                            document.body.style.overflow = 'hidden'; // Prevent scrolling background
                        }
                    });
                });

                const closeLightbox = () => {
                    lightboxOverlay.classList.remove('is-visible');
                    document.body.style.overflow = ''; // Restore scrolling
                };

                // Close on button click
                lightboxClose.addEventListener('click', closeLightbox);
                // Close on clicking the overlay background
                lightboxOverlay.addEventListener('click', (e) => {
                    if (e.target === lightboxOverlay) { // Ensure click is on overlay, not image
                        closeLightbox();
                    }
                });
                 // Close with Escape key
                 document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && lightboxOverlay.classList.contains('is-visible')) {
                        closeLightbox();
                    }
                 });
            }

            // --- Hotspot Tooltips ---
            const hotspots = document.querySelectorAll('.hotspot');

            hotspots.forEach(hotspot => {
                const tooltipId = hotspot.getAttribute('aria-describedby'); // Use aria-describedby
                const tooltip = document.getElementById(tooltipId);

                if (tooltip) {
                    const showTooltip = () => tooltip.classList.add('is-visible');
                    const hideTooltip = () => tooltip.classList.remove('is-visible');

                    hotspot.addEventListener('mouseenter', showTooltip);
                    hotspot.addEventListener('mouseleave', hideTooltip);
                    hotspot.addEventListener('focus', showTooltip); // Show on keyboard focus
                    hotspot.addEventListener('blur', hideTooltip);   // Hide when focus leaves
                }
            });

        }); // End DOMContentLoaded
    </script>

</body>
</html>
