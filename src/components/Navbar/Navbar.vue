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
            <b-navbar-item href="http://localhost:8082/dashboard#">
                Dashboard
            </b-navbar-item>
            <b-navbar-item href="">
                Items
            </b-navbar-item>
            <b-navbar-item href="#">
                Customers
            </b-navbar-item>
            <b-navbar-item href="http://localhost:8082/allinvoices">
                Invoices
            </b-navbar-item>
            <b-navbar-item href="">
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
                <b-modal v-model="signUp">
                    <h3 style="margin-left:280px;">SIGN UP</h3>
                    <b-field style="width:400px;margin-left:280px;" label="First Name">
                        <b-input  v-model="name"></b-input>
                    </b-field>

                    <b-field style="width:400px;margin-left:280px;" label="Last Name">
                        <b-input v-model="name"></b-input>
                    </b-field>

                    <b-field style="width:400px;margin-left:280px;" label="Email"
                        type="is-danger"
                        message="This email is invalid">
                        <b-input type="email"
                            value="john@"
                            maxlength="30">
                        </b-input>
                    </b-field>

                    <b-field style="width:400px;margin-left:280px;" label="Username"
                        type="is-success"
                        message="This username is available">
                        <b-input value="johnsilver" maxlength="30"></b-input>
                    </b-field>

                    <b-field style="width:400px;margin-left:280px;" label="Password">
                        <b-input type="password"
                            value="iwantmytreasure"
                            password-reveal>
                        </b-input>
                    </b-field>

                    <b-field style="width:400px;margin-left:280px;" label="Confirm Password">
                        <b-input type="password"
                            value="iwantmytreasure"
                            password-reveal>
                        </b-input>
                    </b-field>

                    <b-field style="width:400px;margin-left:280px;" >
                        <b-checkbox v-model="checkboxCustom"
                            true-value="Yes"
                            false-value="No">
                            {{ checkboxCustom }}
                        </b-checkbox>
                        <b-field label="I agree to the Terms of Service and Privacy Policy"></b-field>
                            
                    </b-field>

                    <div style="width:400px;margin-left:280px;" class="buttons">
                        <b-button style="width:400px;" type="is-info" expanded>Sign Up</b-button>
                    </div>

                </b-modal>
                <b-modal v-model="logIn">
                    <h3 style="margin-left:280px;">LOGIN</h3>
                    <b-field style="width:400px;margin-left:280px;" label="Username"
                        type="is-success"
                        message="This username is available">
                        <b-input style="width:400px;" value="johnsilver" maxlength="30"></b-input>
                    </b-field>

                    <b-field style="width:400px;margin-left:280px;" label="Password">
                        <b-input type="password"
                            value="iwantmytreasure"
                            password-reveal>
                        </b-input>
                    </b-field>

                    <div style="width:400px;margin-left:280px;" class="buttons">
                        <b-button type="is-info" expanded>Log in</b-button>
                    </div>

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
        }
    }
</script>