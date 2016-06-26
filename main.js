/**
 * Created by kazuma on 2016/06/26.
 */
var Vue = require('vue')
var TaskList = global.TaskList = require('./models/task_list').default

var task_list = global.task_list = new TaskList

new Vue({
  el: '#app',
  data: {
    list: task_list,
  },
  components: {
    MyTaskList: require('./components/task_list.vue')
  }
})