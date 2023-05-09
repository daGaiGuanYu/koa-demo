const { simple } = require('./_base')

const { insert } = require('../service/db/insert')
const { update } = require('../service/db/update')
const { retrieve_by_id } = require('../service/db/retrieve')
const { del_by_id } = require('../service/db/del')

module.exports = simple(
  {
    prefix: '/restful'
  },
  router => {
    router.get('/', async ({ respond, knex }) => {
      respond.json(await knex.demo)
    })
    
    router.get('/:id', async ({ params, respond, knex }) => {
      respond.json(await retrieve_by_id(knex.demo, params.id))
    })
    
    router.post('/', async ({ request, respond, knex }) => {
      respond.str(
        await insert(knex.demo, request.body)
      )
    })
    
    router.post('/:id', async ({ request, params, respond, knex }) => {
      respond.str(
        await update(knex.demo, params.id, request.body)
      )
    })
    
    router.delete('/:id', async ({ params, respond, knex }) => {
      respond.str(
        await del_by_id(knex.demo, params.id)
      )
    })
  }
)