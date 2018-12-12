<template>
  <section class="list-item__container">
    <div class="list-item" v-bind:class="{ active: active }">
      <h6 class="list-item__title">
        {{bossInfo.boss_name}}
        <span class="list-item__level">Lv{{bossInfo.boss_level}}</span>
      </h6>
      <div class="list-item__body">
        <p>Location: {{bossInfo.spawn_location}}</p>
        <p>Spawn Time: XX:{{fixed_spawn_time}}</p>
        <p class="list-item__inactive-timer">Spawn In: {{inactive_timer}}</p>
        <p class="list-item__active-timer">Despawn In: {{active_timer}}</p>
        <img class="list-item__image" v-bind:src="require(`@/assets/${this.bossInfo.boss_name}.png`)" width="45" height="45" />
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from '../event/eventbus.js';

export default {
  props: {
    bossInfo: {
      type: Object
    },
    active: {
      type: Boolean
    }
  },
  data() {
    return {
      inactive_timer: '',
      active_timer: ''
    }
  },
  computed: {
    fixed_spawn_time() {
      return this.bossInfo.spawn_time < 10 ? '0' + this.bossInfo.spawn_time : '' + this.bossInfo.spawn_time
    }
  },
  mounted() {
    const spawnTime = this.bossInfo.spawn_time
    setInterval(() => {
      const date = new Date()
      let minsLeft = spawnTime - date.getMinutes()
      minsLeft = minsLeft > 0 ? minsLeft : minsLeft + 59
      let secsLeft = 59 - date.getSeconds()
      this.inactive_timer = `${minsLeft}m ${secsLeft}s`
      this.active_timer = `${minsLeft - 50}m ${secsLeft}s`
      EventBus.$emit('shuffle')
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bossinfo.scss';
</style>
