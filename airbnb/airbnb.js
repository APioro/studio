const projects = [
    {
        image: "airbnb-intro.png",
        size: "large",
        type: "image"
    },
    {
        size: "thirty",
        type: "text",
        content: `
        <h2> D&AD Brief for Airbnb</h2>
        <br><br>
            <b> CONCEPT</b>
            <br><br>
                Airbnb Circles is a new system that organizes experiences, hosts, and travelers into emotionally resonant identity “clubs” called Circles.
                Each Circle—like Dark Enclave, Glam Squad, or Soulful Seeker—represents a distinct aesthetic and lifestyle, helping users find their people and their vibe wherever they go.<br><br>
           Instead of choosing from generic filters like “Food & Drink” or “Arts,” users take a short quiz to join a Circle and unlock curated travel content, events, and meetups that match their personality.<br><br>
        This transforms Airbnb from a booking platform into a lifestyle companion—one that fosters belonging, sparks real-life connection, and turns solo travel into a shared emotional journey.
        `
    },
    
    {
        image: "quiz-big-picture.png",
        size: "seventy",
        type: "image"
    },

    {
        image: "airbnb-research.jpg",
        size: "seventy",
        type: "image"
    },

    {
        image: "airbnb-research.jpg",
        size: "seventy",
        type: "image"
    },

       {
        image: "airbnb-research.jpg",
        size: "seventy",
        type: "image"
    },


    {
        size: "half",
        type: "text",
        content: `    Instead of choosing from generic filters like “Food & Drink” or “Arts,” users take a short quiz to join a Circle and unlock curated travel content, events, and meetups that match their personality.<br><br>
                This transforms Airbnb from a booking platform into a lifestyle companion—one that fosters belonging, sparks real-life connection, and turns solo travel into a shared emotional journey.
           `
    },
    // rest as before...
];

function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size);

        if (project.type === "image") {
            const img = document.createElement("img");
            img.src = project.image;
            img.loading = "lazy";
            gridItem.appendChild(img);
        } else if (project.type === "text") {
            // Use innerHTML if your content has HTML tags like <h2>, <p>
            gridItem.innerHTML = project.content;
            // Optional: add a class for text styling
            gridItem.classList.add("project-description-graphic-design");
        }

        gridContainer.appendChild(gridItem);
    });
}


// Call the function to create tiles
createTiles();
