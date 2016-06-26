<template>
  <div>{{list.title}}</div>
</template>

<script>
  var TaskList = require('../models/task_list').default

  export default {
    props: {
      list: {
        type: Object,
        default: function () {
          return new TaskList
        }
      }
    }
  }
</script>