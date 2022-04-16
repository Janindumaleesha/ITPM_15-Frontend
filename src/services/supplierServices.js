import domain from '../services/domain'

export default {
    getAllSuppliers() {
    //Using axios object
    return domain().get('supplier/getsupplier')
    },
    addSupplier(supplier){
    return domain().post('supplier/addsupplier',supplier)
    },
    getSupplierById(id){
    return domain().get('supplier/getsupplierid/:supplierId'+id)
    }
    // updateUser(user){
    // return domain().put('invoice/'+user._id,user)
    // },
    // deleteUser(id){
    // return domain().delete('invoice/'+id)
    // }
};
