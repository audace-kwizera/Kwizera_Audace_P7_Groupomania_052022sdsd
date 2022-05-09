<template>
  <div>
    <div class="Messages">
      <h2>Poster</h2>
        <form>
          <span>Votre message:</span>
          <p style="white-space: pre-line;">{{ message }}</p>
          <textarea v-model="message" placeholder="add multiple lines"></textarea>
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
