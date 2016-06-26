<template>
  <p>{{message}}</p>
</template>

<script>
// babel を入れているので ES6 で書ける
export default {
  data() {
    return {
      message: "Hello, Vue!"
    }
  }
}
</script>