<template>
  <div class="d-flex justify-content-center">
    <table width="100%" class="container-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in artists.hits" :key="index">
          <td  nowrap>{{ value.artist.id }}</td>
          <td  nowrap >{{ value.artist.name }} </td>
          <td  nowrap >
            <b-img :src="value.artist.avatar" alt="avatar-icon" class="avatar-icon" v-if="value.artist.avatar"/>
            <b-iconstack font-scale="5" animation="spin" v-if="!value.artist.avatar">
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
      artists: {}
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
