<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Driver</h6>
    </div>
    <q-form class="q-my-md">
      <q-input dense label="ID" outlined v-model="formData.id" />
      <q-input class="q-my-xs" dense label="status" outlined v-model="formData.status" />
      <q-input
        class="q-my-xs"
        dense
        label="Driver Name"
        outlined
        v-model="formData.driver_name"
      />
      <q-input
        class="q-my-xs"
        dense
        label="Address"
        outlined
        v-model="formData.address"
      />
      <q-input
        class="q-my-xs"
        dense
        label="Contact No"
        outlined
        v-model="formData.contact_no"
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
      let response = await this.$api.post("/items/driver", this.formData);
      console.log(response);
    },
  },
};
</script>
