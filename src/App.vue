<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      response: {}
    }
  },
  methods: {
    async refresh () {
      let response = await this.$api.post('/auth/refresh', { refresh_token: this.response.refresh_token })
      this.response = response.data.data
      this.postAuth()
    },
    postAuth () {
      this.$api.defaults.headers.common.authorization = 'Bearer ' + this.response.access_token
      this.$q.localStorage.set('access_token', this.response.access_token)
      this.$q.localStorage.set('refresh_token', this.response.refresh_token)
      setTimeout(this.refresh, this.response.expires - 2000)
    }
  },
  created () {
    let access_token = this.$q.localStorage.getItem('access_token')
    let refresh_token = this.$q.localStorage.getItem('refresh_token')
    console.log(refresh_token)
    if (refresh_token) {
      this.response.refresh_token = refresh_token
      this.refresh()
    }
  }
})
</script>
