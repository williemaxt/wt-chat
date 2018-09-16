<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <!--This p tag will popup if feedback is no null-->
      <p v-if="feedback">{{feedback}}</p>
      <input type="text" name="new-message" v-model="newMessage" placeholder="Type a message ...">
      <br>
      <br>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
  import db from '../../firebase/init.js'
  import Chat from '../components/Chat'
    export default {
        name: "NewMessage",
        //accepting the property
        props: ['username'],
        data(){
          return{
              newMessage: null,
              feedback: null
          }
        },
        methods:{
          addMessage(){
            if(this.newMessage){
              //add the data to the database (for now we'll log)
              console.log(this.newMessage, this.username, Date.now());
              // adding information to chat on  firebase
              db.collection("chats").add({
                message: this.newMessage,
                username: this.username,
                date: Date.now()
              })
                .then(function(docRef) {
                  console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                  console.error("Error adding document: ", error);
                });
              //Now we will clear the field after the data has been submitted by setting data as an empty string
              this.newMessage = '';
              this.feedback = '';
            } else {
              this.feedback = "You can't leave this blank"
            }
          }
        },
      components:{
          Chat
      }
    }
</script>

<style scoped>
  .new-message{
    width: 90%;
    display: block;
    margin: 0 auto;
    position: sticky;
  }
  .new-message input{
    width: 100%;
    margin: 0 auto;
    height: 30px;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    font-size: 20px;
    background: none;
  }
  .new-message button{
    width: 150px;
    background: #333;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    border: none;
    outline: none;
    height: 30px;
    transition: .3s;
    box-shadow: 0 0 2px #333;
  }
  p{
    color: red;
  }
</style>
