// Sample property data
const properties = [
  {
    title: "Luxury Apartment in Chennai",
    desc: "A beautiful 3BHK apartment with premium amenities and stunning city views.",
    sqft: "1500 sqft",
    price: "₹1.5 Cr",
    parking: "2 Cars",
    location: "Adyar, Chennai",
    lat: 13.0100,
    lng: 80.2350,
    images: [
      "https://source.unsplash.com/600x400/?apartment,interior",
      "https://source.unsplash.com/600x400/?apartment,balcony",
      "https://source.unsplash.com/600x400/?livingroom,apartment"
    ]
  },
  {
    title: "Modern Villa in Chennai",
    desc: "Exclusive 4BHK villa with private garden, swimming pool, and spacious rooms.",
    sqft: "3000 sqft",
    price: "₹3.5 Cr",
    parking: "3 Cars",
    location: "ECR, Chennai",
    lat: 12.9500,
    lng: 80.2500,
    images: [
      "https://source.unsplash.com/600x400/?villa,pool",
      "https://source.unsplash.com/600x400/?villa,garden",
      "https://source.unsplash.com/600x400/?villa,interior"
    ]
  }
];

// Get property index from URL
const params = new URLSearchParams(window.location.search);
const index = params.get("index");

const detailsSection = document.getElementById("property-details");

if(detailsSection && index !== null){
  const p = properties[index];

  // Build the image carousel
  let carouselHtml = `<div class="carousel">`;
  p.images.forEach(img => {
    carouselHtml += `<div class="carousel-item"><img src="${img}" alt="${p.title}"></div>`;
  });
  carouselHtml += `</div>`;

  detailsSection.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <ul>
      <li><strong>Sqft:</strong> ${p.sqft}</li>
      <li><strong>Price:</strong> ${p.price}</li>
      <li><strong>Parking:</strong> ${p.parking}</li>
      <li><strong>Location:</strong> ${p.location}</li>
    </ul>
    ${carouselHtml}
    <a href="https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}" target="_blank" class="map-btn">Get Directions</a>
  `;

  // Simple JS for horizontal scroll effect (like Instagram)
  const carousel = detailsSection.querySelector(".carousel");
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
  });
}
