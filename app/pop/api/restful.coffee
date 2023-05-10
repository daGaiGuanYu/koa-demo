{ simple } = require('./_base')

{ insert } = require '../service/db/insert'
{ update } = require '../service/db/update'
{ retrieve_by_id } = require '../service/db/retrieve'
{ del_by_id } = require '../service/db/del'

module.exports = simple(
  prefix: '/restful'
  
  ({ GET, POST, DELETE }) ->
    GET ({ respond, knex }) ->
      respond.json await knex.demo
    
    GET '/:id', ({ params, respond, knex }) ->
      respond.json await retrieve_by_id(knex.demo, params.id)
    
    POST ({ request, respond, knex }) ->
      respond.str(
        await insert(knex.demo, request.body)
      )
    
    POST '/:id', ({ request, params, respond, knex }) ->
      respond.str(
        await update(knex.demo, params.id, request.body)
      )
    
    DELETE '/:id', ({ params, respond, knex }) ->
      respond.str(
        await del_by_id(knex.demo, params.id)
      )
)