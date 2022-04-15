<template>
  <div>
    <div>
      <input v-model="fetchArtistAndTracks" placeholder="Fetch for artist and tracks" class="input-search">
      <button v-on:click="listTracksAndArtist" class="button-search" :disabled="!fetchArtistAndTracks" :class="{disabledButton: !fetchArtistAndTracks }">Submit</button> 
    </div>
  
    <div class="container-spinner">
      <b-spinner v-if="!spinner" class="spinner"></b-spinner>
    </div>

  <div class="container-tables" v-if="response && spinner">
    <div >
      <ArtistTable :artists="response.data.artists" />
    </div>
  
    <div class="mt-5">
      <MusicTable :tracks="response.data.tracks" />
    </div>
  </div>


  </div>
</template>

<script>
  import {searchSongsAndArtist} from './services/search'
  import ArtistTable from './components/ArtistTable.vue'
  import MusicTable from './components/MusicTable.vue'

export default {
    name: 'App',
    components:{ArtistTable,MusicTable},
    data(){  
      return {
        spinner:true,
        response:'',
        fetchArtistAndTracks:''
      }
    },
    methods:{
      async listTracksAndArtist(){
        this.spinner = false
        this.response = await searchSongsAndArtist({term:this.fetchArtistAndTracks})
        this.spinner = true
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-search{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-search{
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.disabledButton{
  background-color: #b6b9bf;
  color: #ffffff;
}

.container-spinner{
  margin-top:5rem;
  display:flex;
  justify-content: center;
  align-items: center;
}

.spinner{
  height:250px;
  width: 250px;
  margin: 0 auto;
}

</style>
