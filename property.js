const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const prop = properties[id];

// Title
document.getElementById("prop-title").innerText = prop.title;

// Carousel
const carousel = document.getElementById("prop-carousel");
prop.images.forEach(img => {
  const imgEl = document.createElement('img');
  imgEl.src = img;
  imgEl.style.width = "100%";
  imgEl.style.height = "300px";
  imgEl.style.borderRadius = "12px";
  imgEl.style.marginBottom = "10px";
  carousel.appendChild(imgEl);
});

// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const content = document.getElementById("tab-content");

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    content.innerHTML = '';
    if(tab === "overview"){
      content.innerHTML = `<p>${prop.title} is located in ${prop.location}. Price: ${prop.price}, Area: ${prop.sqft}.</p>`;
    }
    if(tab === "amenities"){
      content.innerHTML = "<ul><li>Water</li><li>Electricity</li><li>Security</li></ul>";
    }
    if(tab === "parking"){
      content.innerHTML = "<p>Car parking available</p>";
    }
    if(tab === "map"){
      content.innerHTML = `<div id="map" style="width:100%;height:400px;border-radius:12px;"></div>`;
      const map = L.map('map').setView([prop.lat, prop.lng], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19}).addTo(map);
      L.marker([prop.lat, prop.lng]).addTo(map).bindPopup(prop.title).openPopup();
    }
  });
});
