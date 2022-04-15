<template>
    <section>
        <b-field>
            <h2>All Customers</h2>
            <b-input style="margin-left:837px;margin-right:10px;" placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
            <b-button type="is-info">+ New</b-button>
        </b-field>

        <b-tabs>
            <b-tab-item id="customers" label="Table">
                <b-table >
                        <tr>
                            <th>CUSTOMER ID</th>
                            <th>CUSTOMER TYPE</th>
                            <th>SALUTATION</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>COMPANY NAME</th>
                            <th>CUSTOMER EMAIL</th>
                            <th>CUSTOMER PHONE</th>
                            <th>VIEW</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                        <tr>
                            <td>Alfreds</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td style="text-align:center;"><b-button type="is-info">View</b-button></td>
                            <td style="text-align:center;"><b-button type="is-info">Update</b-button></td>
                            <td style="text-align:center;"><b-button type="is-danger" icon-right="delete" /></td>
                        </tr>
                        <tr>
                            <td>Berglunds</td>
                            <td>Christina</td>
                            <td>Sweden</td>
                            <td>Sweden</td>
                            <td>Sweden</td>
                            <td>Sweden</td>
                            <td>Sweden</td>
                            <td>Sweden</td>
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