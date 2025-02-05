```javascript
// Solution: add stricter data validation or normalization before insertion, or refine the regex
// Example using stricter regex
const query = { name: /^John$/i }; // Exact match case-insensitive
//Or
const query = { name: { $regex: /John/i, $options: 'i'}};

//Consider data normalization
// For example, convert all names to lowercase before insertion into the database.

const cursor = db.collection('users').find(query);

while (await cursor.hasNext()) {
  const doc = await cursor.next();
  console.log(doc);
}
```