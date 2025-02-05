```javascript
const query = { name: /John/i }; // Case-insensitive search

// This query will return documents with name field containing 'john', 'John', 'JOHN', etc.
const cursor = db.collection('users').find(query);

//Iterate through the documents
while (await cursor.hasNext()) {
  const doc = await cursor.next();
  console.log(doc);
}
```