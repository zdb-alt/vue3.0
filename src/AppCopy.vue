<template>
  <div class="container">
    <!-- 头部 -->
    <Nav :user="testUser"></Nav>
    <router-view :key="new Date().getTime()"></router-view>
    <footer class="fo">
      <p class="p">知乎专栏，独家商标，侵权必究</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "@/components/Nav.vue";
import { useStore } from 'vuex'
export default defineComponent({
  name: "App",
  components: {
    Nav,
  },
  setup() {
    const store =useStore()
    const testUser=computed(()=>store.state.user)
    return {
      testUser
    };
  },
});
</script>


<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.fo{
  margin-top: 300px;
  position: relative;
  bottom: 0;
  background-color: yellowgreen;
  color: pink;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
}
</style>
