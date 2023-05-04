migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1v77stakq4uvqyw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bofnkzx3",
    "name": "receiver",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1v77stakq4uvqyw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bofnkzx3",
    "name": "reciever",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
