<template>
    <section>
        <b-field class="container">
            <h2>All Suppliers</h2>
            <b-input style="margin-left:55%;margin-right:10px;" placeholder="Search..."
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
                    <h2 style="margin-top:20px;margin-left:20px;">New Supplier</h2>

                    <b-field horizontal label="Supplier ID">
                        <b-input style="width:400px;" name="name" placeholder="Supplier ID" v-model="supplier.sup_id" pattern="SUP[0-9]{3}" required expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Primary Contact">
                        <b-select style="width:400px;" placeholder="Salutation" v-model="supplier.salutation" required expanded>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Miss.">Miss.</option>
                        </b-select>
                    </b-field> 

                    <b-field horizontal label="">
                        <b-input style="width:400px;" name="name" placeholder="First Name" v-model="supplier.first_Name" required expanded></b-input>
                    </b-field>
                    
                    <b-field horizontal label="">
                        <b-input style="width:400px;" name="name" placeholder="Last Name" v-model="supplier.last_Name" required expanded></b-input>
                    </b-field>           

                    <b-field horizontal label="Company Name">
                        <b-input style="width:400px;" name="name" placeholder="Company Name" v-model="supplier.company_Name" required expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Supplier Email">
                        <b-input style="width:400px;" name="name" placeholder="Supplier Email" v-model="supplier.supplier_Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Supplier Phone">
                        <b-input style="width:180px;" name="name" placeholder="Work Phone" v-model="supplier.supplier_Work_Phone" pattern = "[0-9]{10}" required expanded></b-input>

                        <b-input style="width:180px;margin-right:340px;" name="name" placeholder="Mobile" v-model="supplier.supplier_Mobile_Phone" pattern = "[0-9]{10}" required expanded></b-input>

                    </b-field>

                    <b-tabs v-model="activeTab">
                        <b-tab-item label="Other Details">
                            <b-field horizontal label="Facebook">
                                <b-input style="width:400px;" name="name" placeholder="" v-model="supplier.facebook" required expanded></b-input>
                            </b-field>

                            <b-field horizontal label="Twitter">
                                <b-input style="width:400px;" name="name" placeholder="" v-model="supplier.twitter" required expanded></b-input>
                            </b-field>
                        </b-tab-item>

                        <b-tab-item label="Address">
                            <h6 style="position:absolute;margin-left:500px;"><b><i>SHIPPING ADDRESS</i></b></h6>
                            <h6 style="margin-left:80px;"><b><i>BILLING ADDRESS</i></b></h6>
                            
                            <b-field horizontal label="Country">
                                <b-select style="width:200px;" placeholder="Country" v-model="supplier.billing_address_country" required expanded>
                                    <option value="1">Sri Lanka</option>
                                    <option value="2">India</option>
                                    <option value="3">Japan</option>
                                </b-select>

                                <b-field horizontal label="Country">
                                    <b-select style="width:200px;" placeholder="Country" v-model="supplier.shipping_address_country" required expanded>
                                        <option value="1">Sri Lanka</option>
                                        <option value="2">India</option>
                                        <option value="3">Japan</option>
                                    </b-select>
                                </b-field>
                            </b-field>

                            <b-field style="" horizontal label="Address">
                                <b-input style="width:200px;" maxlength="200" type="textarea" v-model="supplier.billing_address_address" required></b-input>

                                <b-field style="" horizontal label="Address">
                                    <b-input style="width:200px;" maxlength="200" type="textarea" v-model="supplier.shipping_address_address" required></b-input>
                                </b-field>

                            </b-field>

                            <b-field horizontal label="City">
                                <b-input style="width:200px;" name="name" placeholder="City" v-model="supplier.billing_address_city" required expanded></b-input>

                                <b-field horizontal label="City">
                                    <b-input style="width:200px;margin-right:35px;" name="name" placeholder="City" v-model="supplier.shipping_address_city" required expanded></b-input>
                                </b-field>

                            </b-field>

                        </b-tab-item>

                    </b-tabs>

                    <b-field style="margin-top:20px;margin-left:50px;margin-bottom:20px;">
                        <b-button type="is-info" href="http://localhost:8081/allsuppliers" @click="addSupplier">Save</b-button>
                        <b-button style="margin-left:10px;" type="is-info is-light">Cancel</b-button>
                    </b-field>
  
                </section>
            </template>
        </b-modal>

        <b-tabs>
            <b-tab-item id="customers" label="Table">
                <b-table >
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

import SupplierServices from "../../services/supplierServices"

    export default {
        data() {
            return {
                isImageModalActive: false,
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

