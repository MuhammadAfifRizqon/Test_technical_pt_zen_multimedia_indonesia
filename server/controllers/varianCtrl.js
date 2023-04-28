const findAll = async(req, res) => {
    try {
        const varian = await req.context.models.varians.findAll({
        })
        return res.json({ varian : varian ,message: "varians data succes fetch" })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const varian = await req.context.models.varians.findOne({
            include: [{
                model: req.context.models.products,
                as: "id_varians_product"
            }],
       where : { id_varians : req.params.id } })
        return res.send(varian)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async(req, res) => {
    try {
        const varian = await req.context.models.varians.create({
        id_product : req.body.id_product,
        nama_varians : req.body.nama_varians
        })
        return res.send(varian)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async(req, res) => {
    try {
        const varian = await req.context.models.varians.update({
        id_product : req.body.id_product,
        nama_varians : req.body.nama_varians
        },{returning :true,where : { id_varians : req.params.id }})
        return res.res.send(varian)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req, res) => {
    try {
        const varian = await req.context.models.varians.destroy({
            where: { id_varians: req.params.id }
        })
        return res.send('deleted ' + varian + ' rows')
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