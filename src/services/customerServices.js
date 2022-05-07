import domain from '../services/domain'

export default {
    getAllCustomers() {
    //Using axios object
    return domain().get('customer/getcustomer')
    },
    addCustomer(customer){
    return domain().post('customer/addcustomer',customer)
    },
    getCustomerById(id){
        return domain().get('customer/getcustomerid/'+id)
    },
    updateCustomer(customers){
        return domain().put('customer/updatecustomer/'+customers._id,customers)
    },
    deleteCustomer(id){
        return domain().delete('customer/deletecustomer/:customerId'+id)
    }
};
