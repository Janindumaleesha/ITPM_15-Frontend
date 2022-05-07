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
        return domain().get('supplier/getsupplierid/'+id)
    },
    updateSupplier(suppliers){
        
        return domain().put('supplier/updatesupplier/'+suppliers._id,suppliers)
    },
    deleteSupplier(id){
        return domain().delete('supplier/deletesupplier/:supplierId'+id)
    }
};
