const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db'); 

db.serialize(() => {
  db.run("CREATE TABLE products (id INT, name TEXT, age INT)");
  db.run("INSERT INTO products (id, name, price) VALUES (1, 'Jumper', 4000), (2, 'tshirt', 3000), (3, 'socks', 800), (4, 'fleece', 5000)");

  db.all("SELECT * FROM products", (err, rows) => {
    console.log(rows);
  });
});