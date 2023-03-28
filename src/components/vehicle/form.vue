<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">vehicles</h6>
    </div>
    <q-form class="q-my-md">
      <q-input dense label="ID" outlined v-model="formData.id" />
      <q-input class="q-my-xs" dense label="Status" outlined v-model="formData.status" />
      <q-input
        class="q-my-xs"
        dense
        label="Vehicle No"
        outlined
        v-model="formData.vehicle_no"
      />
      <q-input
        class="q-my-xs"
        dense
        label="Vehicle Type"
        outlined
        v-model="formData.vehicle_type"
      />
      <q-input
        class="q-my-xs"
        dense
        label="Fuel AVG"
        outlined
        v-model="formData.fuel_avg"
      />
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
      let response = await this.$api.post("/items/vehicles", this.formData);
      console.log(response);
    },
  },
};
</script>
