import { createStore } from "vuex";
import { PostProps, testData,testPosts,UserProps,ColumnProps } from "./testData";
export interface GlobalDataProps{
  columns:ColumnProps[],
  posts:PostProps[],
  user:UserProps
}
const store =createStore<GlobalDataProps >({
  state:{
    columns:testData,
    posts:testPosts,
    user:{ islogin:false,name:'zdb',columnId:1 }
  },
  mutations:{
    login(state){
      state.user={...state.user,islogin:true,name:'zdb-king'}
    },
    creatPosts(state,data){
      state.posts.push(data)
    }
    },
  getters:{
    columsLength(state){
        return state.columns.filter(c=>c.id>2).length
    },
    getColumnById:(state)=>(id:number)=>{
      return state.columns.find(c=>c.id===id)
    },
    getPostsByCid:(state)=>(cid:number)=>{
      return state.posts.filter(post=>post.columnId===cid)
    }
  }
})
export default store