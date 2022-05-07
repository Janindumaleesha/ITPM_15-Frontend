<template>
  <v-container>
    <b-field class="container">
      <h2>All Invoices</h2>
      <table>
        <tr>
          <th>CUSTOMER ID</th>
          <th>CUSTOMER TYPE</th>
          <th>SALUTATION</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>COMPANY NAME</th>
          <th>CUSTOMER EMAIL</th>
          <th>CUSTOMER WORK PHONE</th>
          <th>CUSTOMER MOBILE PHONE</th>
        </tr>
        <tr v-for="cus in customers" :key="cus.index">
          <td>{{ cus.cus_id }}</td>
          <td>{{ cus.customer_type }}</td>
          <td>{{ cus.salutation }}</td>
          <td>{{ cus.first_Name }}</td>
          <td>{{ cus.last_Name }}</td>
          <td>{{ cus.company_Name }}</td>
          <td>{{ cus.customer_Email }}</td>
          <td>{{ cus.customer_Work_Phone }}</td>
          <td>{{ cus.customer_Mobile_Phone }}</td>
        </tr>
      </table>
    </b-field>
  </v-container>
</template>

<script>
import CustomerServices from "../../services/customerServices";

export default {
  data() {
    return {
      activeTab: 0,
      showBooks: false,
      customer: {
        cus_id: "",
        customer_type: "",
        salutation: "",
        first_Name: "",
        last_Name: "",
        company_Name: "",
        customer_Email: "",
        customer_Work_Phone: "",
        customer_Mobile_Phone: "",
        facebook: "",
        twitter: "",
        billing_address_country: "",
        billing_address_address: "",
        billing_address_city: "",
        shipping_address_country: "",
        shipping_address_address: "",
        shipping_address_city: "",
      },
      customers: [],
      cus: "",
      id: "",
    };
  },
  methods: {
    async getAll() {
      try {
        const response = await CustomerServices.getAllCustomers();
        this.customers = response.data;
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>