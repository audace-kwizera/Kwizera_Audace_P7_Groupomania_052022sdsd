<template>
  <div class="Messages">
    <h2>Messages</h2>
    <ul>
      <li v-for="message of messages" :key="message">{{ message }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      messages: ['Un', 'Deux', 'Trois']
    }
  },
  async created () {
    try {
      const res = await axios.get('http://localhost:3000/messages')
      this.messages = res.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
