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

                    <b-field horizontal label="Primary Contact">
                        <b-select style="width:400px;" placeholder="Salutation" expanded>
                            <option value="1">Bulma</option>
                            <option value="2">Vue.js</option>
                            <option value="3">Buefy</option>
                        </b-select>

                    </b-field> 

                    <b-input style="width:400px;" name="name" placeholder="First Name" expanded></b-input>

                    <b-input style="width:400px;" name="name" placeholder="Last Name" expanded></b-input>           

                    <b-field horizontal label="Company Name">
                        <b-input style="width:400px;" name="name" placeholder="Company Name" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Supplier Email">
                        <b-input style="width:400px;" name="name" placeholder="Supplier Email" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Supplier Phone">
                        <b-input style="width:150px;" name="name" placeholder="Work Phone" expanded></b-input>

                        <b-input style="width:150px;" name="name" placeholder="Mobile" expanded></b-input>

                    </b-field>

                

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
                
            }
        },


    };
</script>

