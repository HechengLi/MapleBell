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
        <p>Spawn In: {{timer}}</p>
        <img class="list-item__image" v-bind:src="require(`@/assets/${this.bossInfo.boss_name}.png`)" width="45" height="45" />
      </div>
    </div>
  </section>
</template>

<script>
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
      timer: ''
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
      console.log(this.active)
      const date = new Date()
      let minsLeft = spawnTime - date.getMinutes() - 1
      minsLeft = minsLeft > 0 ? minsLeft : minsLeft + 60
      let secsLeft = 60 - date.getSeconds() - 1
      this.timer = `${minsLeft}m ${secsLeft}s`
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bossinfo.scss';
</style>
