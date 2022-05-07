<template>
  <v-container>
    <b-field class="container">
      <h2>All Invoices</h2>
      <table>
        <tr>
          <th>ITEM CODE</th>
          <th>ITEM NAME</th>
          <th>CATEGORY</th>
          <th>QUANTITY</th>
          <th>UNIT PRICE</th>
          <th>COLLECTED DATE</th>
        </tr>
        <tr v-for="ite in items" :key="ite.index">
          <td>{{ ite.item_code }}</td>
          <td>{{ ite.item_name }}</td>
          <td>{{ ite.category }}</td>
          <td>{{ ite.qty }}</td>
          <td>{{ ite.unit_price }}</td>
          <td>{{ ite.collected_date }}</td>
        </tr>
      </table>
    </b-field>
  </v-container>
</template>

<script>
import ItemServices from "../../services/itemServices";

export default {
  data() {
    return {
      item: {
        item_code: "",
        item_name: "",
        category: "",
        qty: "",
        unit_price: "",
        collected_date: "",
      },
      items: [],
      ite: "",
      id: "",
    };
  },
  methods: {
    async getAll() {
      try {
        const response = await ItemServices.getAllItems();
        this.items = response.data;
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