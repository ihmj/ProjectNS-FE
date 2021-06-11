class ItemController extends BaseController {
    constructor() {
        super()
        this.displayItems()
    }

    newItem() {
        let quantity = $("#fieldQuantity").value
        let thing = $("#fieldThing").value
        if ((quantity === "") || (thing === "")|| (thing === null) || (quantity === null)) {
            M.toast({html: 'Tous les champs sont obligatoires'})
            return
        }
        this.modellist.insert(new list(quantity,thing))
        this.displayList()
    }
    delItem() {

    }
    displayItems() {
        const items = this.modelitem.getItems
        let html = ""
        for(let item of items) {
            html += `<tr>
                <td>${item.quantity}</td>
                <td>${item.thing}</td> 
                <td style="width: fit-content;"><button class="btn" type="button" onclick="itemController.delete(item.id)" >-</button></td>
                </tr>`
        }
        $('#listTable').innerHTML = html
    }


}

window.itemController = new ItemController()