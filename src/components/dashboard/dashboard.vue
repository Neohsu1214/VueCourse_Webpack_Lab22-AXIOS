<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your mail address: {{ email }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() { // ES6可簡寫成: data() {}
    return {
      email: ''
    }
  }, 
  computed: function() {
    return {

    }
  },
  methods: {

  },
  created: function() { // vue lifecycle hook: created
    axios.get('/users.json')
      .then(response => {
        console.log(response);
        const data = response.data;
        const users = [];
        for(let key in data) {
          const oneUser = data[key];
          oneUser.id = key;
          users.push(oneUser);
        }
        console.log(users);
        this.email = users[0].email;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>