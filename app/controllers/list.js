class ListController extends BaseController {
    constructor() {
        super()
        this.tableAllLists = $('#tableAllLists')
        this.tableBodyAllLists = $('#tableBodyAllLists')
        this.displayAllLists()
    }

    async displayAllLists() {
        let content = ''

        const lists = await this.modellist.getAllLists()

        this.tableAllLists.style.display = "none"
        try {
            for (const list of lists) {
                if (!list.sup){
                    const date = list.date.toLocaleDateString()
                    content += `<tr><td>${list.shop}</td>
                    <td>${date}</td>
                    <td class="icon">
                    <button class="btn" onclick="listController.displayConfirmDelete(${list.id})"><i class="material-icons">delete</i></button>
                    <button class="btn" onclick="listController.edit(${list.id})"><i class="material-icons">edit</i></button>
                    </td></tr>`
                }

            }
            this.tableBodyAllLists.innerHTML = content
            this.tableAllLists.style.display = "block"
        } catch (err) {
            console.log(err)
            this.displayServiceError()
        }
    }








    async edit(id) {
        try {
            const object = await this.modellist.getList(id)
            if (object === undefined) {
                this.displayServiceError()
                return
            }
            if (object === null) {
                this.displayNotFoundError()
                return
            }
            this.selectedList = object
            navigate("edit")
        } catch (err) {
            console.log(err)
            this.displayServiceError()
        }
    }

    undoDelete() {
        if (this.deletedList) {
            this.modellist.insert(this.deletedList).then(status => {
                if (status === 200) {
                    this.deletedList = null
                    this.displayUndoDone()
                    this.displayAllLists()
                }
            }).catch(_ => this.displayServiceError())
        }
    }

    async displayConfirmDelete(id) {
        try {
            const list = await this.modellist.getList(id)
            super.displayConfirmDelete(list, async () => {
                switch (await this.modellist.delete(id)) {
                    case 200:

                        break
                    case 404:
                        this.displayNotFoundError();
                        break
                    default:
                        this.displayServiceError()
                }
                await this.displayAllLists()
            })
        } catch (err) {
            console.log(err)
            this.displayServiceError()
        }
    }
}

window.listController = new ListController()
