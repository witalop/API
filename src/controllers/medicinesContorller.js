const knex = require('../database')

module.exports = {

    async printAllData(req, res) {
        const results = await knex('medicines')
        return res.json(results)
    }

}