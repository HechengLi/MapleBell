<template>
  <div>
    <ul>
      <li v-for="item in data">
        {{item.boss_name}}, Lv.{{item.boss_level}}, {{item.spawn_location}}, XX:{{item.spawn_time}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      data: []
    }
  },
  created() {
    fetch('http://127.0.0.1:8081/getBossTime', {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: {}
      })
      .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          }

          // Examine response
          response.json().then(data => {
            this.data = data
          })
        }
      )
      .catch(err => {
        console.log('Fetch Error :-S', err)
      })
  }
}
</script>

<style lang="scss">
@import '../style/reset.css'
</style>
