<template>
  <div class="counter" @click="increment">
    <div>{{count}}</div>
  </div>
  <div class="counter" @click="filter">
    <div>
      <span v-for="l in todoLists">
        {{l.description}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'counter',
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  computed: {
    ...mapState({
      count: state=>state.count,
      todoLists: state=>state.todoLists
    })
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },

    filter() {
      this.$store.getters.getTodoListById(3);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter{
    width: 100%;
    min-height: 100px;
  }
</style>
