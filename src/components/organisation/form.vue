<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Organisation</h6>
    </div>
    <q-form class="q-my-md">
      <q-input
        dense
        label="Organisation Name"
        outlined
        v-model="formData.organisation_name"
      />
      <br />
      <q-input dense label="State" outlined v-model="formData.state" />
      <br />
      <q-input dense label="City" outlined v-model="formData.city" />
      <br />
      <q-input dense label="Address" outlined v-model="formData.address" />
      <br />
      <q-input dense label="country" outlined v-model="formData.country" />
      <br />
      <q-input dense label="pincode" outlined v-model="formData.pincode" />
      <br />
      <q-input dense label="Contact No" outlined v-model="formData.contact_no" />
      <br />
      <q-input dense label="Email" outlined v-model="formData.email" />
      <br />
      <q-input dense label="Gst Number" outlined v-model="formData.gst_number" />
      <br />
      <q-input dense label="Pan No" outlined v-model="formData.pan_no" />
      <br />
      <q-toggle dense label="Status" outlined v-model="formData.acc" />
      <br />
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
      let response = await this.$api.post("/items/organisation", this.formData);
      console.log(response);
    },
  },
};
</script>
