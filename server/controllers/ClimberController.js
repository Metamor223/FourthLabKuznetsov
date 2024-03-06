const {Climbers, Climbings} = require('../models/models')

class ClimberController{
    async create(req, res, next) {
            const {id, name} = req.body
            const climber = await Climbers.create({id,name})
            return res.json(climber)
    }
    async getAll(req,res){
        const climbers = await Climbers.findAll()
        return res.json(climbers)
    }
    async deleteOne(req,res){
        const {id} = parseInt(req.params.id,10)
        try {
            const product = await Climbers.destroy({
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

module.exports = new ClimberController()