// commands to fetch data from database 
// database name --> employee
// collection name --> inventory

db.inventory.find() // fetch all documents
db.inventory.find({qty: 80})
db.inventory.find({ tags: { $in: [ "brew", "D" ] } })
db.inventory.find({ status: "A", qty: { $lt: 30 } })
db.inventory.find({ $or: [ { status: "A" }, { qty: { $lt: 96 } } ] })