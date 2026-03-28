// Map Setup
var map = L.map('map').setView([13.0827, 80.2707], 11);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

function showMap(lat, lng) {
    L.marker([lat, lng]).addTo(map).bindPopup("Premium Listing").openPopup();
    map.setView([lat, lng], 14);
}

// Scroll Reveal Observer (2025 Tech)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
