const { getDatabase } = require("../Services/databaseConnector");

const getProducts = async (req, res) => {
  let currencies = ["GBP", "USD", "EUR", "YEN"];
  let cat = req.query.cat;
  let inStockOnly = req.query.instockonly;
  let currency = req.query.currency;
  let query =
    "SELECT `id`, `price`, `stock`, `color` FROM `furniture` WHERE `category` = ";
  query += `${cat}`;

  if (inStockOnly === "1") {
    query += " AND `stock` > 0;";
  }

  try {
    const db = await getDatabase();
    const products = await db.query(query);

    if (!products.length) {
      return res.status(400).json({ message: "Invalid category id", data: [] });
    }

    if (currency && !currencies.includes(currency)) {
      return res.status(400).json({ message: "Invalid currency", data: [] });
    }

    res.status(200).json({
      message: "Successfully retrieved products",
      data: products,
    });
  } catch {
    res.status(500).json({ message: "Unexpected error", data: [] });
  }
};

module.exports = { getProducts };
