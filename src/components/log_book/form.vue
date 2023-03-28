<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Log Book</h6>
    </div>
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
      <q-select
        dense
        label="Contact ID"
        @filter="
          (val, done) => {
            contactSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.contact_id"
        :options="contactList"
        map-option
        option-label="name"
        option-value="id"
        emit-value=""
        use-input
      />
      <br />
      <q-select
        dense
        label="Vehicle ID"
        @filter="
          (val, done) => {
            vehicleSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.vehicle_id"
        :options="vehicleList"
        map-option
        option-label="vehicle_no"
        option-value="id"
        emit-value=""
        use-input
      />
      <br />
      <q-select
        dense
        label="Driver ID"
        @filter="
          (val, done) => {
            driverSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.driver_id"
        :options="driverList"
        map-option
        option-label="driver_name"
        option-value="id"
        emit-value=""
        use-input
      />
      <br />
      <q-select
        dense
        label="Contract ID"
        @filter="
          (val, done) => {
            contractSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.contract_id"
        :options="contractList"
        map-option
        option-label="name"
        option-value="id"
        emit-value=""
        use-input
      />
      <br />
      <q-input dense label="Log_Type" outlined v-model="formData.log_type" />
      <br />
      <q-date type="date" dense label="Date_from" outlined v-model="formData.date_from" />

      <br />
      <q-date
        title="Month"
        subtitle="year"
        dense
        label="Date_To"
        outlined
        v-model="formData.date_to"
      />
      <br />
      <q-input dense label="Rent" outlined v-model="formData.rent" />
      <br />
      <q-input
        dense
        label="Initial_reading"
        outlined
        v-model="formData.initial_reading"
      />
      <br />
      <q-input dense label="Final_Reading" outlined v-model="formData.final_reading" />
      <br />
      <q-input dense label="Running_kms" outlined v-model="formData.running_kms" />
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
      accountsList: [],
      contactSearchText: "",
      contactList: [],
      vehicleSearchText: "",
      vehicleList: [],
      driverSearchText: "",
      driverList: [],
      contractSearchText: "",
      contractList: [],
    };
  },
  watch: {
    accountSearchText(val) {
      this.fetchAccount();
    },
    contactSearchText(val) {
      this.fetchContact();
    },
    vehicleSearchText(val) {
      this.fetchVehicle();
    },
    driverSearchText(val) {
      this.fetchDriver();
    },
    contractSearchText(val) {
      this.fetchContract();
    },
  },
  methods: {
    async submitData() {
      let response = await this.$api.post("/items/log_book", this.formData);
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
    async fetchContact() {
      let params = {};
      if (this.contactSearchText) {
        params.filter = {
          name: {
            _starts_with: this.contactSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/contacts", { params });
      this.contactList = response.data.data;
    },
    async fetchVehicle() {
      let params = {};
      if (this.vehicleSearchText) {
        params.filter = {
          vehicle_no: {
            _starts_with: this.vehicleSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/vehicles", { params });
      this.vehicleList = response.data.data;
    },
    async fetchDriver() {
      let params = {};
      if (this.driverSearchText) {
        params.filter = {
          driver_name: {
            _starts_with: this.driverSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/driver", { params });
      this.driverList = response.data.data;
    },
    async fetchContract() {
      let params = {};
      if (this.contractSearchText) {
        params.filter = {
          name: {
            _starts_with: this.contractSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/contracts", { params });
      this.contractList = response.data.data;
    },
  },
  created() {
    this.fetchAccount();
    this.fetchContact();
    this.fetchVehicle();
    this.fetchDriver();
    this.fetchContract();
  },
};
</script>
