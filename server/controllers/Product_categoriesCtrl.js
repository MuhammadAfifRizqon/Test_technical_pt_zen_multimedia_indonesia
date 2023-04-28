const findAll = async(req, res) => {
    try {
        const categori = await req.context.models.products_categories.findAll({
        })
        return res.json({ product_categori : categori ,message: "categories data succes fetch" })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const categori = await req.context.models.products_categories.findOne({
       where : {id_product_category : req.params.id } })
        return res.send(categori)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async(req, res) => {
    try {
        const categori = await req.context.models.products_categories.create({
        nama_product_category : req.body.nama_product_category
        })
        return res.send(categori)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async(req, res) => {
    try {
        const categori = await req.context.models.products_categories.update({
        nama_product_category : req.body.nama_product_category
        },{returning :true,where : { id_product_category : req.params.id }})
        return res.json({ product_categori : categori ,message: "data successfuly update" })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req, res) => {
    try {
        const categori = await req.context.models.products_categories.destroy({
            where: { id_product_category: req.params.id }
        })
        return res.send('deleted ' + categori + ' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default{
    findAll,
    findOne,
    create,
    update,
    deleted
}