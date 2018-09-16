import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      //this allows us to pass properties from this component to another
      props: true,
      /*now we will create a 'route guard'. no one will have access to chat
      in the url if the username prop is not present*/
      beforeEnter: (to, from, next) => {
        //decision to check if username exists before redirecting
        if(to.params.username){
          console.log(to.params.username);
          next();
        } else {
          //redirect to the (route name)Register component
          next({name: 'Register'});
        }
      }
    }
  ]
})
