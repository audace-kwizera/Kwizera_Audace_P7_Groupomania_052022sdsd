<template>
  <div class="home">
    <NewMessageComponent />
    &nbsp;<br />
    <MessagesComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import MessagesComponent from '@/components/MessagesComponent.vue'
import NewMessageComponent from '@/components/NewMessageComponent.vue'

export default {
  name: 'HomeView',
  components: {
    MessagesComponent, NewMessageComponent
  }
}
</script>
