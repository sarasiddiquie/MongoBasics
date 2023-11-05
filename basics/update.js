// database name --> employee
// collection name --> inventory

db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true } //if data not found, it will add new
    }
 )

