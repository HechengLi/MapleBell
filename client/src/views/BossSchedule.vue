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
import { EventBus } from '../event/eventbus.js';

export default {
	components: {
		BossInfo
	},
  data() {
    return {
      data: [],
      activeBosses: [],
      inactiveBosses: []
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
            this.processData()
          })
        }
      )
      .catch(err => {
        console.log('Fetch Error :-S', err)
      })
    EventBus.$on('shuffle', () => {
      this.processData()
    })
  },
  methods: {
    processData() {
      this.data.sort((a, b) => {
        const date = new Date()
        let minsLeft_a = a.spawn_time - date.getMinutes()
        minsLeft_a = minsLeft_a > 0 ? minsLeft_a : minsLeft_a + 59

        let minsLeft_b = b.spawn_time - date.getMinutes()
        minsLeft_b = minsLeft_b > 0 ? minsLeft_b : minsLeft_b + 59

        return minsLeft_a - minsLeft_b
      })

      this.activeBosses = this.data.filter(n => {
        const spawnTime = n.spawn_time
        const date = new Date()
        let minsLeft = spawnTime - date.getMinutes()
        minsLeft = minsLeft > 0 ? minsLeft : minsLeft + 59
        return minsLeft >= 50
      })

      this.inactiveBosses = this.data.filter(n => {
        const spawnTime = n.spawn_time
        const date = new Date()
        let minsLeft = spawnTime - date.getMinutes()
        minsLeft = minsLeft > 0 ? minsLeft : minsLeft + 59
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
