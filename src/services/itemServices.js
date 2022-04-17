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
    return domain().get('item/'+id)
    }
    // updateUser(user){
    // return domain().put('invoice/'+user._id,user)
    // },
    // deleteUser(id){
    // return domain().delete('invoice/'+id)
    // }
};

