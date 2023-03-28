<template>
  <div clas="column">
    <div><h6 class="q-ma-none">Contact</h6></div>
    {{ accountSearchText }}
    <q-form class="q-my-md">
      <q-input dense label="ID" outlined v-model="formData.id" />
      <br />
      <q-select
        dense
        label="Account ID"
        @filter="
          (val, done) => {
            accountSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.account_id"
        :options="accountList"
        map-option
        option-label="account_name"
        option-value="id"
        emit-value=""
        use-input
      />
      <br />
      <q-input dense label="Designation" outlined v-model="formData.desination" />
      <br />
      <q-input dense label="Name" outlined v-model="formData.name" />
      <br />
      <q-select
        :options="draft"
        dense
        label="status"
        outlined
        v-model="formData.status"
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
      accountSearchText: "",
      accountList: [],
    };
  },
  watch: {
    accountSearchText(val) {
      this.fetchAccount();
    },
  },
  methods: {
    async submitData() {
      let response = await this.$api.post("/items/contacts", this.formData);
      console.log(response);
    },
    async fetchAccount() {
      let params = {};
      if (this.accountSearchText) {
        params.filter = {
          account_name: {
            _starts_with: this.accountSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/accounts", { params });
      this.accountList = response.data.data;
    },
    created() {
      this.fetchAccount();
    },
  },
};
</script>
