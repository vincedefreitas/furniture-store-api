const { getDatabase } = require("../Services/databaseConnector");
const { convertFromMillimetres } = require("../Services/measurementConverter");

const getProduct = async (req, res) => {
  let currencies = ["GBP", "USD", "EUR", "YEN"];
  let id = req.query.id;
  let currency = req.query.currency;
  let unit = req.query.unit;
  let query =
    "SELECT `category` AS 'categoryId', `width`, `height`, `depth`, `price`, `stock`, `related`, `color` FROM `furniture` WHERE `id` = ";
  query += `${id};`;

  try {
    const db = await getDatabase();
    const product = await db.query(query);

    product[0].width = convertFromMillimetres(unit, product[0].width);
    product[0].height = convertFromMillimetres(unit, product[0].height);
    product[0].depth = convertFromMillimetres(unit, product[0].depth);

    if (!product.length) {
      return res.status(400).json({ message: "Invalid product id", data: [] });
    }

    if (currency && !currencies.includes(currency)) {
      return res.status(400).json({ message: "Invalid currency", data: [] });
    }

    res.status(200).json({
      message: "Successfully retrieved product",
      data: product[0],
    });
  } catch {
    res.status(500).json({ message: "Unexpected error", data: [] });
  }
};

module.exports = { getProduct };
