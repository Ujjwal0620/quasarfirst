<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Contracts</h6>
    </div>
    <q-form class="q-my-md">
      <q-input dense label="Name" outlined v-model="formData.name" />
      <br />
      <q-input dense label="Account" outlined v-model="formData.account" />
      <br />
      <q-input dense label="Rent Per Month" outlined v-model="formData.rent_per_month" />
      <br />
      <q-date
        dense
        title="month"
        subtitle="year"
        outlined
        v-model="formData.date_created"
      />

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
      let response = await this.$api.post("/items/contracts", this.formData);
      console.log(response);
    },
  },
};
</script>
