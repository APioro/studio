// Example data for graphic design projects
const projects = [
    {
        title: "Project Title 1",
        image: "image1.jpg", // Replace with your image paths
        size: "large"  // Options: 'small', 'medium', 'large'
    },
    {
        title: "Project Title 2",
        image: "image2.jpg",
        size: "medium"
    },
    {
        title: "Project Title 3",
        image: "image3.jpg",
        size: "small"
    },
    {
        title: "Project Title 4",
        image: "image4.jpg",
        size: "large"
    },
    {
        title: "Project Title 5",
        image: "image5.jpg",
        size: "medium"
    },
    {
        title: "Project Title 6",
        image: "image6.jpg",
        size: "small"
    },
];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container");

    projects.forEach((project) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size); // Add size class
        
        // Create image element
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;

        // Create title element
        const title = document.createElement("h2");
        title.textContent = project.title;

        // Append image and title to the grid item
        gridItem.appendChild(img);
        gridItem.appendChild(title);
        
        // Append grid item to the grid container
        gridContainer.appendChild(gridItem);
    });
}

// Call the function to create tiles
createTiles();
