<template>
    <li class="mb-4">
        <v-card>
            <v-img height="150px" v-bind:src="movie.imgUrl">
            </v-img>
            <v-card-title primary-title>
                <div>
                    <div class="headline"><span v-on:click="showdetails">{{ movie.title }}</span></div>
                    <span class="grey--text">Réalisé en {{movie.year}}</span>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn v-on:click="editfilm" flat>Edit</v-btn>
                <v-btn v-on:click="removefilm" flat color="secondary">Remove</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
                <v-card-text v-show="show">
                    {{movie.synopsys}}
                </v-card-text>
            </v-slide-y-transition>
        </v-card>
    </li>
</template>
<script>
export default {
    props: ["movie"],
    data: function() {
        return {
            show: false
            //data
        }
    },
    methods: {
        editfilm : function(){
            this.$router.push({ path: `/edit/${this.movie.id}` })
        },showdetails : function(){
            this.detailsdisplay = !detailsdisplay;
            //this.$router.push({ path: `/show/${this.movie.id}` })
        },removefilm : function(){
            this.$emit('remove')
        }
    }
}
</script>

<style>
    li{
        list-style: none;
    }
</style>