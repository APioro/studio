const projects = [
    { image: "darker-tales-many-spreads.jpg", size: "large" },
    { image: "afterlife.jpg", size: "half" },
    { image: "table-of-content.png", size: "half" },
    { image: "back-side.jpg", size: "large" }
];

function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 
    const createdItems = [];

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size);

        const img = document.createElement("img"); 
        img.src = project.image;
        img.loading = "lazy";

        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
        createdItems.push(gridItem);
    });

    return createdItems;
}

function observeTiles(tiles) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    tiles.forEach(tile => observer.observe(tile));
}

document.addEventListener("DOMContentLoaded", () => {
    const tiles = createTiles();
    observeTiles(tiles);
});
