<template>
  <v-container>
    <b-field class="container">
      <h2>All Invoices</h2>
      <table>
        <tr>
          <th>DATE</th>
          <th>INVOICE ID</th>
          <th>CUSTOMER NAME</th>
          <th>DUE DATE</th>
          <th>AMOUNT</th>
        </tr>
        <tr v-for="inv in invoices" :key="inv.index">
          <td>{{ inv.invoice_date }}</td>
          <td>{{ inv.invoice_id }}</td>
          <td>{{ inv.cus_name }}</td>
          <td>{{ inv.due_date }}</td>
          <td>{{ inv.total_amount }}</td>
        </tr>
      </table>
    </b-field>
  </v-container>
</template>

<script>
import InvoiceServices from "../../services/invoiceServices";

export default {
  data() {
    return {
      invoice: {
        cus_name: "",
        invoice_id: "",
        invoice_date: "",
        sales_person: "",
        terms: "",
        due_date: "",
        item_details: "",
        quantity: "",
        rate: "",
        discount: "",
        amount: "",
        customer_notes: "",
        shipping_charges: "",
        total_amount: "",
        payment_date: "",
        payment_mode: "",
        deposit_to: "",
        reference: "",
      },
      invoices: {},
      inv: "",
      id: "",
    };
  },
  methods: {
    async getAll() {
      try {
        const response = await InvoiceServices.getAllInvoices();
        this.invoices = response.data;
        console.log(this.invoices);
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted: function () {
    this.getAll();
    this.update();
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






        

