<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      v-model="open"
    >
      <div class="p-1">
        
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" href="http://localhost:8082/dashboard#" label="Dashboard"></b-menu-item>

            <b-menu-item active expanded icon="settings">
              <template #label="props">
                Item
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" href="" label="All Items"></b-menu-item>
              <b-menu-item icon="account" href="" label="Add Item"></b-menu-item>
              <b-menu-item icon="account" href="" label="View Item"></b-menu-item>
              <b-menu-item icon="account" href="" label="Update Item"></b-menu-item>
              <b-menu-item icon="account" href="" label="Delete Item"></b-menu-item>
            </b-menu-item>  
            
            <b-menu-item icon="settings">
              <template #label="props">
                Customer
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" href="" label="All Customers"></b-menu-item>
              <b-menu-item icon="account" href="" label="Add Customer"></b-menu-item>
              <b-menu-item icon="account" href="" label="View Customer"></b-menu-item>
              <b-menu-item icon="account" href="" label="Update Customer"></b-menu-item>
              <b-menu-item icon="account" href="" label="Delete Customer"></b-menu-item>
            </b-menu-item>  

            <b-menu-item icon="settings">
              <template #label="props">
                Invoice
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" href="http://localhost:8082/allinvoices" label="All Invoices"></b-menu-item>
              <b-menu-item icon="account" href="" label="Add Invoice"></b-menu-item>
              <b-menu-item icon="account" href="" label="View Invoice"></b-menu-item>
              <b-menu-item icon="account" href="" label="Update Invoice"></b-menu-item>
              <b-menu-item icon="account" href="" label="Delete Invoice"></b-menu-item>
            </b-menu-item>

            <b-menu-item icon="settings">
              <template #label="props">
                Supplier
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" href="" label="All Suppliers"></b-menu-item>
              <b-menu-item icon="account" href="" label="Add Supplier"></b-menu-item>
              <b-menu-item icon="account" href="" label="View Supplier"></b-menu-item>
              <b-menu-item icon="account" href="" label="Update Supplier"></b-menu-item>
              <b-menu-item icon="account" href="" label="Delete Supplier"></b-menu-item>
            </b-menu-item>

          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    
    <b-button style="margin-left:10px;margin-top:10px;" type="is-info" size="is-medium" icon-right ="view-dashboard" @click="open = true"/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>