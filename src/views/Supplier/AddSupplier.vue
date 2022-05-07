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
                    <h2 style="margin-top:20px;margin-left:20px;">New Supplier</h2>

                    <b-field horizontal label="Supplier ID">
                        <b-input style="width:400px;" name="name" placeholder="Supplier ID" v-model="supplier.sup_id" expanded pattern="SUP[0-9]{3}" required></b-input>
                    </b-field>

                    <b-field horizontal label="Primary Contact">
                        <b-select style="width:400px;" placeholder="Salutation" expanded required>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                            <option value="3">Miss.</option>
                        </b-select>
                    </b-field> 

                    <b-field horizontal label="">
                        <b-input style="width:400px;" name="name" placeholder="First Name" expanded required></b-input>
                    </b-field>
                    
                    <b-field horizontal label="">
                        <b-input style="width:400px;" name="name" placeholder="Last Name" expanded required></b-input>
                    </b-field>           

                    <b-field horizontal label="Company Name">
                        <b-input style="width:400px;" name="name" placeholder="Company Name" expanded required></b-input>
                    </b-field>

                    <b-field horizontal label="Supplier Email">
                        <b-input style="width:400px;" name="name" placeholder="Supplier Email" expanded pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></b-input>
                    </b-field>

                    <b-field horizontal label="Supplier Phone">
                        <b-input style="width:180px;" name="name" placeholder="Work Phone" expanded pattern = "[0-9]{10}" required></b-input>

                        <b-input style="width:180px;margin-right:340px;" name="name" placeholder="Mobile" expanded pattern = "[0-9]{10}" required></b-input>

                    </b-field>

                    <b-tabs v-model="activeTab">
                        <b-tab-item label="Other Details">
                            <b-field horizontal label="Facebook">
                                <b-input style="width:400px;" name="name" placeholder="" expanded></b-input>
                            </b-field>

                            <b-field horizontal label="Twitter">
                                <b-input style="width:400px;" name="name" placeholder="" expanded></b-input>
                            </b-field>
                        </b-tab-item>

                        <b-tab-item label="Address">
                            <h6 style="position:absolute;margin-left:500px;"><b><i>SHIPPING ADDRESS</i></b></h6>
                            <h6 style="margin-left:80px;"><b><i>BILLING ADDRESS</i></b></h6>
                            
                            <b-field horizontal label="Country">
                                <b-select style="width:200px;" placeholder="Country" expanded>
                                    <option value="1">Sri Lanka</option>
                                    <option value="2">India</option>
                                    <option value="3">Japan</option>
                                </b-select>

                                <b-field horizontal label="Country">
                                    <b-select style="width:200px;" placeholder="Country" expanded>
                                        <option value="1">Sri Lanka</option>
                                        <option value="2">India</option>
                                        <option value="3">Japan</option>
                                    </b-select>
                                </b-field>
                            </b-field>

                            <b-field style="" horizontal label="Address">
                                <b-input style="width:200px;" maxlength="200" type="textarea"></b-input>

                                <b-field style="" horizontal label="Address">
                                    <b-input style="width:200px;" maxlength="200" type="textarea"></b-input>
                                </b-field>

                            </b-field>

                            <b-field horizontal label="City">
                                <b-input style="width:200px;" name="name" placeholder="City" expanded></b-input>

                                <b-field horizontal label="City">
                                    <b-input style="width:200px;margin-right:35px;" name="name" placeholder="City" expanded></b-input>
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

