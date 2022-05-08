<template>
  <div class="home">
    <MessagesComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import MessagesComponent from '@/components/MessagesComponent.vue'

export default {
  name: 'HomeView',
  components: {
    MessagesComponent
  }
}
</script>
