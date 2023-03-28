<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Invoices</h6>
      {{ accountSearchText }}
    </div>
    <q-form class="q-my-md">
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
      <q-select
        dense
        label="Organisation ID"
        @filter="
          (val, done) => {
            oraganisationSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.organisation_id"
        :options="organisationList"
        map-option
        option-label="organisation_name"
        option-value="id"
        emit-value=""
        use-input
      />
      <br />
      <q-select
        dense
        label="Bank ID"
        @filter="
          (val, done) => {
            bankSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.bank_id"
        :options="bankList"
        map-option
        option-label="bank_name"
        option-value="id"
        emit-value=""
        use-input
      />

      <br />
      <q-input dense label="ID" outlined v-model="formData.id" />
      <br />
      <q-input
        dense
        label="Invoice Date"
        type="date"
        outlined
        v-model="formData.invoice_date"
      />
      <br />
      <q-input dense label="Grand Total" outlined v-model="formData.grand_total" />
      <br />
      <q-input dense label="Invoice Number" outlined v-model="formData.invoice_number" />
      <br />
      <q-input
        dense
        label="Journey Date"
        type="date"
        outlined
        v-model="formData.journey_date"
      />
      <br />
      <q-select
        color="purple-12"
        v-model="formData.payment_status"
        :options="['unpaid', 'partially paid', 'paid']"
        label="Status"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
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
      accountSearchText: "",
      accountList: [],
      organisationSearchText: "",
      organisationList: [],
      bankSearchText: "",
      bankList: [],
    };
  },
  watch: {
    accountSearchText(val) {
      this.fetchAccount();
    },
    organisationSearchText(val) {
      this.fetchOrganisation();
    },
    bankSearchText(val) {
      this.fetchBank();
    },
  },
  methods: {
    async submitData() {
      let response = await this.$api.post("/items/invoices", this.formData);
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
    async fetchOrganisation() {
      let params = {};
      if (this.organisationSearchText) {
        params.filter = {
          organisation_name: {
            _starts_with: this.oraganisationSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/organisation", { params });
      this.organisationList = response.data.data;
    },
    async fetchBank() {
      let params = {};
      if (this.bankSearchText) {
        params.filter = {
          bank_name: {
            _starts_with: this.bankSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/banks", { params });
      this.bankList = response.data.data;
    },
  },
  created() {
    this.fetchAccount();
    this.fetchOrganisation();
    this.fetchBank();
  },
};
</script>
