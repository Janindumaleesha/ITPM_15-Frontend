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
    return domain().get('customer/getcustomerid/:customerId'+id)
    }
    // updateUser(user){
    // return domain().put('invoice/'+user._id,user)
    // },
    // deleteUser(id){
    // return domain().delete('invoice/'+id)
    // }
};
