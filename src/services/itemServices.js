import domain from '../services/domain'

export default {
    getAllItems() {
    //Using axios object
    return domain().get('item/getitem')
    },
    addItem(item){
    return domain().post('item/additem',item)
    },
    getItemById(id){
        return domain().get('item/getitemid/'+id)
    },
    updateItem(items){  
        return domain().put('item/updateitem/'+items._id,items)
    },
    deleteItem(id){
        return domain().delete('item/deleteitem/:itemId'+id)
    }
};

