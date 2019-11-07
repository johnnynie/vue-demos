<template>
  <div class="hello">
    <h1>{{this.$store.state.count}}</h1>
    <h1>{{this.count}}</h1>
    <h1>{{this.countAlias}}</h1>
    <h1>{{this.countPlusLocalState}}</h1>
    <h1>{{this.localComputed}}</h1>
    <div v-for="(item) in doneTodos" :key="item.id">{{item.text}}</div>
    <div>{{doneTodosCount}}</div>
    <div>{{this.$store.getters.getTodoById(2).text}}</div>
    <button @click="add">增加</button> | 
    <button @click="add2">增加2</button> | 
    <button @click="increment">增加(mapMutations)</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    
  },
  data(){
    return {
      localCount:1
    }
  },
  /*computed:mapState([
    'count'
  ]),*/
  /*computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),*/
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    ...mapGetters([
      'doneTodosCount',
      'doneTodos'
    ]),
    localComputed () { 
      return 'localComputed';
    },
  },
  methods:{
    ...mapMutations([
      'increment'
    ]),
    ...mapMutations({
      add2: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    add() {
      this.$store.commit('increment');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
