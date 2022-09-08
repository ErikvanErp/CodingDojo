const express = require("express");
const app = express();

const server = app.listen(8000, () =>
  console.log(`Server is listening on port ${server.address().port}!`)
);

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Hello Express!");
});

// hard code some users
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
    res.json( users );
});

app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json( { status: "ok" } );
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json( users[req.params.id] );
  });

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json( { status: "ok" } );
  });

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.json( { status: "ok" } );
});


