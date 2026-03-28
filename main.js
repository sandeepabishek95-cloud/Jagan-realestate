// main.js
const properties = [
  {
    title:"Premium Apartment",
    desc:"Modern 3BHK in Chennai central with parking and premium amenities.",
    sqft:"1200 sqft", price:"₹1.2 Crore", parking:"2 Car Parking",
    location:"Nungambakkam, Chennai",
    images:["assets/images/prop1_1.jpg","assets/images/prop1_2.jpg"],
    lat:13.0827, lng:80.2707
  },
  {
    title:"Luxury Villa",
    desc:"Spacious villa with garden and pool, ideal for family living.",
    sqft:"3500 sqft", price:"₹5.5 Crore", parking:"3 Car Parking",
    location:"Adyar, Chennai",
    images:["assets/images/prop2_1.jpg","assets/images/prop2_2.jpg"],
    lat:13.0102, lng:80.2341
  }
];

// Populate homepage cards
const propertyCards = document.getElementById("property-cards");
if(propertyCards){
  properties.forEach((p,index)=>{
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <ul>
        <li>${p.sqft}</li>
        <li>${p.price}</li>
        <li>${p.parking}</li>
      </ul>
      <a href="property.html?index=${index}">View Details</a>
    `;
    propertyCards.appendChild(card);
  });
}

// Scroll animations
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.card').forEach(c=>{
    const rect=c.getBoundingClientRect();
    if(rect.top<window.innerHeight-100){
      c.style.transform='translateY(0)';
      c.style.opacity='1';
    }
  });
});
