const findAll = async (req,res) =>{
    try {
      const products = await req.context.models.products.findAll({
      }) 
      return res.send(products) 
    } catch (error) {
        return res.status(404).send(error)
    }
}

  const findOne=async (req,res)=>{
    try{
        const products = await req.context.models.products.findOne({
            include : [{
                model : req.context.models.products_categories,
                as : "id_product_products_category"
            }],
            where: { id_product: req.params.id }
        })
        return res.send(products)
    }catch(error){
        return res.status(404).send(error)
    }
}
  
const create = async (req,res) =>{
    const {files, fields} = req.fileAttrb
    try {
        const products = await req.context.models.products.create({
            id_product : fields[0].value,
            id_product_category : fields[1].value,
            nama_product : fields[2].value,
            product_description : fields[3].value,
            price : fields[4].value,
            product_image : files[0].file.newFilename
        })
        return res.send(products)
    } catch (error) {
        return res.status(404).send(error)
    }
}


const update=async (req,res)=>{
    const {files,fields}=req.fileAttrb
    try{
        const products = await req.context.models.products.update({
            id_product_category : fields[0].value,
            nama_product : fields[1].value,
            product_description : fields[2].value,
            price : fields[3].value,
            product_image : files[0].file.newFilename
        },{returning :true,where:{id_product: req.params.id}})
        return res.send(products)
    }catch(error){
        return res.status(404).send(error)
    }
}

const deleted=async (req,res)=>{
    try{
        const products=await req.context.models.products.destroy({
            where:{id_product: req.params.id}
        })
        return res.send('delete '+products+' rows')
    }catch(error){
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted
}