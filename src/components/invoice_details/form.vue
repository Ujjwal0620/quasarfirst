<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">invoice Details</h6>
      {{ accountSearchText }}
    </div>
    <q-form class="q-my-md">
      <q-input dense label="ID" outlined v-model="formData.id" />
      <br />
      <q-input dense label="User_Created" outlined v-model="formData.user_created" />
      <br />
      <q-input
        dense
        label="Date_Created"
        type="date"
        outlined
        v-model="formData.date_created"
      />
      <br />
      <q-input dense label="User_Updated" outlined v-model="formData.user_updated" />
      <br />
      <q-input
        dense
        label="Date_Updated"
        type="date"
        outlined
        v-model="formData.date_updated"
      />
      <q-select
        dense
        label="Invoice ID"
        @filter="
          (val, done) => {
            invoiceSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.invoice_id"
        :options="invoiceList"
        map-option
        option-label="incoice_name"
        option-value="id"
        emit-value
        use-input
      />
      <br />
      <q-select
        dense
        label="Item ID"
        @filter="
          (val, done) => {
            itemSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.item_id"
        :options="itemList"
        map-option
        option-label="item_name"
        option-value="id"
        emit-value
        use-input
      />
      <br />
      <q-input dense label="Rate" outlined v-model="formData.rate" />
      <br />
      <q-input dense label="Quantity" outlined v-model="formData.quantity" />
      <br />
      <q-select dense label="Amount" outlined v-model="formData.amount" />
      <br />
      <q-input dense label="Tax_Rate" outlined v-model="formData.tax_rate" />
      <br />
      <q-input dense label="Tax_Amount" outlined v-model="formData.tax_amount" />
      <br />
      <q-input dense label="Total_Amount" outlined v-model="formData.total_amount" />
      <br />
      <q-input dense label="Status" outlined v-model="formData.status" />
      <br />
      <q-input dense label="Description" outlined v-model="formData.description" />
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
      invoicesSearchText: "",
      invoicesList: [],
      itemSearchText: "",
      itemList: [],
    };
  },
  watch: {
    invoiceSearchText(val) {
      this.fetchInvoices();
    },
    itemSearchText(val) {
      this.fetchItem();
    },
  },
  methods: {
    async submitData() {
      let response = await this.$api.post("/items/invoice_details", this.formData);
      console.log(response);
    },
    async fetchInvoices() {
      let params = {};
      if (this.invoiceSearchText) {
        params.filter = {
          invoice_name: {
            _starts_with: this.invoiceSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/invoices", { params });
      this.invoiceList = response.data.data;
    },
    async fetchItem() {
      let params = {};
      if (this.itemSearchText) {
        params.filter = {
          item_name: {
            _starts_with: this.itemSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/items", { params });
      this.itemList = response.data.data;
    },
  },
  created() {
    this.fetchInvoices();
    this.fetchItem();
  },
};
</script>
