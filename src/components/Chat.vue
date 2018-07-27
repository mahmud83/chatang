<template>
  <div class="chat container">
    <img src="https://res.cloudinary.com/hamharry/image/upload/v1532596684/chatang_oa85zl.png" alt="Chatang">
    <div class="card">
      <div class="card-content">
        <ul class="message">
          <li v-for="(chat, idx) in chats" :key="idx">
            <span class="teal-text">{{ chat.name }}</span>
            <span class="grey-text text-darken-3">{{ chat.message }}</span>
            <span class="grey-text time">{{ chat.time }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <div class="new-message">
          <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to chat)</label>
            <input type="text" name="new-message" v-model="newMessage">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../fire/init'

export default {
  name: 'Chat',
  props: ['name'],
  data() {
    return {
      chats: [],
      newMessage: null
    }
  },
  firestore () {
    return {
      chats: db.collection('chat').orderBy('createdAt')
    }
  },
  methods: {
    addMessage() {
      let chatDb = db.collection('chat')
      let chatData = {
        message: this.newMessage,
        name: this.name,
        time: Date.now()
      }
      chatDb.add(chatData)
      this.newMessage = ''
    },
    // getChat () {
    //   const chatRef = db.collection('chat').orderBy('time')
    //   var getChat = chatRef.get()
    //   .then(snapshot => {
    //     let chats = [];
    //     snapshot.forEach(doc => {
    //       chats.push(doc.data())
    //     });
    //     this.chats = chats
    //   })
    //   .catch(err => {
    //     console.log('Error getting document', err);
    //   });
    // },
    // getRealTimeChat () {
    //   const chatRef = db.collection('chat').orderBy('time')
    //   let chats = this.chats
    //   chatRef.onSnapshot(function(snapshot) {
    //     snapshot.forEach(doc => {
    //       console.log(doc.data())
    //       chats.push(doc.data())
    //       this.chats = chats
    //     })
    //   })
    //   console.log(this.chats)
    // },
    deleteLocation (id) {
      db.collection('chat').doc(id).delete()
    }
  }
}
</script>

<style>
  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }

  .chat span {
    font-size: 1.4em;
  }

  .chat .time {
    display: block;
    font-size: 1.2em;
  }
</style>


