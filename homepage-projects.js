// Example data for graphic design projects
const projects = [
    {
        title: "Absolute Collagen",
        image: "/absolute collagen/ac-mockup-far.jpg", // Original image path
        size: "large",  // Options: 'small', 'medium', 'large'
        link: "absolute collagen/absolute-collagen.html",
        
    },

    {
        title: "Packaging",
        image: "packaging/cups-three-pink-closeup.jpg", // Original image path
        size: "half",
        link: "packaging/packaging.html",
        
    },

    {
        title: "Moon Bun Coffee Shop",
        image: "moonbun/moonbun-logo-black-square.jpg", // Original image path
        size: "half",
        link: "darker-tales/darker-tales.html",
       
    },

    {
        title: "Darker Tales",
        image: "darker-tales/darker-tales-afterlife-bigger.jpg", // Original image path
        size: "large",
        link: "darker-tales/darker-tales.html",
       
    },

  
    // Add more projects as needed...
];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("homepage-grid-item", project.size); // Add size class
        
        // Create image element
        const img = document.createElement("img"); 
        img.src = project.image; // Original image
        img.alt = project.title;
        img.loading = "lazy"; // Add lazy loading

        const link = document.createElement("a");
        link.href = project.link;
        link.target = "_blank";


        // Append image, title, and tags to the grid item
        link.appendChild(img);         // Image inside the link
        gridItem.appendChild(link);
        

   



       
        
        // // Add hover event listener to change image on hover
        // gridItem.addEventListener("mouseover", () => {
        //     img.src = project.hoverImage; // Change to hover image
        // });

        // gridItem.addEventListener("mouseout", () => {
        //     img.src = project.image; // Revert to original image
        // });

        // Append grid item to the grid container
        gridContainer.appendChild(gridItem);
    });
}

// Call the function to create tiles
createTiles();
