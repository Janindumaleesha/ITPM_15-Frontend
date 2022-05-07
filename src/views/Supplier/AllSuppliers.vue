<template>
  <section>
    <b-field class="container">
      <h2>All Suppliers</h2>
      <b-input
        style="margin-left: 55%; margin-right: 10px"
        placeholder="Search..."
        type="search"
        icon="magnify"
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
          <h2 style="margin-top: 20px; margin-left: 20px">New Supplier</h2>

          <b-field horizontal label="Supplier ID">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Supplier ID"
              v-model="supplier.sup_id"
              pattern="SUP[0-9]{3}"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Primary Contact">
            <b-select
              style="width: 400px"
              placeholder="Salutation"
              v-model="supplier.salutation"
              required
              expanded
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss.">Miss.</option>
            </b-select>
          </b-field>

          <b-field horizontal label="">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="First Name"
              v-model="supplier.first_Name"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Last Name"
              v-model="supplier.last_Name"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Company Name">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Company Name"
              v-model="supplier.company_Name"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Supplier Email">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Supplier Email"
              v-model="supplier.supplier_Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Supplier Phone">
            <b-input
              style="width: 180px"
              name="name"
              placeholder="Work Phone"
              v-model="supplier.supplier_Work_Phone"
              pattern="[0-9]{10}"
              required
              expanded
            ></b-input>

            <b-input
              style="width: 180px; margin-right: 340px"
              name="name"
              placeholder="Mobile"
              v-model="supplier.supplier_Mobile_Phone"
              pattern="[0-9]{10}"
              required
              expanded
            ></b-input>
          </b-field>

          <b-tabs v-model="activeTab">
            <b-tab-item label="Other Details">
              <b-field horizontal label="Facebook">
                <b-input
                  style="width: 400px"
                  name="name"
                  placeholder=""
                  v-model="supplier.facebook"
                  required
                  expanded
                ></b-input>
              </b-field>

              <b-field horizontal label="Twitter">
                <b-input
                  style="width: 400px"
                  name="name"
                  placeholder=""
                  v-model="supplier.twitter"
                  required
                  expanded
                ></b-input>
              </b-field>
            </b-tab-item>

            <b-tab-item label="Address">
              <h6 style="position: absolute; margin-left: 500px">
                <b><i>SHIPPING ADDRESS</i></b>
              </h6>
              <h6 style="margin-left: 80px">
                <b><i>BILLING ADDRESS</i></b>
              </h6>

              <b-field horizontal label="Country">
                <b-select
                  style="width: 200px"
                  placeholder="Country"
                  v-model="supplier.billing_address_country"
                  required
                  expanded
                >
                  <option value="1">Sri Lanka</option>
                  <option value="2">India</option>
                  <option value="3">Japan</option>
                </b-select>

                <b-field horizontal label="Country">
                  <b-select
                    style="width: 200px"
                    placeholder="Country"
                    v-model="supplier.shipping_address_country"
                    required
                    expanded
                  >
                    <option value="1">Sri Lanka</option>
                    <option value="2">India</option>
                    <option value="3">Japan</option>
                  </b-select>
                </b-field>
              </b-field>

              <b-field style="" horizontal label="Address">
                <b-input
                  style="width: 200px"
                  maxlength="200"
                  type="textarea"
                  v-model="supplier.billing_address_address"
                  required
                ></b-input>

                <b-field style="" horizontal label="Address">
                  <b-input
                    style="width: 200px"
                    maxlength="200"
                    type="textarea"
                    v-model="supplier.shipping_address_address"
                    required
                  ></b-input>
                </b-field>
              </b-field>

              <b-field horizontal label="City">
                <b-input
                  style="width: 200px"
                  name="name"
                  placeholder="City"
                  v-model="supplier.billing_address_city"
                  required
                  expanded
                ></b-input>

                <b-field horizontal label="City">
                  <b-input
                    style="width: 200px; margin-right: 35px"
                    name="name"
                    placeholder="City"
                    v-model="supplier.shipping_address_city"
                    required
                    expanded
                  ></b-input>
                </b-field>
              </b-field>
            </b-tab-item>
          </b-tabs>

          <b-field
            style="margin-top: 20px; margin-left: 50px; margin-bottom: 20px"
          >
            <b-button
              type="is-info"
              href="http://localhost:8081/allsuppliers"
              @click="addSupplier"
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
            <th>SUPPLIER ID</th>
            <th>SALUTATION</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>COMPANY NAME</th>
            <th>SUPPLIER EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>VIEW</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
          <tr v-for="sup in suppliers" :key="sup.index">
            <td>{{ sup.sup_id }}</td>
            <td>{{ sup.salutation }}</td>
            <td>{{ sup.first_Name }}</td>
            <td>{{ sup.last_Name }}</td>
            <td>{{ sup.company_Name }}</td>
            <td>{{ sup.supplier_Email }}</td>
            <td>{{ sup.supplier_Work_Phone }}</td>
            <td style="text-align: center">
              <b-button @click="viewSupplier(sup._id)" type="is-info">View</b-button>
            </td>
            <td style="text-align: center">
              <b-button @click="displayUpdateModel(sup._id)" type="is-info">Update</b-button>
            </td>
            <td style="text-align: center">
              <b-button @click="confirmCustomDelete(sup._id)" type="is-danger" icon-right="delete" />
            </td>
          </tr>
        </b-table>
      </b-tab-item>

      <!-- View Supplier -->
       <b-modal v-model="View">
        <b-tabs>
        <p>{{ supplier.first_Name }}'s supplier</p>
        <b-tab-item id="customers" label="Table">
          <b-table>
            <tr>
              <th>LABEL</th>
              <th>DETAILS</th>
            </tr>
            <tr>
              <td>Supplier ID</td>
              <td>{{ supplier.sup_id }}</td><br>
            </tr> 
           <tr>
              <td>Salutation</td>
              <td>{{ supplier.salutation }}</td><br>
            </tr> 
            <tr>
              <td>First Name</td>
              <td>{{ supplier.first_Name }}</td><br>
            </tr> 
            <tr>
              <td>Last Name</td>
              <td>{{ supplier.last_Name }}</td><br>
            </tr> 
            <tr>
              <td>Company Name</td>
              <td>{{ supplier.company_Name }}</td><br>
            </tr> 
            <tr>
              <td>Supplier Email</td>
              <td>{{ supplier.supplier_Email }}</td><br>
            </tr> 
            <tr>
              <td>Supplier Work Phone</td>
              <td>{{ supplier.supplier_Work_Phone }}</td><br>
            </tr> 
            <tr>
              <td>Supplier Mobile Phone</td>
              <td>{{ supplier.supplier_Mobile_Phone }}</td><br>
            </tr> 
            <tr>
              <td>Facebook</td>
              <td>{{ supplier.facebook }}</td><br>
            </tr> 
            <tr>
              <td>Twitter</td>
              <td>{{ supplier.twitter }}</td><br>
            </tr> 
            <tr>
              <td>Billing Country</td>
              <td>{{ supplier.billing_address_country }}</td><br>
            </tr> 
            <tr>
              <td>Billing Address </td>
              <td>{{ supplier.billing_address_address }}</td><br>
            </tr> 
            <tr>
              <td>Billing City</td>
              <td>{{ supplier.billing_address_city }}</td><br>
            </tr> 
            <tr>
              <td>Shipping Country</td>
              <td>{{ supplier.shipping_address_country }}</td><br>
            </tr> 
            <tr>
              <td>Shipping Address</td>
              <td>{{ supplier.shipping_address_address }}</td><br>
            </tr> 
            <tr>
              <td>Shipping City</td>
              <td>{{ supplier.shipping_address_city }}</td><br>
            </tr>  
          </b-table>
        </b-tab-item>
        </b-tabs>    
      </b-modal>

      <!-- Update Supplier -->
      <b-modal v-model="Update">
        <template>
          <section>
            <h2 style="margin-top: 20px; margin-left: 20px">New Supplier</h2>

            <b-field horizontal label="Supplier ID">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Supplier ID"
                v-model="supplier.sup_id"
                pattern="SUP[0-9]{3}"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Primary Contact">
              <b-select
                style="width: 400px"
                placeholder="Salutation"
                v-model="supplier.salutation"
                required
                expanded
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
              </b-select>
            </b-field>

            <b-field horizontal label="">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="First Name"
                v-model="supplier.first_Name"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Last Name"
                v-model="supplier.last_Name"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Company Name">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Company Name"
                v-model="supplier.company_Name"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Supplier Email">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Supplier Email"
                v-model="supplier.supplier_Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Supplier Phone">
              <b-input
                style="width: 180px"
                name="name"
                placeholder="Work Phone"
                v-model="supplier.supplier_Work_Phone"
                pattern="[0-9]{10}"
                required
                expanded
              ></b-input>

              <b-input
                style="width: 180px; margin-right: 340px"
                name="name"
                placeholder="Mobile"
                v-model="supplier.supplier_Mobile_Phone"
                pattern="[0-9]{10}"
                required
                expanded
              ></b-input>
            </b-field>

            <b-tabs v-model="activeTab">
              <b-tab-item label="Other Details">
                <b-field horizontal label="Facebook">
                  <b-input
                    style="width: 400px"
                    name="name"
                    placeholder=""
                    v-model="supplier.facebook"
                    required
                    expanded
                  ></b-input>
                </b-field>

                <b-field horizontal label="Twitter">
                  <b-input
                    style="width: 400px"
                    name="name"
                    placeholder=""
                    v-model="supplier.twitter"
                    required
                    expanded
                  ></b-input>
                </b-field>
              </b-tab-item>

              <b-tab-item label="Address">
                <h6 style="position: absolute; margin-left: 500px">
                  <b><i>SHIPPING ADDRESS</i></b>
                </h6>
                <h6 style="margin-left: 80px">
                  <b><i>BILLING ADDRESS</i></b>
                </h6>

                <b-field horizontal label="Country">
                  <b-select
                    style="width: 200px"
                    placeholder="Country"
                    v-model="supplier.billing_address_country"
                    required
                    expanded
                  >
                    <option value="1">Sri Lanka</option>
                    <option value="2">India</option>
                    <option value="3">Japan</option>
                  </b-select>

                  <b-field horizontal label="Country">
                    <b-select
                      style="width: 200px"
                      placeholder="Country"
                      v-model="supplier.shipping_address_country"
                      required
                      expanded
                    >
                      <option value="1">Sri Lanka</option>
                      <option value="2">India</option>
                      <option value="3">Japan</option>
                    </b-select>
                  </b-field>
                </b-field>

                <b-field style="" horizontal label="Address">
                  <b-input
                    style="width: 200px"
                    maxlength="200"
                    type="textarea"
                    v-model="supplier.billing_address_address"
                    required
                  ></b-input>

                  <b-field style="" horizontal label="Address">
                    <b-input
                      style="width: 200px"
                      maxlength="200"
                      type="textarea"
                      v-model="supplier.shipping_address_address"
                      required
                    ></b-input>
                  </b-field>
                </b-field>

                <b-field horizontal label="City">
                  <b-input
                    style="width: 200px"
                    name="name"
                    placeholder="City"
                    v-model="supplier.billing_address_city"
                    required
                    expanded
                  ></b-input>

                  <b-field horizontal label="City">
                    <b-input
                      style="width: 200px; margin-right: 35px"
                      name="name"
                      placeholder="City"
                      v-model="supplier.shipping_address_city"
                      required
                      expanded
                    ></b-input>
                  </b-field>
                </b-field>
              </b-tab-item>
            </b-tabs>

            <b-field
              style="margin-top: 20px; margin-left: 50px; margin-bottom: 20px"
            >
              <b-button
                type="is-info"
                @click="updateSupplier"
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
import SupplierServices from "../../services/supplierServices";
import Download from "../Supplier/GenerateReport.vue";

