const {Mountains} = require('../models/models')

class MountainController{
    async create(req, res, next) {
        const {id, name, height} = req.body
        const mountain = await Mountains.create({id,name,height})
        return res.json(mountain)
    }
    async getAll(req,res){
        const mountains = await Mountains.findAll()
        return res.json(mountains)
    }
    async deleteOne(req,res){
        const {id} = parseInt(req.params.id,10)
        try {
            const product = await Mountains.destroy({
                where: { id: {id} }
            });
            if (product) {
                // Запись была успешно удалена
                return res.json({ message: 'Product deleted successfully' });
            } else {
                // Запись с указанным product_id не была найдена
                return res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new MountainController()