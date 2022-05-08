<template>
  <section>
    <b-field class="container">
      <h2>All Items</h2>
      <b-input
        style="margin-left: 50%; margin-right: 10px"
        placeholder="Search..."
        type="search"
        icon="magnify"
        name="item"
        v-model="search"
        icon-clickable
        @icon-click="searchIconClick"
      >
      </b-input>
      <b-button type="is-info" style="margin-right: 10px" @click="isImageModalActive = true"
        >+ New</b-button
      >

      <b-button type="is-info is-light" icon-right="download" @click="printDownload"/>
      <Download v-show="false" ref="DownloadComp" />
    </b-field>

    <b-modal v-model="isImageModalActive">
      <template>
        <section>
          <h2 style="margin-top: 20px; margin-left: 20px">New Item</h2>

          <b-field horizontal label="Item Code">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Item Code"
              v-model="item.item_code"
              pattern="ITC[0-9]{3}"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Item Name">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Item Name"
              v-model="item.item_name"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Category">
            <b-select
              style="width: 400px"
              placeholder="Category"
              v-model="item.category"
              required
              expanded
            >
              <option value="Wood">Wood</option>
              <option value="Iron">Iron</option>
              <option value="Raw Material">Raw Material</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Quantity">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Quantity"
              v-model="item.qty"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Unit Price">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Unit Price"
              v-model="item.unit_price"
              required
              expanded
            ></b-input>
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

          <b-field
            style="margin-top: 20px; margin-left: 50px; margin-bottom: 20px"
          >
            <b-button
              type="is-info"
              href="http://localhost:8081/allitems"
              @click="addItem"
              >Save</b-button
            >
            <b-button style="margin-left: 10px" type="is-info is-light"
              >Cancel</b-button
            >
          </b-field>
        </section>
      </template>
    </b-modal>

    <b-tabs>
      <b-tab-item id="customers" label="Table">
        <b-table>
          <tr>
            <th>ITEM CODE</th>
            <th>ITEM NAME</th>
            <th>CATEGORY</th>
            <th>QUANTITY</th>
            <th>UNIT PRICE</th>
            <th>COLLECTED DATE</th>
            <th>VIEW</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
          <tr v-for="ite in filteredItems" :key="ite.index">
            <td>{{ ite.item_code | to-uppercase }}</td>
            <td>{{ ite.item_name }}</td>
            <td>{{ ite.category }}</td>
            <td>{{ ite.qty }}</td>
            <td>{{ ite.unit_price }}</td>
            <td>{{ ite.collected_date }}</td>
            <td style="text-align: center">
              <b-button @click="viewItem(ite._id)" type="is-info">View</b-button>
            </td>
            <td style="text-align: center">
              <b-button @click="displayUpdateModel(ite._id)" type="is-info"
                >Update</b-button
              >
            </td>
            <td style="text-align: center">
              <b-button @click="confirmCustomDelete(ite._id)" type="is-danger" icon-right="delete" />
            </td>
          </tr>
        </b-table>
      </b-tab-item>

      <!-- View Item -->
      <b-modal v-model="View">
        <b-tabs>
          <p>{{ item.item_name }}'s item</p>
          <b-tab-item id="customers" label="Table">
            <b-table>
              <tr>
                <th>LABEL</th>
                <th>DETAILS</th>
              </tr>
              <tr>
                <td>Item Code</td>
                <td>{{ item.item_code }}</td>
                <br />
              </tr>
              <tr>
                <td>Item Name</td>
                <td>{{ item.item_name }}</td>
                <br />
              </tr>
              <tr>
                <td>Category</td>
                <td>{{ item.category }}</td>
                <br />
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{{ item.qty }}</td>
                <br />
              </tr>
              <tr>
                <td>Unit Price</td>
                <td>{{ item.unit_price }}</td>
                <br />
              </tr>
              <tr>
                <td>Collected Date</td>
                <td>{{ item.collected_date }}</td>
                <br />
              </tr>
            </b-table> 
          </b-tab-item>
        </b-tabs>
      </b-modal>

      <!-- Update Item -->
      <b-modal v-model="Update">
        <template>
          <section>
            <h2 style="margin-top: 20px; margin-left: 20px">New Item</h2>

            <b-field horizontal label="Item Code">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Item Code"
                v-model="item.item_code"
                pattern="ITC[0-9]{3}"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Item Name">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Item Name"
                v-model="item.item_name"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Category">
              <b-select
                style="width: 400px"
                placeholder="Category"
                v-model="item.category"
                required
                expanded
              >
                <option value="Wood">Wood</option>
                <option value="Iron">Iron</option>
                <option value="Raw Material">Raw Material</option>
              </b-select>
            </b-field>

            <b-field horizontal label="Quantity">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Quantity"
                v-model="item.qty"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Unit Price">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Unit Price"
                v-model="item.unit_price"
                required
                expanded
              ></b-input>
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

            <b-field
              style="margin-top: 20px; margin-left: 50px; margin-bottom: 20px"
            >
              <b-button
                type="is-info"
                @click="updateItem"
                >Update</b-button
              >
              <b-button style="margin-left: 10px" type="is-info is-light"
                >Cancel</b-button
              >
            </b-field>
          </section>
        </template>
      </b-modal>
    </b-tabs>
  </section>
</template>

<script>
import ItemServices from "../../services/itemServices";
import Download from "../Item/GenerateReport.vue";

export default {
  components: {
    Download,
  },  
  data() {
    return {
      isImageModalActive: false,
      Update: false,
      View: false,
      item: {
        item_code: "",
        item_name: "",
        category: "",
        qty: "",
        unit_price: "",
        collected_date: "",
      },
      search:"",
      items: [],
      ite: "",
      id: "",
    };
  },
  computed:{
    filteredItems:function(){
      return this.items.filter((ite) => {
        return ite.item_code.match(this.search)
      });
    }
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
    async updateItem() {
      try{
        const response = await ItemServices.updateItem(this.item)
        console.log(response.data)
        alert('Updated Successfully!')
        if(response.data) {
          this.$buefy.toast.open({
                    message: 'Something happened correctly!',
                    type: 'is-success'
                })
          this.update = false;
          setTimeout(() =>{
            this.$router.go() 
          },1000)
          
        }else{
          console.log();
        }

      }catch(err){
        console.log(err);
      }
    },
    async displayUpdateModel(id) {
      this.Update = true;
      this.id = id;
      const response = await ItemServices.getItemById(id);
      this.item = response.data;
      console.log(response.data);
    },
    async viewItem(id) {
      this.View = true;
      this.id = id;
      const response = await ItemServices.getItemById(id)
      this.item = response.data;
      console.log(response.data)
    },
    async deleteItem(id) {
      try {
        this.id = await ItemServices.deleteItem(id)
        this.getAll();
      } catch (err) {
        console.log(err);
      }
    },
    confirmCustomDelete(id) {
      this.$buefy.dialog.confirm({
        title: "Deleting Item",
        message:
          "Are you sure you want to <b>delete</b> this item? This action cannot be undone.",
        confirmText: "Delete Item",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.deleteItem(id)
        
      });
    },
    printDownload () {
      let w = window.open()
      w.document.write(this.$refs.DownloadComp.$el.innerHTML)
      w.document.close()
      w.setTimeout(function () {
      w.print()
      }, 1000)
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

#customers td,
#customers th {
  width: 800px;
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
}
</style>
