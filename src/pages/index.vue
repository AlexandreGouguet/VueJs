<template>
<div>
    
    <v-layout row justify-center>
        <v-flex md8 justify-center>
            <v-carousel hide-controls>
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
    <v-layout  justify-center>
        <v-flex md8>
            <v-text-field class="mx-4 mt-3" flat label="Search" prepend-inner-icon="search" solo-inverted v-model="search"></v-text-field>
            <ul>
                <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:remove="remove(index)"></movie-item>
            </ul>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            movies: window.movies,
            items: [
            {
                src: 'https://i.ytimg.com/vi/SsU_ZPul5Hk/maxresdefault.jpg'
            },
            {
                src: 'http://img.over-blog-kiwi.com/1/36/64/60/20150323/ob_23a5c4_illuminatiwatcherdotcom-interstellar-m.jpg'
            }
            ]
        }
    },

    methods: {

    },

    computed: {
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>