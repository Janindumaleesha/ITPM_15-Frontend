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
                    <h2 style="margin-top:20px;margin-left:20px;">New Customer</h2>

                    <b-field horizontal label="Customer ID">
                        <b-input style="width:400px;" name="name" placeholder="Customer ID" v-model="customer.cus_id" expanded pattern="CUS[0-9]{3}" required></b-input>
                    </b-field>

                    <b-field horizontal label="Customer Type">
                        <b-radio v-model="radio"
                            native-value="default">
                                Business
                        </b-radio>    
                        <b-radio style="margin-right:200px" v-model="radio"
                            native-value="default">
                                Individual
                        </b-radio>                
                    </b-field>

                    <b-field horizontal label="Primary Contact">
                        <b-select style="width:400px;" placeholder="Salutation" v-model="customer.salutation" expanded required>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                            <option value="3">Miss.</option>
                        </b-select>
                    </b-field> 

                    <b-field horizontal label="">
                        <b-input style="width:400px;" name="name" placeholder="First Name" v-model="customer.first_Name" expanded required></b-input>
                    </b-field>
                    
                    <b-field horizontal label="">
                        <b-input style="width:400px;" name="name" placeholder="Last Name" v-model="customer.last_Name" expanded required></b-input>
                    </b-field>           

                    <b-field horizontal label="Company Name">
                        <b-input style="width:400px;" name="name" placeholder="Company Name" v-model="customer.company_Name" expanded required></b-input>
                    </b-field>

                    <b-field horizontal label="Customer Email">
                        <b-input style="width:400px;" name="name" placeholder="Customer Email" v-model="customer.customer_Email" expanded pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></b-input>
                    </b-field>

                    <b-field horizontal label="Customer Phone">
                        <b-input style="width:180px;" name="name" placeholder="Work" v-model="customer.customer_Work_Phone" expanded pattern = "[0-9]{10}" required></b-input>
                        <b-input style="width:180px;margin-right:340px;" name="name" placeholder="Mobile" v-model="customer.customer_Mobile_Phone" expanded pattern = "[0-9]{10}" required></b-input>
                    </b-field>

                    <b-tabs v-model="activeTab">
                        <b-tab-item label="Other Details">
                            <b-field horizontal label="Facebook">
                                <b-input style="width:400px;" name="name" placeholder="" v-model="customer.facebook" expanded></b-input>
                            </b-field>

                            <b-field horizontal label="Twitter">
                                <b-input style="width:400px;" name="name" placeholder="" v-model="customer.twitter" expanded></b-input>
                            </b-field>
                        </b-tab-item>

                        <b-tab-item label="Address">
                            <h6 style="position:absolute;margin-left:500px;"><b><i>SHIPPING ADDRESS</i></b></h6>
                            <h6 style="margin-left:80px;"><b><i>BILLING ADDRESS</i></b></h6>
                            
                            <b-field horizontal label="Country">
                                <b-select style="width:200px;" placeholder="Country" v-model="customer.billing_address_country" expanded >
                                    <option value="1">Sri Lanka</option>
                                    <option value="2">India</option>
                                    <option value="3">Japan</option>
                                </b-select>

                                <b-field horizontal label="Country">
                                    <b-select style="width:200px;" placeholder="Country" v-model="customer.shipping_address_country" expanded>
                                        <option value="1">Sri Lanka</option>
                                        <option value="2">India</option>
                                        <option value="3">Japan</option>
                                    </b-select>
                                </b-field>
                            </b-field>

                            <b-field style="" horizontal label="Address">
                                <b-input style="width:200px;" maxlength="200" type="textarea" v-model="customer.billing_address_address"></b-input>

                                <b-field style="" horizontal label="Address">
                                    <b-input style="width:200px;" maxlength="200" type="textarea" v-model="customer.shipping_address_address"></b-input>
                                </b-field>

                            </b-field>

                            <b-field horizontal label="City">
                                <b-input style="width:200px;" name="name" placeholder="City" v-model="customer.billing_address_city" expanded></b-input>

                                <b-field horizontal label="City">
                                    <b-input style="width:200px;margin-right:35px;" name="name" placeholder="City" v-model="customer.shipping_address_city" expanded></b-input>
                                </b-field>

                            </b-field>

                        </b-tab-item>

                    </b-tabs>

                    <b-field style="margin-top:20px;margin-left:50px;margin-bottom:20px;">
                        <b-button type="is-info">Save</b-button>
                        <b-button style="margin-left:10px;" type="is-info is-light">Cancel</b-button>
                    </b-field>
  
                </section>
            </template>
        </b-modal>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                isImageModalActive: false,
                activeTab: 0,
                showBooks: false
            }
        },


    };
</script>

