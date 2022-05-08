<template>
  <div class="Messages">
    <h2>Messages</h2>

    <ul v-for="message in messages" v-bind:key="message">
      <li>{{ message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: ['My very', 'First', 'Message']
    }
  }
}
</script>
