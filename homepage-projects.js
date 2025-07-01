const projects = [
  {
    title: "Absolute Collagen",
    category: "Branding",
    image: "/absolute collagen/ac-mockup-far.jpg",
    size: "large",
    link: "absolute collagen/absolute-collagen.html",
    theme: "dark" // white text
  },
  {
    title: "Packaging",
    category: "Packaging",
    image: "packaging/cups-three-pink-closeup.jpg",
    size: "half",
    link: "packaging/packaging.html",
    theme: "light" // black text
  },
  {
    title: "Moon Bun Coffee Shop",
    category: "Logo Design",
    image: "moonbun/moonbun-logo-black-square.jpg",
    size: "half",
    link: "moonbun/moonbun.html",
    theme: "light"
  },
  {
    title: "Darker Tales",
    category: "Book Design",
    image: "darker-tales/darker-tales-afterlife-bigger.jpg",
    size: "large",
    link: "darker-tales/darker-tales.html",
    theme: "dark"
  }
];

  
    // Add more projects as needed...


// Function to create and append tiles to the grid
function createTiles() {
  const gridContainer = document.getElementById("grid-container");

  projects.forEach(project => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("homepage-grid-item", project.size);

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    img.loading = "lazy";

    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.appendChild(img);

    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = overlay.className = `overlay ${project.theme || "light"}`;
; // or use "dark" for white text on dark image

    const title = document.createElement("div");
    title.className = "overlay-title top-left";
    title.textContent = project.title;

    const category = document.createElement("div");
    category.className = "overlay-category bottom-right";
    category.textContent = project.category;

    overlay.appendChild(title);
    overlay.appendChild(category);

    gridItem.appendChild(link);
    gridItem.appendChild(overlay);

    gridContainer.appendChild(gridItem);
  });
}

// Call the function to create tiles
createTiles();
