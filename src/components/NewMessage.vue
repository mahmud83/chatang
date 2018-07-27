<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to chat)</label>
      <input type="text" name="new-message" v-model="newMessage">
    </form>
  </div>
</template>

<script>
import firebaseApp from '../fire/init'

export default {
  name: 'NewMessage',
  props: ['name'],
  data() {
    return {
      newMessage: null
    }
  },
  methods: {
    addMessage() {
      let chatDb = firebaseApp.collection('chat')
      let chatData = {
        message: this.newMessage,
        name: this.name,
        time: Date.now()
      }
      chatDb.add(chatData)
      this.newMessage = ''
    }
  }
}
</script>

