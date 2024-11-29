const { getDatabase } = require("../Services/databaseConnector");

const getCategories = async (req, res) => {
  try {
    const db = await getDatabase();
    const categories = await db.query(
      "SELECT `categories`.`id`, `categories`.`name`, COUNT(`furniture`.`category`) AS 'products' FROM `categories` JOIN `furniture` ON `categories`.`id` = `furniture`.`category` GROUP BY `categories`.`id`;"
    );
    res.status(200).json({
      message: "Successfully retrieved categories",
      data: categories,
    });
  } catch {
    res.status(500).json({ message: "Unexpected error", data: [] });
  }
};

module.exports = { getCategories };
