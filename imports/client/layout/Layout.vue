<template>
  <QLayout view="lHh Lpr lFf">

    <QLayoutDrawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <QList
        no-border
        link
        inset-delimiter
      >
        <QListHeader>Essential Links</QListHeader>
        <QItem @click.native="openURL('http://quasar-framework.org')">
          <QItemSide icon="school" />
          <QItemMain
            label="Docs"
            sublabel="quasar-framework.org" />
        </QItem>
        <QItem @click.native="openURL('https://github.com/quasarframework/')">
          <QItemSide icon="code" />
          <QItemMain
            label="GitHub"
            sublabel="github.com/quasarframework" />
        </QItem>
        <QItem @click.native="openURL('https://discord.gg/5TDhbDg')">
          <QItemSide icon="chat" />
          <QItemMain
            label="Discord Chat Channel"
            sublabel="https://discord.gg/5TDhbDg" />
        </QItem>
        <QItem @click.native="openURL('http://forum.quasar-framework.org')">
          <QItemSide icon="record_voice_over" />
          <QItemMain
            label="Forum"
            sublabel="forum.quasar-framework.org" />
        </QItem>
        <QItem @click.native="openURL('https://twitter.com/quasarframework')">
          <QItemSide icon="rss feed" />
          <QItemMain
            label="Twitter"
            sublabel="@quasarframework" />
        </QItem>
      </QList>
    </QLayoutDrawer>

    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>

<script>
import LayoutHeader from './LayoutHeader';

export default {
  components: {
    LayoutHeader,
  },
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" module>
.play {
  font-size: 20px;
}
</style>
