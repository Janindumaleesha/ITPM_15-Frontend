<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                :delay="expandWithDelay ? 500 : null"
                type="is-light"
                open
            >
                <div class="p-1">
                    <div class="block">
                    
                    </div>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="Menu" style="">
                            <b-menu-item icon="information-outline" label="Dashboard"></b-menu-item>
                            <b-menu-item active expanded icon="settings" label="Items">
                                <b-menu-item icon="list" label="All Items"></b-menu-item>
                                <b-menu-item icon="cart" label="Add Items"></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Update Items" disabled></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Generate Report" disabled></b-menu-item>
                            </b-menu-item>
                            <b-menu-item icon="settings" label="Customer">
                                <b-menu-item icon="account" label="All Customer"></b-menu-item>
                                <b-menu-item icon="cellphone-link" label="Add Customer"></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Update Customer" disabled></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Generate Report" disabled></b-menu-item>
                            </b-menu-item>
                            <b-menu-item icon="settings" label="Invoice">
                                <b-menu-item icon="account" label="All Invoice"></b-menu-item>
                                <b-menu-item icon="cellphone-link" label="Add Invoice"></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Invoice" disabled></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Update Invoice" disabled></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Generate Report" disabled></b-menu-item>
                            </b-menu-item>
                            <b-menu-item icon="settings" label="Supplier">
                                <b-menu-item icon="account" label="All Supplier"></b-menu-item>
                                <b-menu-item icon="cellphone-link" label="Add Supplier"></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Update Supplier" disabled></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Generate Report" disabled></b-menu-item>
                            </b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>

            <div class="p-1">
                <b-field>
                    <b-switch v-model="reduce">Reduced</b-switch>
                </b-field>
                <b-field>
                    <b-switch v-model="expandOnHover">Expand on hover</b-switch>
                </b-field>
                <b-field>
                    <b-switch v-model="expandWithDelay">Hover with delay</b-switch>
                </b-field>
                <b-field label="Mobile Layout">
                    <b-select v-model="mobile">
                        <option :value="null"></option>
                        <option value="reduce">Reduced</option>
                        <option value="hide">Hidden</option>
                        <option value="fullwidth">Fullwidth</option>
                    </b-select>
                </b-field>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false
    };
  }
};
</script>

