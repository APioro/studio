// COMBINED PROJECTS + TEXT BOXES
const projects = [
    {
        type: "image",
        image: "/photos/hea/hea_big.jpg",
        size: "large",
    },
    {   type: "text",
        content: "<p>LOGO DESIGN</p>",
        size: "half",
    },
    {   type: "text",
        content:  `
        <p>The logo needed to feel stable and analytical. While many environmental labs rely on illustrative leaves or nature motifs, 
        I wanted to avoid the cliché. Instead, I drew inspiration from the visual patterns found in environmental analysis — lines, grids, and intersections
         reminiscent of spectroscopy and chromatography. To warm up the brand image, I incorporated a graphical bird in place of the letter "A".</p>`,
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/buliding.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/logo_card.jpg",
        size: "half",
    },

    {
        type: "text",
        content: "VISUAL IDENTITY",
        size: "half",
    },
    {
        type: "text",
        content: `<p>The logo needed to feel stable and analytical. While many environmental labs rely on illustrative leaves or nature motifs, 
        I wanted to avoid the cliché. Instead, I drew inspiration from the visual patterns found in environmental analysis — lines, grids, and intersections
         reminiscent of spectroscopy and chromatography. To warm up the brand image, I incorporated a graphical bird in place of the letter "A".</p>`,
        size: "half",
    },

    {
        type: "image",
        image: "/photos/hea/hea_datasheet.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/tote.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/hea_docs.jpg",
        size: "large",
    },

    {
        type: "image",
        image: "/photos/hea/hea_app.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/hea-mag.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/hea_papers_large.jpg",
        size: "large",
    },
    {
        type: "image",
        image: "/photos/hea/logo_project.jpg",
        size: "large",
    },
    {
        type: "image",
        image: "/photos/hea/artsider_socialmedia.jpg",
        size: "large",
    },
    {
        type: "image",
        image: "/photos/hea/logo_rational.jpg",
        size: "large",
    }
    // You can add more images or text blocks anywhere
];

// Function to create and append tiles
function createTiles() {
    const gridContainer = document.getElementById("grid-container");

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size);

        if (project.type === "image") {
            const img = document.createElement("img");
            img.src = project.image;
            img.loading = "lazy";
            if (project.image.endsWith(".gif")) {
                img.classList.add("is-gif");
            }
            gridItem.appendChild(img);
        } else if (project.type === "text") {
            gridItem.classList.add("text-box"); // add specific text-box styling
            gridItem.innerHTML = project.content;

        }

        gridContainer.appendChild(gridItem);
    });
}

// Call the function
createTiles();