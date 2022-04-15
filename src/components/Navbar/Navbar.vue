<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Dashboard
            </b-navbar-item>
            <b-navbar-item href="#">
                Items
            </b-navbar-item>
            <b-navbar-item href="#">
                Customers
            </b-navbar-item>
            <b-navbar-item href="#">
                Invoices
            </b-navbar-item>
            <b-navbar-item href="#">
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
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>