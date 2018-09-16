<template>
    <div class="chat-container">
      <h1>Open Chat</h1>
      <div class="card">
        <div class="card-content">
          <ul class="messages" v-chat-scroll>
            <li v-for="message in messages" :key="message.id">
              <span class="messageName">{{message.username}}</span>
              <br>
              <span>{{message.message}}</span>
              <br>
              <span class="messageTime">{{message.date}}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <!--Passing the username in the current component to the 'New Message' component-->
        <NewMessage :username="username"></NewMessage>
        </div>
      </div>
    </div>
</template>

<script>
  import db from '../../firebase/init.js'
  import NewMessage from '@/components/NewMessage'
  import axios from 'axios'
  //import moment for date formatting
  import moment from 'moment'
    export default {
        name: "Chat",
      //accepting the property
      props: ['username'],
      components: {
        NewMessage
      },
      data(){
          return{
            messages:[]
              }
            },
      created(){
        //listening for new messages in firebase
        let ref = db.collection('chats').orderBy('date');
        //this will listen to the snapshot of the reference we just set
        ref.onSnapshot(snapshot => {
          //the docChanges() method gives us all the changes to the document
          //cycle through each of the changes that were added
          snapshot.docChanges().forEach(change => {
            //now we will make sure the change is of type 'added'
            if(change.type == 'added'){
              //storing the change in a variable
              let doc = change.doc;
              //pushing the results to the messages array
              this.messages.push({
                id: doc.id,
                username: doc.data().username,
                message: doc.data().message,
                //format the date with moment before pushing to the array
                date: moment(doc.data().date).format('lll')
              })
            }
          });
        })
      }
    }
</script>

<style scoped>
  h1{
    text-align: center;
  }
  ul{
    list-style: none;
  }
.card{
  max-width: 900px;
  width: 90%;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 5px;
  padding: 5px;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 3px;
}
.card-action{
  border-top: 1px solid #aaa;
  padding-top: 10px;
}
  /*Message card styling*/
  .messageName{
    font-weight: bold;
    color: #3f93aa;
  }
  .messageTime{
    font-weight: bold;
    font-size: 0.8em;
  }
  /*Message List Item*/
  .messages li{
    border-radius: 2px;
    margin-bottom: 5px;
    padding: 10px;
    box-shadow: 0 0 2px #333;
  }
  /*Message UL*/
  .messages{
    padding: 0;
  }
  ::-webkit-scrollbar{
    width: 3px;
  }
  ::-webkit-scrollbar-track{
    background: none;
  }
  ::-webkit-scrollbar-thumb{
    background: #aaa;
  }
  .card-content{
    padding: 5px;
    overflow-y: scroll;
    max-height: 60vh;
  }
  /*Chat Container*/
  .card{
    background: #fff;
  }
</style>
