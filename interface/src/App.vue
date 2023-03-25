<template>
  <v-container>
    <h1  class="page-header">ChatCSIfElse</h1>
    <div class="warehouse">
      <v-card>
        <h2>User</h2>
        <v-text-field
          class="text-field"
          v-model="id"
          @change="validateForm"
          placeholder="Message"
        />
        <!-- send button -->
        <v-btn justify-center @click="send"> send </v-btn>
      </v-card>
      <v-card>
        <h2>ChatCSIfElse</h2>
        <h3>Waiting for Message...</h3>
      </v-card>
    </div>
  </v-container>
</template>

<script>

// views handle app interface / ui
// can handle some form validation work before sending data to back-end
export default {
  name: "App",

  components: {
  },

  data: () => ({}),

  created() {
    this.$store.dispatch("getUsers");
  },

  computed: {
    // display nav route name
    currentRouteName() {
      return this.$route.name;
    },
  },
   methods: {
    send() {
        this.$store.dispatch("send", id);
      }
    },

    recieved(){
      this.$store.dispatch("recieved")
    }
  ,
};
</script>

<style>
* {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
