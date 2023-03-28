<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Accounts",
    caption: "",
    icon: "",
    link: "/accounts/",
  },
  {
    title: "Items",
    caption: "",
    icon: "",
    link: "/items/",
  },
  {
    title: "Bank",
    caption: "",
    icon: "",
    link: "/banks/",
  },
  {
    title: "Organisation",
    caption: "",
    icon: "",
    link: "/organisation/",
  },
  {
    title: "contact",
    caption: "",
    icon: "",
    link: "/contacts/",
  },
  {
    title: "Contracts",
    caption: "",
    icon: "",
    link: "/contracts/",
  },
  {
    title: "Vehicle Type",
    caption: "",
    icon: "",
    link: "/vehicle_type/",
  },
  {
    title: "Vehicle",
    caption: "",
    icon: "",
    link: "/vehicles/",
  },
  {
    title: "Invoices",
    caption: "",
    icon: "",
    link: "/invoices/",
  },
  {
    title: "Driver",
    caption: "",
    icon: "",
    link: "/driver/",
  },
  {
    title: "Log Book",
    caption: "",
    icon: "",
    link: "/log_book/",
  },
  {
    title: "Invoice Details",
    caption: "",
    icon: "",
    link: "/invoice_details/",
  },
  {
    title: "Document Sequence",
    caption: "",
    icon: "",
    link: "/document_sequence/",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
