<template>
  <section>
    <b-field class="container">
      <h2>All Customers</h2>
      <b-input
        style="margin-left: 50%; margin-right: 10px"
        placeholder="Search..."
        type="search"
        icon="magnify"
        icon-clickable
        v-model="search"
        @icon-click="searchIconClick"
      >
      </b-input>
      <b-button type="is-info" @click="isImageModalActive = true" style="margin-right: 10px"
        >+ New</b-button
      >
      <b-button type="is-info is-light" icon-right="download" @click="printDownload"/>
      <Download v-show="false" ref="DownloadComp" />
    </b-field>

    <b-modal v-model="isImageModalActive">
      <template>
        <section>
          <h2 style="margin-top: 20px; margin-left: 20px">New Customer</h2>

          <b-field horizontal label="Customer ID">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Customer ID"
              v-model="customer.cus_id"
              pattern="CUS[0-9]{3}"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Customer Type">
            <b-select
              style="width: 400px"
              placeholder="Customer Type"
              v-model="customer.customer_type"
              required
              expanded
            >
              <option value="Business">Business</option>
              <option value="Individual">Individual</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Primary Contact">
            <b-select
              style="width: 400px"
              placeholder="Salutation"
              v-model="customer.salutation"
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
              v-model="customer.first_Name"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Last Name"
              v-model="customer.last_Name"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Company Name">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Company Name"
              v-model="customer.company_Name"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Customer Email">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Customer Email"
              v-model="customer.customer_Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Customer Phone">
            <b-input
              style="width: 180px"
              name="name"
              placeholder="Work"
              v-model="customer.customer_Work_Phone"
              pattern="[0-9]{10}"
              required
              expanded
            ></b-input>
            <b-input
              style="width: 180px; margin-right: 340px"
              name="name"
              placeholder="Mobile"
              v-model="customer.customer_Mobile_Phone"
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
                  v-model="customer.facebook"
                  required
                  expanded
                ></b-input>
              </b-field>

              <b-field horizontal label="Twitter">
                <b-input
                  style="width: 400px"
                  name="name"
                  placeholder=""
                  v-model="customer.twitter"
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
                  v-model="customer.billing_address_country"
                  required
                  expanded
                >
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="India">India</option>
                  <option value="Japan">Japan</option>
                </b-select>

                <b-field horizontal label="Country">
                  <b-select
                    style="width: 200px"
                    placeholder="Country"
                    v-model="customer.shipping_address_country"
                    required
                    expanded
                  >
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                  </b-select>
                </b-field>
              </b-field>

              <b-field style="" horizontal label="Address">
                <b-input
                  style="width: 200px"
                  maxlength="200"
                  type="textarea"
                  v-model="customer.billing_address_address"
                  required
                ></b-input>

                <b-field style="" horizontal label="Address">
                  <b-input
                    style="width: 200px"
                    maxlength="200"
                    type="textarea"
                    v-model="customer.shipping_address_address"
                    required
                  ></b-input>
                </b-field>
              </b-field>

              <b-field horizontal label="City">
                <b-input
                  style="width: 200px"
                  name="name"
                  placeholder="City"
                  v-model="customer.billing_address_city"
                  required
                  expanded
                ></b-input>

                <b-field horizontal label="City">
                  <b-input
                    style="width: 200px; margin-right: 35px"
                    name="name"
                    placeholder="City"
                    v-model="customer.shipping_address_city"
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
              href="http://localhost:8081/allcustomers"
              @click="addCustomer"
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
            <th>CUSTOMER ID</th>
            <th>CUSTOMER TYPE</th>
            <th>SALUTATION</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>COMPANY NAME</th>
            <th>CUSTOMER EMAIL</th>
            <th>CUSTOMER WORK PHONE</th>
            <th>CUSTOMER MOBILE PHONE</th>
            <th>VIEW</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
          <tr v-for="cus in filteredCustomer" :key="cus.index">
            <td>{{ cus.cus_id | to-uppercase }}</td>
            <td>{{ cus.customer_type }}</td>
            <td>{{ cus.salutation }}</td>
            <td>{{ cus.first_Name }}</td>
            <td>{{ cus.last_Name }}</td>
            <td>{{ cus.company_Name }}</td>
            <td>{{ cus.customer_Email }}</td>
            <td>{{ cus.customer_Work_Phone }}</td>
            <td>{{ cus.customer_Mobile_Phone }}</td>
            <td style="text-align: center">
              <b-button @click="viewInvoice(cus._id)" type="is-info">View</b-button>
            </td>
            <td style="text-align: center">
              <b-button @click="displayUpdateModel(cus._id)" type="is-info">Update</b-button>
            </td>
            <td style="text-align: center">
              <b-button @click="confirmCustomDelete(cus._id)" type="is-danger" icon-right="delete" />
            </td>
          </tr>
        </b-table>
      </b-tab-item>

      <!-- View Customer -->
      <b-modal v-model="View">
        <b-tabs>
        <p>{{ customer.first_Name }}'s customer</p>
        <b-tab-item id="customers" label="Table">
          <b-table>
            <tr>
              <th>LABEL</th>
              <th>DETAILS</th>
            </tr>
            <tr>
              <td>Customer ID</td>
              <td>{{ customer.cus_id }}</td><br>
            </tr> 
            <tr>
              <td>Customer Type</td>
              <td>{{ customer.customer_type }}</td><br>
            </tr> 
            <tr>
              <td>Salutation</td>
              <td>{{ customer.salutation }}</td><br>
            </tr> 
            <tr>
              <td>First Name</td>
              <td>{{ customer.first_Name }}</td><br>
            </tr> 
            <tr>
              <td>Last Name</td>
              <td>{{ customer.last_Name }}</td><br>
            </tr> 
            <tr>
              <td>Company Name</td>
              <td>{{ customer.company_Name }}</td><br>
            </tr> 
            <tr>
              <td>Customer Email</td>
              <td>{{ customer.customer_Email }}</td><br>
            </tr> 
            <tr>
              <td>Customer Work Phone</td>
              <td>{{ customer.customer_Work_Phone }}</td><br>
            </tr> 
            <tr>
              <td>Customer Mobile Phone</td>
              <td>{{ customer.customer_Mobile_Phone }}</td><br>
            </tr> 
            <tr>
              <td>Facebook</td>
              <td>{{ customer.facebook }}</td><br>
            </tr> 
            <tr>
              <td>Twitter</td>
              <td>{{ customer.twitter }}</td><br>
            </tr> 
            <tr>
              <td>Billing Country</td>
              <td>{{ customer.billing_address_country }}</td><br>
            </tr> 
            <tr>
              <td>Billing Address </td>
              <td>{{ customer.billing_address_address }}</td><br>
            </tr> 
            <tr>
              <td>Billing City</td>
              <td>{{ customer.billing_address_city }}</td><br>
            </tr> 
            <tr>
              <td>Shipping Country</td>
              <td>{{ customer.shipping_address_country }}</td><br>
            </tr> 
            <tr>
              <td>Shipping Address</td>
              <td>{{ customer.shipping_address_address }}</td><br>
            </tr> 
            <tr>
              <td>Shipping City</td>
              <td>{{ customer.shipping_address_city }}</td><br>
            </tr>  
          </b-table>
        </b-tab-item>
        </b-tabs>    
      </b-modal>

      <!-- Update Customer -->
      <b-modal v-model="Update">
        <template>
          <section>
            <h2 style="margin-top: 20px; margin-left: 20px">New Customer</h2>

            <b-field horizontal label="Customer ID">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Customer ID"
                v-model="customer.cus_id"
                pattern="CUS[0-9]{3}"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Customer Type">
              <b-select
                style="width: 400px"
                placeholder="Customer Type"
                v-model="customer.customer_type"
                required
                expanded
              >
                <option value="Business">Business</option>
                <option value="Individual">Individual</option>
              </b-select>
            </b-field>

            <b-field horizontal label="Primary Contact">
              <b-select
                style="width: 400px"
                placeholder="Salutation"
                v-model="customer.salutation"
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
                v-model="customer.first_Name"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Last Name"
                v-model="customer.last_Name"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Company Name">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Company Name"
                v-model="customer.company_Name"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Customer Email">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Customer Email"
                v-model="customer.customer_Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Customer Phone">
              <b-input
                style="width: 180px"
                name="name"
                placeholder="Work"
                v-model="customer.customer_Work_Phone"
                pattern="[0-9]{10}"
                required
                expanded
              ></b-input>
              <b-input
                style="width: 180px; margin-right: 340px"
                name="name"
                placeholder="Mobile"
                v-model="customer.customer_Mobile_Phone"
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
                    v-model="customer.facebook"
                    required
                    expanded
                  ></b-input>
                </b-field>

                <b-field horizontal label="Twitter">
                  <b-input
                    style="width: 400px"
                    name="name"
                    placeholder=""
                    v-model="customer.twitter"
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
                    v-model="customer.billing_address_country"
                    required
                    expanded
                  >
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                  </b-select>

                  <b-field horizontal label="Country">
                    <b-select
                      style="width: 200px"
                      placeholder="Country"
                      v-model="customer.shipping_address_country"
                      required
                      expanded
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="India">India</option>
                      <option value="Japan">Japan</option>
                    </b-select>
                  </b-field>
                </b-field>

                <b-field style="" horizontal label="Address">
                  <b-input
                    style="width: 200px"
                    maxlength="200"
                    type="textarea"
                    v-model="customer.billing_address_address"
                    required
                  ></b-input>

                  <b-field style="" horizontal label="Address">
                    <b-input
                      style="width: 200px"
                      maxlength="200"
                      type="textarea"
                      v-model="customer.shipping_address_address"
                      required
                    ></b-input>
                  </b-field>
                </b-field>

                <b-field horizontal label="City">
                  <b-input
                    style="width: 200px"
                    name="name"
                    placeholder="City"
                    v-model="customer.billing_address_city"
                    required
                    expanded
                  ></b-input>

                  <b-field horizontal label="City">
                    <b-input
                      style="width: 200px; margin-right: 35px"
                      name="name"
                      placeholder="City"
                      v-model="customer.shipping_address_city"
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
                @click="updateCustomer"
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
import CustomerServices from "../../services/customerServices";
import Download from "../Customer/GenerateReport.vue"

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
      search:"",
      customers: [],
      cus: "",
      id: "",
    };
  },
  computed:{
    filteredCustomer:function(){
      return this.customers.filter((cus) => {
        return cus.cus_id.match(this.search)
      });
    }
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
    async addCustomer() {
      try {
        this.customer = await CustomerServices.addCustomer(this.customer);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async updateCustomer() {
      try{
        const response = await CustomerServices.updateCustomer(this.customer);
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
      const response = await CustomerServices.getCustomerById(id)
      this.customer = response.data;
      console.log(response.data)
    },
    async deleteCustomer(id) {
      try {
        this.id = await CustomerServices.deleteCustomer(id);
        this.getAll();
      } catch (err) {
        console.log(err);
      }
    },
    confirmCustomDelete(id) {
      this.$buefy.dialog.confirm({
        title: "Deleting Customer",
        message:
          "Are you sure you want to <b>delete</b> this customer? This action cannot be undone.",
        confirmText: "Delete Customer",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.deleteCustomer(id)
        
      });
    },
    async viewInvoice(id) {
      this.View = true;
      this.id = id;
      const response = await CustomerServices.getCustomerById(id)
      this.customer = response.data;
      console.log(response.data)
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