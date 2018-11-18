<template>
  <section class="list-item__container">
    <div class="list-item">
      <h6 class="list-item__title">
        {{bossInfo.boss_name}}
        <span class="list-item__timer">{{timer}}</span>
      </h6>
      <div class="list-item__body">
        <p>Lv{{bossInfo.boss_level}}</p>
        <p>Location: {{bossInfo.spawn_location}}</p>
        <p>Spawn Time: XX:{{fixed_spawn_time}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bossInfo: {
      type: Object
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
      const date = new Date()
      let minsLeft = spawnTime - date.getMinutes()
      minsLeft = minsLeft > 0 ? minsLeft : minsLeft + 60
      let secsLeft = 60 - date.getSeconds()
      this.timer = `${minsLeft}mins ${secsLeft}secs`
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bossinfo.scss';
</style>
