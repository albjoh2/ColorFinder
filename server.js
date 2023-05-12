// import express from "express";
// import fs from "fs";
// import url from "url";
// import cors from "cors";
// import path from "path";

// const app = express();

// app.use(express.json());
// app.use(cors());

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const dataFilePath = path.join(__dirname, "src/assets/data.json");

// app.post("/api/writeData", (req, res) => {
//   const data = req.body;

//   // Read the existing JSON file
//   const fileData = fs.readFileSync(dataFilePath, "utf8");

//   // Parse the JSON data into an object
//   const jsonData = JSON.parse(fileData);

//   // Add the new item to the items array
//   jsonData.items.push(data);

//   // Convert the updated object to JSON string
//   const updatedData = JSON.stringify(jsonData, null, 2);

//   // Write the JSON string back to the file
//   fs.writeFileSync(dataFilePath, updatedData);

//   res.send("Data written to file successfully");
// });

// app.listen(8090, () => {
//   console.log("Server is running on http://localhost:8090");
// });
