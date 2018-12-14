<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs-12">
            <h1 class="title">Location, Location, Location</h1>
            <div class="row">
              <div class="col-xs-1 left">
                <img src="../../assets/blue-triangle.svg" alt class="dot dot-1">
              </div>
              <div class="col-xs-11 right">
                <img src="../../assets/orange-oval.svg" class="dot dot-2" alt>
              </div>
            </div>
            <div class="body-content">
              <p>Since we can't examine the all of Twitter, and we believe strongly that @horse_js quotes themselves, we can take all of the people from the "Most Quoted" chart earlier and plot them on a map. If we look at just people who live in either Eastern or Central time, our pool gets narrowed down to 6 people.</p>
              <p>Five of them are in the New York area.</p>
            </div>
          </div>
          <div class="row center-xs content-extends">
            <div class="col-xs">
              <div id="myMap" style="position:relative;width:600px;height:400px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          screen_name: "Suspect 1",
          location: "NY",
          lat: 40.726436,
          lng: -73.999008
        },
        {
          screen_name: "Suspect 2",
          location: "NY",
          lat: 40.726436,
          lng: -73.7
        },
        {
          screen_name: "Suspect 3",
          location: "NY",
          lat: 40.726436,
          lng: -73.8
        },
        {
          screen_name: "Suspect 4",
          location: "NJ",
          lat: 40.728239,
          lng: -74.076998
        },
        {
          screen_name: "Suspect 5",
          location: "TX",
          lat: 30.2672,
          lng: -97.7431
        },
        { screen_name: "Suspect 6", location: "NY", lat: 40.726436, lng: -73.6 }
      ]
    };
  },
  created() {
    this.$root.$on("/mapready", () => {
      let map = new Microsoft.Maps.Map("#myMap", {
        credentials:
          "Auf0q_4vrG0mUo0tnY_cmxvLVuxLzDjC16F9CuDLSRHQ_L580GUb94E9t31r28UR",
        center: new Microsoft.Maps.Location(36.5712, -89.1862),
        zoom: 4
      });

      this.people.forEach(person => {
        let pin = new Microsoft.Maps.Pushpin(
          new Microsoft.Maps.Location(person.lat, person.lng)
        );

        //Add the pushpin to the map
        map.entities.push(pin);
      });
    });
  }
};
</script>

<style scoped>
.body-content {
  margin-top: -50px;
}
.dot-1 {
  margin-left: -200px;
}

.dot-2 {
  margin-right: -200px;
}
</style>
