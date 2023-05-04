migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1v77stakq4uvqyw")

  collection.listRule = "sender = @request.auth.username"
  collection.viewRule = "sender = @request.auth.username"
  collection.createRule = "sender = @request.auth.username"
  collection.updateRule = "sender = @request.auth.username"
  collection.deleteRule = "sender = @request.auth.username"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1v77stakq4uvqyw")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
