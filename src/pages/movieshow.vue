<template>
    <li><span>{{ movie.title }}</span>
        <button v-on:click="editfilm">Edit film</button> 
        <div>
            <p>Réalisé en {{movie.year}}</p>
            <p>{{movie.synopsys}}</p>
        </div>
    </li>
</template>
<script>
export default {
    data: function() {
        return {
            movies: window.movies
        }
    },
    methods: {
        editfilm : function(){
            this.$router.push({ path: `/edit/${this.movie.id}` })
        }
    },
    computed: {
        movie: function(){
            return this.movies[this.$route.params.id];
        }
    }
}
</script>