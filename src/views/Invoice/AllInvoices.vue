<template>
  <v-container>
    <b-field class="container">
      <h2>All Invoices</h2>
      <b-input
        style="margin-left: 50%; margin-right: 10px"
        placeholder="Search..."
        type="search"
        icon="magnify"
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

    <!-- Add Invoice Part   -->
    <b-modal v-model="isImageModalActive">
      <template>
        <section>
          <h2 style="margin-top: 20px; margin-left: 20px">New Invoice</h2>

          <b-field horizontal label="Customer Name">
            <b-select
              style="width: 600px"
              placeholder="Customer Name"
              v-model="invoice.cus_name"
              expanded
            >
              <option value="Janindu">Janindu</option>
              <option value="Nalini">Nalini</option>
              <option value="Yasasvi">Yasasvi</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Invoice">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Name"
              v-model="invoice.invoice_id"
              pattern="INV[0-9]{3}"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Invoice date">
            <b-datepicker
              style="width: 400px"
              v-model="invoice.invoice_date"
              :show-week-number="showWeekNumber"
              :locale="locale"
              placeholder="Click to select..."
              icon="calendar-today"
              :icon-right="selected ? 'close-circle' : ''"
              icon-right-clickable
              @icon-right-click="clearDate"
              trap-focus
              required
            >
            </b-datepicker>
          </b-field>

          <b-field horizontal label="Sales person">
            <b-select
              style="width: 400px"
              placeholder="Select sales person"
              v-model="invoice.sales_person"
              expanded
            >
              <option value="Gethmi">Gethmi</option>
              <option value="Sandunika">Sandunika</option>
              <option value="Karunarathna">Karunarathna</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Terms">
            <b-select
              style="width: 200px"
              placeholder="Select"
              v-model="invoice.terms"
              expanded
            >
              <option value="Due end of the Month">Due end of the Month</option>
              <option value="Due Receipt">Due Receipt</option>
            </b-select>
            <b-field horizontal label="Due date">
              <b-datepicker
                style="width: 200px; margin-right: 105px"
                v-model="invoice.due_date"
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
          </b-field>

          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Rate</th>
                <th scope="col">Discount</th>
                <th scope="col">Amount</th>
                <th scope="col">Clear</th>
              </tr>
            </thead>
            <tbody>
              <tr class="clickable-row">
                <th scope="row">
                  <b-input
                    style="width: 150px"
                    v-model="invoice.item_details"
                  ></b-input>
                </th>
                <td>
                  <b-input
                    style="width: 50px"
                    v-model="invoice.quantity"
                  ></b-input>
                </td>
                <td>
                  <b-input style="width: 50px" v-model="invoice.rate"></b-input>
                </td>
                <td>
                  <b-input
                    style="width: 50px"
                    v-model="invoice.discount"
                  ></b-input>
                </td>
                <td>
                  <b-input
                    style="width: 50px"
                    v-model="invoice.amount"
                  ></b-input>
                </td>
                <td><b-button type="is-danger" icon-right="delete" /></td>
              </tr>
            </tbody>
          </table>

          <b-button style="margin-top: 20px; margin-left: 20px" type="is-info"
            >Add Item in Bulk</b-button
          >

          <b-field
            style="margin-top: 20px; margin-left: 20px"
            label="Customer Notes"
          >
            <b-input
              style="width: 400px"
              maxlength="200"
              type="textarea"
              v-model="invoice.customer_notes"
            ></b-input>
          </b-field>

          <table class="table">
            <tbody>
              <tr>
                <td>Sub Total</td>
                <td>=</td>
                <td>8800.00</td>
              </tr>
              <tr>
                <td>
                  Shipping Charges
                  <b-input
                    style="width: 100px"
                    name="name"
                    v-model="invoice.shipping_charges"
                    expanded
                  ></b-input>
                </td>
                <td>=</td>
                <td>450</td>
              </tr>
              <tr>
                <td><b>Total</b></td>
                <td><b>=</b></td>
                <td><b>8350</b></td>
              </tr>
            </tbody>
          </table>

          <h2 style="margin-top: 20px; margin-left: 20px">Record Payment</h2>

          <b-field horizontal label="Amount">
            <b-input
              style="width: 400px"
              name="Amount"
              placeholder="Amount"
              v-model="invoice.total_amount"
              required
              expanded
            ></b-input>
          </b-field>

          <b-field horizontal label="Payment date">
            <b-datepicker
              style="width: 400px"
              v-model="invoice.payment_date"
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

          <b-field horizontal label="Payment Mode">
            <b-select
              style="width: 400px"
              placeholder="Select sales person"
              v-model="invoice.payment_mode"
              expanded
            >
              <option value="Cash">Cash</option>
              <option value="Visa Card">Visa Card</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Deposit to">
            <b-select
              style="width: 400px"
              placeholder="Select"
              v-model="invoice.deposit_to"
              required
              expanded
            >
              <option value="000 4569 7895 135">000 4569 7895 135</option>
              <option value="221 4658 4698 456">221 4658 4698 456</option>
              <option value="888 4658 4698 756">888 4658 4698 756</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Reference">
            <b-input
              style="width: 400px"
              name="name"
              placeholder="Name"
              v-model="invoice.reference"
              expanded
            ></b-input>
          </b-field>

          <b-field
            style="margin-top: 20px; margin-left: 50px; margin-bottom: 20px"
          >
            <b-button type="is-info" @click="addInvoice">Save</b-button>
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
            <th>DATE</th>
            <th>INVOICE ID</th>
            <th>CUSTOMER NAME</th>
            <th>DUE DATE</th>
            <th>AMOUNT</th>
            <th>VIEW</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
          <tr v-for="inv in filteredInvoices" :key="inv.index">
            <td>{{ inv.invoice_id | to-uppercase }}</td>
            <td>{{ inv.invoice_date }}</td>
            <td>{{ inv.cus_name }}</td>
            <td>{{ inv.due_date }}</td>
            <td>{{ inv.total_amount }}</td>
            <td style="text-align: center">
              <b-button @click="viewInvoice(inv._id)" type="is-info"
                >View</b-button
              >
            </td>
            <td style="text-align: center">
              <b-button type="is-info" @click="displayUpdateModel(inv._id)">Update</b-button>
            </td>

            <td style="text-align: center">
              <b-button
                type="is-danger"
                @click="confirmCustomDelete(inv._id)"
                icon-right="delete"
              />
            </td>
          </tr>
        </b-table>
      </b-tab-item>

      <b-modal v-model="View">
        <b-tabs>
        <p>{{ invoice.cus_name }}'s invoice</p>
        <b-tab-item id="customers" label="Table">
          <b-table>
            <tr>
              <th>LABEL</th>
              <th>DETAILS</th>
            </tr>
            <tr>
              <td>Customer Name</td>
              <td>{{ invoice.cus_name }}</td><br>
            </tr> 
            <tr>
              <td>Invoice ID</td>
              <td>{{ invoice.invoice_id }}</td><br>
            </tr> 
            <tr>
              <td>Invoice Date</td>
              <td>{{ invoice.invoice_date }}</td><br>
            </tr> 
            <tr>
              <td>Sales Person</td>
              <td>{{ invoice.sales_person }}</td><br>
            </tr> 
            <tr>
              <td>Terms</td>
              <td>{{ invoice.terms }}</td><br>
            </tr> 
            <tr>
              <td>Invoice Due Date</td>
              <td>{{ invoice.due_date }}</td><br>
            </tr> 
            <tr>
              <td>Item Details</td>
              <td>{{ invoice.item_details }}</td><br>
            </tr> 
            <tr>
              <td>Quantity</td>
              <td>{{ invoice.quantity }}</td><br>
            </tr> 
            <tr>
              <td>Rate</td>
              <td>{{ invoice.rate }}</td><br>
            </tr> 
            <tr>
              <td>Discount</td>
              <td>{{ invoice.discount }}</td><br>
            </tr> 
            <tr>
              <td>Amount</td>
              <td>{{ invoice.amount }}</td><br>
            </tr> 
            <tr>
              <td>Customer Note</td>
              <td>{{ invoice.customer_notes }}</td><br>
            </tr> 
            <tr>
              <td>Shipping Charges</td>
              <td>{{ invoice.shipping_charges }}</td><br>
            </tr> 
            <tr>
              <td>Total Amount</td>
              <td>{{ invoice.total_amount }}</td><br>
            </tr> 
            <tr>
              <td>Payment Date</td>
              <td>{{ invoice.payment_date }}</td><br>
            </tr> 
            <tr>
              <td>Payment Mode</td>
              <td>{{ invoice.payment_mode }}</td><br>
            </tr> 
            <tr>
              <td>Deposit To</td>
              <td>{{ invoice.deposit_to }}</td><br>
            </tr> 
            <tr>
              <td>Reference</td>
              <td>{{ invoice.reference }}</td><br>
            </tr>  
          </b-table>
        </b-tab-item>
        </b-tabs>    
      </b-modal>

      <!-- Update Part -->
      <b-modal v-model="Update">
        <template>
          <section>
            <h2 style="margin-top: 20px; margin-left: 20px">Update Invoice</h2>

            <b-field horizontal label="Customer Name">
              <b-select
                style="width: 600px"
                placeholder="Customer Name"
                v-model="invoice.cus_name"
                expanded
              >
                <option value="Janindu">Janindu</option>
                <option value="Nalini">Nalini</option>
                <option value="Yasasvi">Yasasvi</option>
              </b-select>
            </b-field>

            <b-field horizontal label="Invoice">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Name"
                v-model="invoice.invoice_id"
                pattern="INV[0-9]{3}"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Invoice date">
              <b-datepicker
                style="width: 400px"
                v-model="invoice.invoice_date"
                :show-week-number="showWeekNumber"
                :locale="locale"
                placeholder="Click to select..."
                icon="calendar-today"
                :icon-right="selected ? 'close-circle' : ''"
                icon-right-clickable
                @icon-right-click="clearDate"
                trap-focus
                required
              >
              </b-datepicker>
            </b-field>

            <b-field horizontal label="Sales person">
              <b-select
                style="width: 400px"
                placeholder="Select sales person"
                v-model="invoice.sales_person"
                expanded
              >
                <option value="Gethmi">Gethmi</option>
                <option value="Sandunika">Sandunika</option>
                <option value="Karunarathna">Karunarathna</option>
              </b-select>
            </b-field>

            <b-field horizontal label="Terms">
              <b-select
                style="width: 200px"
                placeholder="Select"
                v-model="invoice.terms"
                expanded
              >
                <option value="Due end of the Month">
                  Due end of the Month
                </option>
                <option value="Due Receipt">Due Receipt</option>
              </b-select>
              <b-field horizontal label="Due date">
                <b-datepicker
                  style="width: 200px; margin-right: 105px"
                  v-model="invoice.due_date"
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
            </b-field>

            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Clear</th>
                </tr>
              </thead>
              <tbody>
                <tr class="clickable-row">
                  <th scope="row">
                    <b-input
                      style="width: 150px"
                      v-model="invoice.item_details"
                    ></b-input>
                  </th>
                  <td>
                    <b-input
                      style="width: 50px"
                      v-model="invoice.quantity"
                    ></b-input>
                  </td>
                  <td>
                    <b-input
                      style="width: 50px"
                      v-model="invoice.rate"
                    ></b-input>
                  </td>
                  <td>
                    <b-input
                      style="width: 50px"
                      v-model="invoice.discount"
                    ></b-input>
                  </td>
                  <td>
                    <b-input
                      style="width: 50px"
                      v-model="invoice.amount"
                    ></b-input>
                  </td>
                  <td><b-button type="is-danger" icon-right="delete" /></td>
                </tr>
              </tbody>
            </table>

            <b-button style="margin-top: 20px; margin-left: 20px" type="is-info"
              >Add Item in Bulk</b-button
            >

            <b-field
              style="margin-top: 20px; margin-left: 20px"
              label="Customer Notes"
            >
              <b-input
                style="width: 400px"
                maxlength="200"
                type="textarea"
                v-model="invoice.customer_notes"
              ></b-input>
            </b-field>

            <table class="table">
              <tbody>
                <tr>
                  <td>Sub Total</td>
                  <td>=</td>
                  <td>8800.00</td>
                </tr>
                <tr>
                  <td>
                    Shipping Charges
                    <b-input
                      style="width: 100px"
                      name="name"
                      v-model="invoice.shipping_charges"
                      expanded
                    ></b-input>
                  </td>
                  <td>=</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td><b>Total</b></td>
                  <td><b>=</b></td>
                  <td><b>8350</b></td>
                </tr>
              </tbody>
            </table>

            <h2 style="margin-top: 20px; margin-left: 20px">Record Payment</h2>

            <b-field horizontal label="Amount">
              <b-input
                style="width: 400px"
                name="Amount"
                placeholder="Amount"
                v-model="invoice.total_amount"
                required
                expanded
              ></b-input>
            </b-field>

            <b-field horizontal label="Payment date">
              <b-datepicker
                style="width: 400px"
                v-model="invoice.payment_date"
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

            <b-field horizontal label="Payment Mode">
              <b-select
                style="width: 400px"
                placeholder="Select sales person"
                v-model="invoice.payment_mode"
                expanded
              >
                <option value="Cash">Cash</option>
                <option value="Visa Card">Visa Card</option>
              </b-select>
            </b-field>

            <b-field horizontal label="Deposit to">
              <b-select
                style="width: 400px"
                placeholder="Select"
                v-model="invoice.deposit_to"
                required
                expanded
              >
                <option value="000 4569 7895 135">000 4569 7895 135</option>
                <option value="221 4658 4698 456">221 4658 4698 456</option>
                <option value="888 4658 4698 756">888 4658 4698 756</option>
              </b-select>
            </b-field>

            <b-field horizontal label="Reference">
              <b-input
                style="width: 400px"
                name="name"
                placeholder="Name"
                v-model="invoice.reference"
                expanded
              ></b-input>
            </b-field>

            <b-field
              style="margin-top: 20px; margin-left: 50px; margin-bottom: 20px"
            >
              <b-button type="is-success" @click="updateInvoice">Update</b-button>
              <b-button style="margin-left: 10px" type="is-info is-light"
                >Cancel</b-button
              >
            </b-field>
          </section>
        </template>
      </b-modal>
    </b-tabs>
  </v-container>
