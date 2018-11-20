<template>
  <article class="list-container">
    <section>
      <h3 class="list-title list-active">Active</h3>
      <BossInfo v-for="item in activeBosses" v-bind:bossInfo="item" v-bind:active="true" v-bind:key="item.boss_name" />
    </section>
    <section>
      <h3 class="list-title">Waiting</h3>
      <BossInfo v-for="item in inactiveBosses" v-bind:bossInfo="item" v-bind:active="false" v-bind:key="item.boss_name" />
    </section>
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
  },
  computed: {
    activeBosses() {
      return this.data.filter(n => {
        const spawnTime = n.spawn_time
        const date = new Date()
        let minsLeft = spawnTime - date.getMinutes() - 1
        minsLeft = minsLeft > 0 ? minsLeft : minsLeft + 60
        return minsLeft >= 50
      })
    },
    inactiveBosses() {
      return this.data.filter(n => {
        const spawnTime = n.spawn_time
        const date = new Date()
        let minsLeft = spawnTime - date.getMinutes() - 1
        minsLeft = minsLeft > 0 ? minsLeft : minsLeft + 60
        return minsLeft < 50
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list-container {
  height: 100%;
  overflow: auto;

  .list-title {
    padding: 5px;
    padding-bottom: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .list-active {
    color: rgb(0, 255, 0);
  }
}
</style>
