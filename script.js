const articles = [
    { title: "Article 1", url: "article1.html" },
    { title: "Article 2", url: "article2.html" },
    { title: "Article 3", url: "article3.html" },
    { title: "Article 4", url: "article4.html" },
    { title: "Article 5", url: "article5.html" },
    { title: "Article 6", url: "article6.html" },
    { title: "Article 7", url: "article7.html" },
    { title: "Article 8", url: "article8.html" },
    { title: "Article 9", url: "article9.html" },
    { title: "Article 10", url: "article10.html" }
];

const projects = [
    { title: "Project 1", url: "project1.html" },
    { title: "Project 2", url: "project2.html" },
    { title: "Project 3", url: "project3.html" },
    { title: "Project 4", url: "project4.html" },
    { title: "Project 5", url: "project5.html" },
    { title: "Project 6", url: "project6.html" },
    { title: "Project 7", url: "project7.html" },
    { title: "Project 8", url: "project8.html" },
    { title: "Project 9", url: "project9.html" },
    { title: "Project 10", url: "project10.html" }
];

function searchArticles() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchMessage = document.getElementById('search-message');
    
    let results = articles.filter(article => article.title.toLowerCase().includes(searchInput));
    results = results.concat(projects.filter(project => project.title.toLowerCase().includes(searchInput)));
    
    if (results.length > 0) {
        // Redirect to the first matched result (you can modify this to display a list of results)
        window.location.href = results[0].url;
    } else {
        searchMessage.style.display = 'block';
    }
}

// Hide the search message when input changes
document.getElementById('search-input').addEventListener('input', () => {
    document.getElementById('search-message').style.display = 'none';
});