</template>

<script>
import InvoiceServices from "../../services/invoiceServices";
import Download from "../Invoice/GenerateReport.vue"

export default {
  components: {
    Download,
  },
  data() {
    return {
      isImageModalActive: false,
      Update: false,
      View: false,
      indefinteToast: null,
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
      search: "",
      invoices: [],
      inv: "",
      id: "",
    };
  },
  computed:{
    filteredInvoices:function(){
      return this.invoices.filter((inv) => {
        return inv.invoice_id.match(this.search)
      });
    }
  },
  methods: {
    async getAll() {
      try {
        const response = await InvoiceServices.getAllInvoices();
        this.invoices = response.data;
        console.log(this.invoices)
      } catch (err) {
        console.log(err);
      }
    },
    async addInvoice() {
      try {
        this.invoice = await InvoiceServices.addInvoice(this.invoice);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async updateInvoice() {
      try{
        const response = await InvoiceServices.updateInvoice(this.invoice);
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
    async deleteInvoice(id) {
      try {
        this.id = await InvoiceServices.deleteInvoice(id);
        this.getAll();
      } catch (err) {
        console.log(err);
      }
    },
    async displayUpdateModel(id) {
      this.Update = true;
      this.id = id;
      const response = await InvoiceServices.getInvoiceById(id)
      this.invoice = response.data;
      console.log(response.data)
    },
    confirmCustomDelete(id) {
      this.$buefy.dialog.confirm({
        title: "Deleting Invoice",
        message:
          "Are you sure you want to <b>delete</b> this invoice? This action cannot be undone.",
        confirmText: "Delete Invoice",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.deleteInvoice(id)
        
      });
    },
    async viewInvoice(id) {
      this.View = true;
      this.id = id;
      const response = await InvoiceServices.getInvoiceById(id)
      this.invoice = response.data;
      console.log(response.data)
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
    this.update();
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






        

