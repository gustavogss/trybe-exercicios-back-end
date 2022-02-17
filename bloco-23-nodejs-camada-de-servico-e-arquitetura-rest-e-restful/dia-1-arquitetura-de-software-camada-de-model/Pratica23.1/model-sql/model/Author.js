const connection = require("./connnection");

const getAll = async () => {
  const result = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM authors"
  );
  return result;
};
module.exports = {
  getAll,
};
