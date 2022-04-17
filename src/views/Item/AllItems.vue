<template>
    <section>
        <b-field class="container">
            <h2>All Items</h2>
            <b-input style="margin-left:60%;margin-right:10px;" placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
            <b-button type="is-info" @click="isImageModalActive = true">+ New</b-button>
        </b-field>

        <b-modal v-model="isImageModalActive">
            <template>
                <section>
                    <h2 style="margin-top:20px;margin-left:20px;">New Item</h2>            

                    <b-field horizontal label="Item Code">
                        <b-input style="width:400px;" name="name" placeholder="Item Code" v-model="item.item_code" pattern="ITC[0-9]{3}" required expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Item Name">
                        <b-input style="width:400px;" name="name" placeholder="Item Name" v-model="item.item_name" required expanded></b-input>
                    </b-field>

                     <b-field horizontal label="Category">
                        <b-select style="width:400px;" placeholder="Category" v-model="item.category" required expanded>
                            <option value="Wood">Wood</option>
                            <option value="Iron">Iron</option>
                            <option value="Raw Material">Raw Material</option>
                        </b-select>
                    </b-field>

                    <b-field horizontal label="Quantity">
                        <b-input style="width:400px;" name="name" placeholder="Quantity" v-model="item.qty" required expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Unit Price">
                        <b-input style="width:400px;" name="name" placeholder="Unit Price" v-model="item.unit_price" required expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Collected Date">
                        <b-datepicker
                            style="width: 400px"
                            v-model="item.collected_date"
                            :show-week-number="showWeekNumber"
                            :locale="locale"
                            placeholder="Click to select..."
                            icon="calendar-today"
                            :icon-right="selected ? 'close-circle' : ''"
                            icon-right-clickable
                            @icon-right-click="clearDate"
                            trap-focus
                        >
                        </b-datepicker>
                    </b-field>

                    <b-field style="margin-top:20px;margin-left:50px;margin-bottom:20px;">
                        <b-button type="is-info" href="http://localhost:8081/allitems" @click="addItem">Save</b-button>
                        <b-button style="margin-left:10px;" type="is-info is-light">Cancel</b-button>
                    </b-field>
  
                </section>
            </template>
        </b-modal>

        <b-tabs>
            <b-tab-item id="customers" label="Table">
                <b-table >
                        <tr>
                            <th>ITEM NAME</th>
                            <th>ITEM CODE</th>
                            <th>CATEGORY</th>
                            <th>QUANTITY</th>
                            <th>UNIT PRICE</th>
                            <th>COLLECTED DATE</th>
                            <th>VIEW</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                        <tr v-for="ite in items" :key="ite.index">
                            <td>{{ ite.item_code }}</td>
                            <td>{{ ite.item_name }}</td>
                            <td>{{ ite.category }}</td>
                            <td>{{ ite.qty }}</td>
                            <td>{{ ite.unit_price }}</td>
                            <td>{{ ite.collected_date }}</td>
                            <td style="text-align:center;"><b-button type="is-info">View</b-button></td>
                            <td style="text-align:center;"><b-button type="is-info">Update</b-button></td>
                            <td style="text-align:center;"><b-button type="is-danger" icon-right="delete" /></td>
                        </tr>
                        
                </b-table>
            </b-tab-item>

            <b-tab-item label="Selected">
                <pre>{{ selected }}</pre>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
import ItemServices from "../../services/itemServices";
export default {
  data() {
    return {
      isImageModalActive: false,
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
      id: ""
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
    async addItem() {
      try {
        console.log(this.item);  
        this.item = await ItemServices.addItem(this.item);
        this.$router.push("/");
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
    #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #customers td, #customers th {
        width:800px;  
        border: 1px solid #ddd;
        padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}

    #customers tr:hover {background-color: #ddd;}

    #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #04AA6D;
        color: white;
    }
</style>
