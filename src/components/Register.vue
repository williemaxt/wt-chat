<template>
  <div class="">
    <h1 class="display">{{ msg }}</h1>
    <div class="card">
      <form @submit.prevent="enterChat">
        <h2>Enter a username to begin</h2>
        <!--This p tag will popup if feedback is no null-->
        <p v-if="feedback">{{feedback}}</p>
        <input type="text" name="username" v-model="username">
        <br>
        <br>
        <button>Enter Chat</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Welcome to the WT Chat',
      username: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if(this.username){
        /*redirecting client to the chat room and passing the username prop as a param.
        * we also need to accept it in the component that receives it*/
        this.$router.push({name: 'Chat', params:{username: this.username}});
      }else{
        this.feedback = 'Username is required'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form{
    max-width: 500px;
    width: 95%;
    display: block;
    margin: 0 auto;
    box-shadow: 0 0 5px #333;
    padding: 5px;
    border-radius: 3px;
    margin-top: 15vh;
    text-align: center;
    padding-bottom: 30px;
    background: #fff;
  }
  form button{
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
  form button:hover{
    background: #c0c0c0;
    transition: .3s;
  }
  form input{
    width: 90%;
    height: 40px;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    font-size: 40px;
  }
  form label{
    text-align: left;
    font-weight: bold;
    color: #333;
  }
  p{
    color: red;
  }
h1, h2 {
  font-weight: normal;
  text-align: center;
}
a {
  color: #42b983;
}
</style>
