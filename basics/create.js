// database name --> employee
// collection name --> inventory

db.inventory.insertOne({ item:"Sugar", qty: 100, tags:["food"]})
db.inventory.insertMany([
    { item:"Sugar", qty: 100, tags:["food"]},
    { item:"Cotton", qty: 100, tags:["material"]},
    { item:"Salt", qty: 100, tags:["food"]},
    { item:"Chips", qty: 100, tags:["food"]},
    { item:"Biscuits", qty: 100, tags:["food"]},
    { item:"Coffee", qty: 100, tags:["brew"]},
    { item:"Tea Bags", qty: 100, tags:["brew"]},
    { item:"Spoons", qty: 100, tags:["crockery"]},
    { item:"Plates", qty: 100, tags:["crockery"]}
])