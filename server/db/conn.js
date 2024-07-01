const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: "freedb_root_user",
    host: "sql.freedb.tech",
    password: "d!gc94%2J8Z@YT2",
    database: "freedb_crudmysql",
});

conn.connect((err) =>{
    if(err) throw err;
    console.log("Database connected successfully");
});

module.exports = conn;