<template>
  <QLayoutHeader>
    <QToolbar
      :glossy="$q.theme === 'mat'"
      :inverted="$q.theme === 'ios'"
      color="primary"
    >
      <QBtn
        flat
        dense
        round
        aria-label="Menu"
        @click="leftDrawerOpen = !leftDrawerOpen"
      >
        <QIcon name="menu" />
      </QBtn>

      <QToolbarTitle>
        Quasar App
        <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
      </QToolbarTitle>
    </QToolbar>
  </QLayoutHeader>

</template>

<script lang="ts">
export default {};
</script>

<style module>
</style>
