import domain from '../services/domain'

export default {
    getAllInvoices() {
    //Using axios object
    return domain().get('invoice/')
    },
    addInvoice(invoice){
    return domain().post('invoice/addinvoice',invoice)
    },
    getInvoiceById(id){
    return domain().get('invoice/'+id)
    }
    // updateUser(user){
    // return domain().put('invoice/'+user._id,user)
    // },
    // deleteUser(id){
    // return domain().delete('invoice/'+id)
    // }
};

