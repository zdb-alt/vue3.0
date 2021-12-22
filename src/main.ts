import { createApp } from 'vue'
import App from './AppCopy.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.get("http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=5").then(res=>{
  console.log(res);
  
})
const app=createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
