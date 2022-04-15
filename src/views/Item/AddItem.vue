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
                    <h2 style="margin-top:20px;margin-left:20px;">New Item</h2>            

                    <b-field horizontal label="Item Name">
                        <b-input style="width:400px;" name="name" placeholder="Item Name" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Item Code">
                        <b-input style="width:400px;" name="name" placeholder="Item Code" expanded></b-input>
                    </b-field>

                     <b-field horizontal label="Category">
                        <b-select style="width:400px;" placeholder="Category" expanded>
                            <option value="1">Bulma</option>
                            <option value="2">Vue.js</option>
                            <option value="3">Buefy</option>
                        </b-select>
                    </b-field>

                    <b-field horizontal label="Quantity">
                        <b-input style="width:400px;" name="name" placeholder="Quantity" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Unit Price">
                        <b-input style="width:400px;" name="name" placeholder="Unit Price" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Collected Date">
                        <b-datepicker
                            style="width:400px;"
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

