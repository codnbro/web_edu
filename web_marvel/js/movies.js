document.addEventListener("DOMContentLoaded", function() {
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById('movie-list');
            data.forEach(movie => {
                const movieSection = document.createElement('section');
                movieSection.className = '4u';
                movieSection.innerHTML = `
                    <a href="#" class="image featured"><img src="images/default.jpg" alt="${movie.title}"></a>
                    <div style="text-align: left; height: 350px;" class="box">
                        <p><strong>[${movie.title}, ${new Date(movie.release_date).getFullYear()}]</strong><br>
                        개봉시기: ${movie.release_date}<br>
                        감독: ${movie.director}<br>
                        출연: ${movie.cast.join(', ')}</p>
                        <a href="#" class="button">Read More</a>
                    </div>`;
                movieList.appendChild(movieSection);
            });
        })
        .catch(error => console.error('Error fetching movie data:', error));
});
