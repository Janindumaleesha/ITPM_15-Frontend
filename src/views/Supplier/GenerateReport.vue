<template>
  <section>
    <b-field class="container">
      <h2>All Suppliers</h2>
      <table>
        <tr>
          <th>SUPPLIER ID</th>
          <th>SALUTATION</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>COMPANY NAME</th>
          <th>SUPPLIER EMAIL</th>
          <th>PHONE NUMBER</th>
        </tr>

        <tr v-for="sup in suppliers" :key="sup.index">
          <td>{{ sup.sup_id }}</td>
          <td>{{ sup.salutation }}</td>
          <td>{{ sup.first_Name }}</td>
          <td>{{ sup.last_Name }}</td>
          <td>{{ sup.company_Name }}</td>
          <td>{{ sup.supplier_Email }}</td>
          <td>{{ sup.supplier_Work_Phone }}</td>
        </tr>
      </table>
    </b-field>
  </section>
</template>

<script>
import SupplierServices from "../../services/supplierServices";

export default {
  data() {
    return {
      activeTab: 0,
      showBooks: false,
      supplier: {
        sup_id: "",
        salutation: "",
        first_Name: "",
        last_Name: "",
        company_Name: "",
        supplier_Email: "",
        supplier_Work_Phone: "",
        supplier_Mobile_Phone: "",
        facebook: "",
        twitter: "",
        billing_address_country: "",
        billing_address_address: "",
        billing_address_city: "",
        shipping_address_country: "",
        shipping_address_address: "",
        shipping_address_city: "",
      },
      suppliers: [],
      sup: "",
      id: "",
    };
  },
  methods: {
    async getAll() {
      try {
        const response = await SupplierServices.getAllSuppliers();
        this.suppliers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted: function () {
    this.getAll();
  },
};
</script>


<style>
</style>