export default {
  components: {
    Download,
  },
  data() {
    return {
      isImageModalActive: false,
      Update: false,
      View: false,
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
    async addSupplier() {
      try {
        this.supplier = await SupplierServices.addSupplier(this.supplier);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async viewSupplier(id) {
      this.View = true;
      this.id = id;
      const response = await SupplierServices.getSupplierById(id)
      this.supplier = response.data;
      console.log(response.data)
    },
    async updateSupplier() {
      try{
        const response = await SupplierServices.updateSupplier(this.supplier);
        console.log(response.data)
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
      const response = await SupplierServices.getSupplierById(id);
      this.supplier = response.data;
      console.log(response.data)
    },
    async deleteSupplier(id) {
      try {
        this.id = await SupplierServices.deleteSupplier(id);
        this.getAll();
      } catch (err) {
        console.log(err);
      }
    },
    confirmCustomDelete(id) {
      this.$buefy.dialog.confirm({
        title: "Deleting supplier",
        message:
          "Are you sure you want to <b>delete</b> this supplier? This action cannot be undone.",
        confirmText: "Delete Supplier",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.deleteSupplier(id)
        
      });
    },
    printDownload () {
      let w = window.open()
      w.document.write(this.$refs.DownloadComp.$el.innerHTML)
      w.document.close()
      w.setTimeout(function () {
      w.print()
      }, 1000)
    }
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

