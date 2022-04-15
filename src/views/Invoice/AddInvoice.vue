<template>
    <section>
        <div class="buttons">
            <b-button
                label="Launch image modal"
                type="is-primary"
                size="is-medium"
                @click="isImageModalActive = true" />
        </div>

        <b-modal v-model="isImageModalActive">
            <template>
                <section>
                    <h2 style="margin-top:20px;margin-left:20px;">New Invoice</h2>

                    <b-field horizontal label="Customer Name">
                        <b-select style="width:600px;" placeholder="Customer Name" v-model="invoice.cus_name" expanded>
                            <option value="1">Bulma</option>
                            <option value="2">Vue.js</option>
                            <option value="3">Buefy</option>
                        </b-select>
                    </b-field>

                    <b-field horizontal label="Invoice">
                        <b-input style="width:400px;" name="name" placeholder="Name" v-model="invoice.invoice_id" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Invoice date">
                        <b-datepicker
                            style="width:400px;"
                            v-model="invoice.invoice_date"
                            :show-week-number="showWeekNumber"
                            :locale="locale"
                            placeholder="Click to select..."
                            icon="calendar-today"
                            :icon-right="selected ? 'close-circle' : ''"
                            icon-right-clickable
                            @icon-right-click="clearDate"
                            trap-focus>
                        </b-datepicker>
                    </b-field>

                    <b-field horizontal label="Sales person">
                        <b-select style="width:400px;" placeholder="Select sales person" v-model="invoice.sales_person" expanded>
                            <option value="1">Bulma</option>
                            <option value="2">Vue.js</option>
                            <option value="3">Buefy</option>
                        </b-select>
                    </b-field>

                    <b-field horizontal label="Terms">
                        <b-select style="width:200px;" placeholder="Select" v-model="invoice.terms" expanded>
                            <option value="1">Bulma</option>
                            <option value="2">Vue.js</option>
                            <option value="3">Buefy</option>
                        </b-select>
                        <b-field horizontal label="Due date">
                            <b-datepicker
                                style="width:200px;margin-right:105px;"
                                v-model="invoice.due_date"
                                :show-week-number="showWeekNumber"
                                :locale="locale"
                                placeholder="Click to select..."
                                icon="calendar-today"
                                :icon-right="selected ? 'close-circle' : ''"
                                icon-right-clickable
                                @icon-right-click="clearDate"
                                trap-focus>
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
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class='clickable-row'>
                                <th scope="row"><b-input style="width:50px;"  v-model="invoice.item_details"></b-input></th>
                                <td><b-input style="width:50px;"  v-model="invoice.quantity"></b-input></td>
                                <td><b-input style="width:50px;"  v-model="invoice.rate"></b-input></td>
                                <td><b-input style="width:50px;"  v-model="invoice.discount"></b-input></td>
                                <td><b-input style="width:50px;"  v-model="invoice.amount"></b-input></td>
                                <td><b-button type="is-danger" icon-right="delete" /></td>
                            </tr>
                            <tr class='clickable-row'>
                                <th scope="row">Item 02</th>
                                <td>10</td>
                                <td>100.00</td>
                                <td>20%</td>
                                <td>800.00</td>
                                <td><b-button type="is-danger" icon-right="delete" /></td>
                            </tr>
                        </tbody>
                    </table>

                    <b-button style="margin-top:20px;margin-left:20px;" type="is-info">Add Item in Bulk</b-button>

                    <b-field style="margin-top:20px;margin-left:20px;" label="Customer Notes">
                        <b-input style="width:400px;" maxlength="200" type="textarea" v-model="invoice.customer_notes"></b-input>
                    </b-field>

                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Sub Total</td>
                                <td>=</td>
                                <td>8800.00</td>
                            </tr>
                            <tr>
                                <td>Shipping Charges <b-input style="width:100px;" name="name" v-model="invoice.shipping_charges" expanded></b-input></td>
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

                    <h2 style="margin-top:20px;margin-left:20px;">Record Payment</h2>

                    <b-field horizontal label="Amount">
                        <b-input style="width:400px;" name="name" placeholder="Name" v-model="invoice.total_amount" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Payment Date">
                        <b-input style="width:400px;" name="name" placeholder="Name" v-model="invoice.payment_date" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Payment Mode">
                        <b-select style="width:400px;" placeholder="Select sales person" v-model="invoice.payment_mode" expanded>
                            <option value="1">Bulma</option>
                            <option value="2">Vue.js</option>
                            <option value="3">Buefy</option>
                        </b-select>
                    </b-field>

                    <b-field horizontal label="Deposit to">
                        <b-select style="width:400px;" placeholder="Select" v-model="invoice.deposit_to" expanded>
                            <option value="1">Bulma</option>
                            <option value="2">Vue.js</option>
                            <option value="3">Buefy</option>
                        </b-select>
                    </b-field>

                    <b-field horizontal label="Reference">
                        <b-input style="width:400px;" name="name" placeholder="Name" v-model="invoice.reference" expanded></b-input>
                    </b-field>

                    <b-field style="margin-top:20px;margin-left:50px;margin-bottom:20px;">
                        <b-button type="is-info" @click="addInvoice" >Save</b-button>
                        <b-button style="margin-left:10px;" type="is-info is-light">Cancel</b-button>
                    </b-field>
  
                </section>
            </template>
        </b-modal>
    </section>
</template>

<script>
import InvoiceService from '../../services/invoiceServices'

    export default {
        data() {
            return {
                isImageModalActive: false,
                invoice:{
                    cus_name:"",
                    invoice_id:"",
                    invoice_date:"",
                    sales_person:"",
                    terms:"",
                    due_date:"",
                    item_details:"",
                    quantity:"",
                    rate:"",
                    discount:"",
                    amount:"",
                    customer_notes:"",
                    shipping_charges:"",
                    total_amount:"",
                    payment_date:"",
                    payment_mode:"",
                    deposit_to:"",
                    reference:""
                }
                
            }
        },
        methods: {
            async addInvoice(){
                try{
                    this.invoice = await InvoiceService.addInvoice(this.invoice)
                    this.$router.push("/")
                }catch(err){
                    console.log(err)
                }
            },


        },


    };
</script>

