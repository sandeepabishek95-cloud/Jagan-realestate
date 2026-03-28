// Get property ID from URL
const params = new URLSearchParams(window.location.search);
const propId = params.get("prop");

// Property data
const properties = {
  "1": {
    title: "Luxury Villa - OMR",
    location: [12.9172, 80.2270],
    area: "4500 sq.ft",
    price: "₹4.5 Cr",
    image: "assets/property1.jpg"
  },
  "2": {
    title: "Apartment - Anna Nagar",
    location: [13.0878, 80.2315],
    area: "1200 sq.ft",
    price: "₹1.2 Cr",
    image: "assets/property2.jpg"
  },
  "3": {
    title: "Land Plot - Porur",
    location: [13.0350, 80.1670],
    area: "2000 sq.ft",
    price: "₹90 Lakh",
    image: "assets/property3.jpg"
  }
};

// Display property info if ID exists
if (propId && properties[propId]) {
  const prop = properties[propId];
  document.getElementById("prop-title").innerText = prop.title;

  const infoDiv = document.getElementById("property-info");
  infoDiv.innerHTML = `
    <div class="card">
      <img src="${prop.image}" style="width:100%;border-radius:12px;margin-bottom:10px;">
      <h3>${prop.title}</h3>
      <p><strong>Area:</strong> ${prop.area}</p>
      <p><strong>Price:</strong> ${prop.price}</p>
      <a href="https://wa.me/917010022388" class="wa-btn" style="width:100%;margin-top:10px;">Contact via WhatsApp</a>
    </div>
  `;

  // Initialize Leaflet map
  const map = L.map('map').setView(prop.location, 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  L.marker(prop.location).addTo(map)
    .bindPopup(prop.title)
    .openPopup();
}
