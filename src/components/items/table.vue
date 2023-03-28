<template>
  <q-table :rows="rows"></q-table>
</template>
<script>
export default {
  data () {
    return {
      rows: []
    }
  },
  methods: {
    async fetchData () {
      let response = await this.$api.get('/items/items')
      this.rows = response.data.data
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
