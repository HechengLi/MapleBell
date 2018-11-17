<template>
  <section class="list-item__container">
    <div class="list-item">
      <h6 class="list-item__title">
        {{bossInfo.boss_name}}
        <span class="list-item__timer">1min 12sec</span>
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
  computed: {
    fixed_spawn_time() {
      return this.bossInfo.spawn_time < 10 ? '0' + this.bossInfo.spawn_time : '' + this.bossInfo.spawn_time
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bossinfo.scss';
</style>
