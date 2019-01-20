<template>
    <li><span v-on:click="showdetails">{{ movie.title }}</span>
        <button v-on:click="editfilm">Edit film</button> 
        <button v-on:click="removefilm">Remove film</button> 
        <div v-if="movie.detailsdisplay">
            <p>Réalisé en {{movie.year}}</p>
            <p>{{movie.synopsys}}</p>
        </div>
    </li>
</template>
<script>
export default {
    props: ["movie"],
    data: function() {
        return {
            //data
        }
    },
    methods: {
        editfilm : function(){
            this.$router.push({ path: `/edit/${this.movie.id}` })
        },showdetails : function(){
            this.$router.push({ path: `/show/${this.movie.id}` })
        },removefilm : function(){
            this.$emit('remove')
        }
    }
}
</script>