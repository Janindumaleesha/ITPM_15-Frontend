import domain from '../services/domain'

export default {
    getAllInvoices() {
    //Using axios object
        return domain().get('invoice/getinvoice')
    },
    addInvoice(invoice){
        return domain().post('invoice/addinvoice',invoice)
    },
    getInvoiceById(id){
        return domain().get('invoice/getinvoiceid/'+id)
    },
    updateInvoice(invoices){
        
        return domain().put('invoice/updateinvoice/'+invoices._id,invoices)
    },
    deleteInvoice(id){
        return domain().delete('invoice/deleteinvoice/:invoiceId'+id)
    }
};

