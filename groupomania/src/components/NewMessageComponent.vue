<template>
  <div>
    <div class="Messages">
      <h2>Poster</h2>
        <form>

          <textarea v-model="msgBody" label='Message' required></textarea>
          <button @click="submit">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msgBody: ''
    }
  },
  async created () {
    try {
      const res = await axios.get('http://localhost:3000/messages')
      this.messages = res.data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    submit () {
      console.log(this.msgBody)
    }
  }
}
</script>
