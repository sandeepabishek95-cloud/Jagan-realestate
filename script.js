// --- Property Data ---
const properties = [
  {title:"Villa in OMR", price:"₹3.2 Cr", sqft:"4500 sq ft", location:"OMR, Chennai", lat:12.9101, lng:80.2265, images:["assets/images/villa1.jpg","assets/images/villa2.jpg"]},
  {title:"Apartment in Anna Nagar", price:"₹1.5 Cr", sqft:"1500 sq ft", location:"Anna Nagar, Chennai", lat:13.0839, lng:80.2316, images:["assets/images/apartment1.jpg","assets/images/apartment2.jpg"]},
  {title:"Land Plot in Velachery", price:"₹80 Lakh", sqft:"2000 sq ft", location:"Velachery, Chennai", lat:12.9916, lng:80.2279, images:["assets/images/land1.jpg"]},
];

// --- Generate Property Cards ---
const container = document.getElementById("property-cards");
properties.forEach((prop, index) => {
  const card = document.createElement('a');
  card.href = `property.html?id=${index}`;
  card.className = "card";
  card.innerHTML = `<h3>${prop.title}</h3>
                    <p>${prop.sqft} | ${prop.price}</p>
                    <p>${prop.location}</p>`;
  container.appendChild(card);
});

// --- Smooth scroll highlight (optional) ---
const sections = document.querySelectorAll("section");
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY + 100;
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    if(top >= offset && top < offset + height){
      sec.classList.add("active");
    } else { sec.classList.remove("active"); }
  });
});

// --- Ripple effect ---
document.querySelectorAll('.btn, .card').forEach(btn => {
  btn.addEventListener('click', e => {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + 'px';
    circle.style.top = e.clientY - rect.top + 'px';
    btn.appendChild(circle);
    setTimeout(()=>circle.remove(),600);
  });
});
