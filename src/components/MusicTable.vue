<template>
  <div>
    <table width="100%" class="container-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">SubTitle</th>
          <th scope="col">Background</th>
          <th scope="col">Cover Art</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in tracks.hits" :key="index"  >
          <td nowrap>{{ value.track.key }}</td>
          <td  nowrap >{{ value.track.title }} </td>
          <td nowrap >{{ value.track.subtitle }} </td>
          
          <td  nowrap >
            <b-img :src="value.track.images.background" alt="avatar-icon" class="avatar-icon" v-if="value.track.images.background"/>
            <b-iconstack font-scale="5" animation="spin" v-if="!value.track.images.background">
              <b-icon stacked icon="camera" variant="info" scale="0.75" shift-v="-0.25"></b-icon>
              <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
            </b-iconstack>
          </td>

          <td nowrap >
            <b-img :src="value.track.images.coverart" alt="avatar-icon" class="avatar-icon" v-if="value.track.images.coverart"/>
            <b-iconstack font-scale="5" animation="spin" v-if="!value.track.images.coverart">
              <b-icon stacked icon="camera" variant="info" scale="0.75" shift-v="-0.25"></b-icon>
              <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
            </b-iconstack>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'ArtistTable',
    props: {
      tracks: {}
    },
  }
</script>

<style scoped>
  .avatar-icon{
    width:80px;
    border-radius:20px;
  }
  .music-icon{
    width:100px;
  }

</style>
