<template>
  <div class="register">
    <h1>Register</h1>
    <input type="email" name="email" v-model="user.email" placeholder="email"><br>
    <input type="password" name="password" v-model="user.password" placeholder="password"><br>
    <button @click="register">Register Now</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      const res = await AuthenticationService.register({
        email: this.user.email,
        password: this.user.password
      })
      console.log('register button was clicked', this.user.email, this.user.password)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
