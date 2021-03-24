export default {
    name: "TheMovieThumbs",
    props: ['movie'],
    template:` 
    <div class="movie-thumb">
        <img @click="loadPlayer(movie)" :src='"images/" + movie.movies_cover' alt="Movie Thumb">
    </div>
    `,

    methods: {
        loadPlayer(movie) {
            debugger;
        }
    }
}