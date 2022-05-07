<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/logo.png"
                    alt=""
                    width="50" 
                    height=""
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="http://localhost:8081/dashboard#">
                Dashboard
            </b-navbar-item>
            <b-navbar-item href="http://localhost:8081/allitems">
                Items
            </b-navbar-item>
            <b-navbar-item href="http://localhost:8081/allcustomers">
                Customers
            </b-navbar-item>
            <b-navbar-item href="http://localhost:8081/allinvoices">
                Invoices
            </b-navbar-item>
            <b-navbar-item href="http://localhost:8081/allsuppliers">
                Suppliers
            </b-navbar-item>
            
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <b-field style="margin-top:12px;margin-right:7px;">
                    <b-input placeholder="Search..."
                        type="search"
                        icon="magnify"
                        icon-clickable
                        @icon-click="searchIconClick">
                    </b-input>
                </b-field>
                <div class="buttons">
                    <a class="button is-info" @click="signUp = true">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" @click="logIn = true">
                        Log in
                    </a>
                </div>

                <b-modal v-model="logIn">
                    <form action="">
                        <div class="modal-card" style="width: auto">
                            <header class="modal-card-head">
                                <p class="modal-card-title">Login</p>
                                <button
                                    type="button"
                                    class="delete"
                                    @click="$emit('close')"/>
                            </header>
                            <section class="modal-card-body">
                                <b-field label="Email">
                                    <b-input
                                        type="email"
                                        :value="email"
                                        placeholder="Your email"
                                        required>
                                    </b-input>
                                </b-field>

                                <b-field label="Password">
                                    <b-input
                                        type="password"
                                        :value="password"
                                        password-reveal
                                        placeholder="Your password"
                                        required>
                                    </b-input>
                                </b-field>

                                <b-checkbox>Remember me</b-checkbox>
                            </section>
                            <footer class="modal-card-foot">
                                <b-button
                                    label="Close"
                                    @click="$emit('close')" />
                                <b-button
                                    label="Login"
                                    type="is-primary" />
                            </footer>
                        </div>
                    </form>
                </b-modal>

            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        data() {
            return {
                signUp: false,
                logIn: false
            }
        },
        // methods: {
        //     logIn() {
        //         this.$buefy.modal.open({
        //             parent: this,
        //             component: ModalForm,
        //             hasModalCard: true,
        //             customClass: 'custom-class custom-class-2',
        //             trapFocus: true
        //         })
        //     }
        // }
        
    }
</script>