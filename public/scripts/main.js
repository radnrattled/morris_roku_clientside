//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
//import TheMovieThumbs from './components/TheMovieThumbs.js';
import LoginComponent from './components/TheLoginComponent.js';

const router = new VueRouter({
    routes: [
        { path: "/", name: 'root', component: LoginComponent }
    ]
});

(() => {
    const vm = new Vue({
        data: {
            allMovies: []
        },

        created: function() {
            //fetch('./api/movies')
            //.then(res => res.json())
            //.then(data => {
              //  console.table(data);
                //this.allMovies = data;
            //})
            //.catch(err => console.error(err));
        },
        methods: {

        },
        components: {
           // moviethumb: TheMovieThumbs
        },

        router
    }).$mount('#app');
})();