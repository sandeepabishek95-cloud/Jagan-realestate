// Sample blog articles
const articles = [
  {
    title: "Evolution of Chennai Real Estate",
    summary: "Explore how Chennai transformed from a small city to a booming metropolitan real estate hub.",
    image: "assets/images/blog1.jpg",
    link: "#"
  },
  {
    title: "Top Neighborhoods for Investment",
    summary: "Discover Chennai’s prime localities for investing in residential and commercial properties.",
    image: "assets/images/blog2.jpg",
    link: "#"
  },
  {
    title: "Future of Chennai Property Market",
    summary: "Get insights into upcoming projects, infrastructure development, and market trends.",
    image: "assets/images/blog3.jpg",
    link: "#"
  }
];

// Generate blog cards dynamically
const container = document.getElementById("blog-cards");
articles.forEach(article => {
  const card = document.createElement("a");
  card.href = article.link;
  card.className = "card";
  card.innerHTML = `
    <img src="${article.image}" alt="${article.title}" style="width:100%;height:180px;object-fit:cover;border-radius:12px;margin-bottom:12px;">
    <h3>${article.title}</h3>
    <p>${article.summary}</p>
    <span class="btn">Read More</span>
  `;
  container.appendChild(card);
});
