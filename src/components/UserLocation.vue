<template>
  <div>
    <!-- <table>
      <tr v-for="person in people" v-bind:key="person.screen_name">
        <td>{{ person.screen_name }}</td>
        <td>{{ person.location }}</td>
      </tr>
    </table> -->
    <div id="myMap" style="position:relative;width:600px;height:400px;"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        people: [
          { screen_name: 'Suspect 1', location: 'NY', lat: 40.726436, lng: -73.999008 },
          { screen_name: 'Suspect 2', location: 'NY', lat: 40.726436, lng: -73.7 },
          { screen_name: 'Suspect 3', location: 'NY', lat: 40.726436, lng: -73.8 },
          { screen_name: 'Suspect 4', location: 'NJ', lat: 40.728239, lng: -74.076998 },
          { screen_name: 'Suspect 5', location: 'TX', lat: 30.2672, lng: -97.7431 },
          { screen_name: 'Suspect 6', location: 'NY', lat: 40.726436, lng: -73.6 }
        ]
      }
    },
    created() {
      this.$root.$on('/mapready', () => {

        let map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'Auf0q_4vrG0mUo0tnY_cmxvLVuxLzDjC16F9CuDLSRHQ_L580GUb94E9t31r28UR',
            center: new Microsoft.Maps.Location(36.5712, -89.1862),
            zoom: 4
        });

        this.people.forEach(person => {
          let pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(person.lat, person.lng));

          //Add the pushpin to the map
          map.entities.push(pin);
        });
      })
    }
  }
</script>

<style scoped>
table {
  width: 100%;
  margin-left: 20px;
  font-weight: bold;
}
</style>
