<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Account</h6>
    </div>
    <q-form class="q-my-md">
      <q-input dense label="ID" outlined v-model="formData.id" />
      <br />
      <q-input dense label="Sort" outlined v-model="formData.sort" />
      <br />
      <q-date dense label="Date Created" outlined v-model="formData.date_created" />
      <br />
      <q-date dense label="Date Updated" outlined v-model="formData.date_updated" />
      <br />
      <q-input dense label="Vehicle Type" outlined v-model="formData.vehicle_type" />
    </q-form>
    <q-separator class="q-my-md"></q-separator>
    <div class="row q-my-md q-gutter-sm">
      <div>
        <q-btn label="Submit" color="green" unelevated @click="submitData"></q-btn>
      </div>
      <div>
        <q-btn label="Cancel" color="red" unelevated></q-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    async submitData() {
      let response = await this.$api.post("/items/vehicle_type", this.formData);
      console.log(response);
    },
  },
};
</script>
