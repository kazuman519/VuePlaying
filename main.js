/**
 * Created by kazuma on 2016/06/26.
 */
var Vue = require('vue')
new Vue({
  el: '#app',
  components: {
    MyMessage: require('./components/message.vue')
  }
})