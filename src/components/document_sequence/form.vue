<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none">Document Sequence</h6>
    </div>
    <q-form class="q-my-md">
      <q-input dense label="ID" outlined v-model="formData.id" />
      <br />
      <q-input
        dense
        label="date_Created"
        type="date"
        outlined
        v-model="formData.date_created"
      />
      <br />
      <q-select
        dense
        label="Organisation ID"
        @filter="
          (val, done) => {
            organisationSearchText = val;
            done();
          }
        "
        outlined
        v-model="formData.organisation_id"
        :options="organisationList"
        map-option
        option-label="organisation_name"
        option-value="id"
        emit-value
        use-input
      />
      <br />
      <q-input dense label="Document_type" outlined v-model="formData.document_type" />
      <br />
      <q-input dense label="Sequence_no" outlined v-model="formData.sequence_no" />
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
      organisationSearchText: "",
      organisationList: [],
    };
  },
  watch: {
    organisationSearchText(val) {
      this.fetchorganisation();
    },
  },
  methods: {
    async submitData() {
      let response = await this.$api.post("/items/document_sequence", this.formData);
      console.log(response);
    },
    async fetchOrganisation() {
      let params = {};
      if (this.organisationSearchText) {
        params.filter = {
          organisation_name: {
            _starts_with: this.organisationSearchText,
          },
        };
      }
      let response = await this.$api.get("/items/organisation", { params });
      this.organisationList = response.data.data;
    },
  },
  created() {
    this.fetchOrganisation();
  },
};
</script>
