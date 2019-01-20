<template>
    <p>
        Title : <input type="text" v-model="movie.title" /><br />
        Year : <input type="text" v-model="movie.year" /><br />
        Synopsys : <textarea v-model="movie.synopsys"></textarea><br />
        <button v-on:click="save">Save</button>
        <button v-on:click="removefilm">Remove film</button>
    </p>
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
            this.$emit('edit',this.movie);
        },
        save: function() {
            this.$router.push({ path: `/` })
        },removefilm : function(){
            this.movies.splice(this.movies.findIndex(movie => movie.id === this.movie.id), 1);
            this.$router.push({ path: `/edit/${this.movie.id}` });
        }
    },
    computed: {
        movie: function(){
            return this.movies[this.$route.params.id];
        }
    }
}
</script>