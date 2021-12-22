<template>
<nav class="navbar  navbar-dark bg-primary">
    <router-link class="navbar-brand ml-2" to="/">
      知乎
    </router-link>
    <ul v-if="!user.islogin" class="list-inline mb-0 mr-2">
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link></li>
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">注册</router-link></li>
    </ul>
    <ul v-else  class="list-inline mb-0 mr-2">
        <li class="list-inline-item">
          <Dropdown :title="`你好${user.name}`">
              <DropdownItem><router-link class="dropdown-item" to="/create">新建文章</router-link></DropdownItem>
              <DropdownItem disabled><a class="dropdown-item" href="#">编辑资料</a></DropdownItem>
              <DropdownItem><a class="dropdown-item" href="#">退出登录</a></DropdownItem>
          </Dropdown>
        </li>
    </ul>
</nav>
</template>

<script lang="ts">
import { defineComponent,PropType } from "vue";
import Dropdown from './Dropdown.vue';
import { UserProps } from '../testData'
import DropdownItem from './DropdownItem.vue'
export default defineComponent({
  components:{
    Dropdown,
    DropdownItem
  },
    name: 'Nav',
    props:{
      user:{
        type: Object as PropType<UserProps>,
        required:true
      }
    }
});
</script>

<style lang="scss" scoped>

</style>
