document.addEventListener("DOMContentLoaded", function() {
    const websites = [
      {
        name: "Png to Favicon.ico",
        description: "A simple online .ico image converter. It will take any PNG image and convert it to ICO file, for web site favicon or Windows applications.",
        category: "web",
        image: "website1.png",
        url: "https://criadormods.github.io/Png-To-Favicon.Ico/"
      },
      {
        name: "JPEG TO PNG ",
        description: "A simple online .PNG image converter. It will take any JPEG image and convert it to PNG file has alot of new features aswell like a compression slide so you can optimize you image.",
        category: "web",
        image: "website9.png",
        url: "https://criadormods.github.io/JPEG-TO-PNG/"
      },
      {
        name: "To-Do-List",
        description: "A simple List where you can list thing you want to do till X date:)",
        category: "web",
        image: "website2.png",
        url: "https://criadormods.github.io/To-Do-List/"
      },
      {
        name: "Simple-Login",
        description: "A simple Login system, its just that lol if u want to test here: EMAIL: test@gmail.com Pass: test1234 :)",
        category: "app",
        image: "website3.png",
        url: "https://criadormods.github.io/Simple-Login/"
      },
      {
        name: "Weather",
        description: "A simple Weather system thats alows you to see the weather across all the world with alot of features :)",
        category: "web",
        image: "website4.png",
        url: "https://criadormods.github.io/Weather/"
      },
      {
        name: "School Maths Project",
        description: "This was for a school work but its so cool im going to put it here lol..(btw its in portuguese so good luck.)",
        category: "app",
        image: "website5.png",
        url: "https://criadormods.github.io/MATH/"
      },
      {
        name: "Event scheduler",
        description: "This is a simple Event scheduler lol this was a test site but im going to put it here anyways lol  ",
        category: "app",
        image: "website6.png",
        url: "https://criadormods.github.io/Event-Scheduler/"
      },
      {
        name: "Simple Online Chat",
        description: "My first web site using my own backend that works btw u can test it lol u may even find someone lol, (ITS A FULLY ANONYMUS CHAT BTW SO NO LOGIN NO USERNAME NO NOTHING!)",
        category: "web",
        image: "website7.png",
        url: "https://simplechat-3d4c6d3eeef8.herokuapp.com/"
      },
      {
        name: "Interactive Map",
        description: "This was just a test to see if i could do it lol still cool tho.",
        category: "web",
        image: "website8.png",
        url: "https://criadormods.github.io/Interactive-Map/"
      },
      {
        name: "Movie & Games",
        description: "search movies and games lol just that.",
        category: "web",
        image: "website10.png",
        url: "https://criadormods.github.io/Movie-Games/"
      }
    ];
    const websitesContainer = document.getElementById("websites");
    const categoryFilter = document.getElementById("category");

    function renderWebsites() {
        websitesContainer.innerHTML = "";

        const selectedCategory = categoryFilter.value;

        websites.forEach(website => {
            if (selectedCategory === "all" || website.category === selectedCategory) {
                const websiteElement = document.createElement("div");
                websiteElement.classList.add("website");

                const imageElement = document.createElement("img");
                imageElement.src = website.image;
                imageElement.alt = website.name;
                websiteElement.appendChild(imageElement);

                const nameElement = document.createElement("h2");
                nameElement.textContent = website.name;
                websiteElement.appendChild(nameElement);

                const descriptionElement = document.createElement("p");
                descriptionElement.textContent = website.description;
                websiteElement.appendChild(descriptionElement);

                const linkElement = document.createElement("a");
                linkElement.href = website.url;
                linkElement.textContent = "Visit Website";
                linkElement.classList.add("visit-button"); // Add visit-button class here
                websiteElement.appendChild(linkElement);

                websitesContainer.appendChild(websiteElement);
            }
        });
    }

    categoryFilter.addEventListener("change", renderWebsites);

    // Initial render
    renderWebsites();
});

  const storedColor = localStorage.getItem('backgroundColor');

    if (storedColor) {
        if (storedColor.startsWith('linear-gradient')) {
            document.body.style.background = storedColor;
        } else {
            document.body.style.backgroundColor = storedColor;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('warning-message').style.display = 'block';
});
