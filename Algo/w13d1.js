const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };

const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
    };
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.


function insert(tableName, columnValuePairs) {
    const keys = Object.keys(columnValuePairs);
    const values = Object.values(columnValuePairs);
    if (keys.length == 0) return null;

    let valuesWithQuotes = values.map(value => typeof value == "string" ? "'" + value + "'" : value);
    return `INSERT INTO ${tableName} (${keys.toString()}) VALUES (${valuesWithQuotes.toString()}) ;`; 
}


console.log(insert(table, insertData2));

/*****************************************************************************/