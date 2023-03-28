<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Account</h6>
    </div>
    <q-form class="q-my-md">
      <q-input dense label="ID" outlined v-model="formData.id" />
      <br />
      <q-input dense label="Account Name" outlined v-model="formData.account_name" />
      <br />
      <q-input
        dense
        type="textarea"
        label="Account address"
        outlined
        v-model="formData.account_address"
      />
      <br />
      <q-input
        ref="inputRef"
        lazy-rules
        :rules="[(val) => val.length <= 10 || 'Please use maximum 10 characters']"
        dense
        label="Contact Number"
        outlined
        v-model="formData.contact_number"
      />
      <br />
      <q-input dense label="Email" outlined v-model="formData.email" />
      <br />
      <q-input dense label="City" outlined v-model="formData.city" />
      <br />
      <q-select
        dense
        label="State"
        :options="[
          'ANDHRA PERDESH',
          'ARUNACHAL PERDESH',
          'ASSAM',
          'BIHAR',
          'CHHATTISHGHAR',
          'GOA',
          'GUJARAT',
          'HARYANA',
          'HIMACHAL PERDESH',
          'JHARKHAND',
          'KARNATAK',
          'KERLA',
        ]"
        outlined
        v-model="formData.state"
      />
      <br />
      <q-input dense label="Pincode" outlined v-model="formData.pincode" />
      <br />
      <q-input dense label="Country" outlined v-model="formData.country" />
      <br />
      <q-input dense label="gst" outlined v-model="formData.gst" />
      <br />
      <q-select dense label="status" outlined v-model="formData.status" />
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
