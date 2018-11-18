<template>
  <article class="list-container">
    <BossInfo v-for="item in data" v-bind:bossInfo="item" v-bind:key="item.boss_name" />
  </article>
</template>

<script>
import BossInfo from '../components/BossInfo.vue'
import url from '../api/api.js'
export default {
	components: {
		BossInfo
	},
  data() {
    return {
      data: []
    }
  },
  created() {
    fetch(`${url}/getBossTime`, {
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

<style lang="scss" scoped>
.list-container {

}
</style>
