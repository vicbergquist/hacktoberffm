<template>
  <div class="layout-wrapper layout-fullwidth">
    <aside class="chat-wrapper">
      <!-- <div class="info">
        <font-awesome-icon :icon="['fas', 'info-circle']" />
      </div> -->
      <div ref="logoHeight" class="logo">
        <nuxt-link to="/">
          <img class="logo-img" src="/logo.png" alt="hacktoberfest logo" />
        </nuxt-link>
      </div>
      <chat-app :logo-height="logoHeight" />
    </aside>
    <nuxt />
  </div>
</template>

<script>
import ChatApp from '@/components/chat/ChatApp'
export default {
  components: {
    ChatApp
  },
  data() {
    return {
      logoHeight: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.logoHeight = this.$refs.logoHeight.scrollHeight
    }, 100)
  }
}
</script>

<style scoped>
.layout-fullwidth {
  min-height: 100vh;
}

.chat-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(18, 29, 58, 0.4);
}

.logo {
  display: flex;
  align-self: center;
  padding: 0;
  margin: 0;
}
</style>
