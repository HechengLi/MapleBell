<template>
  <header class="nav-container">
    <div class="nav">
      <router-link class="nav__link active" to="/boss_schedule">Boss Schedule</router-link>
      <router-link class="nav__link" to="/contact_me">Contact Me</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../style/nav.scss';
</style>
