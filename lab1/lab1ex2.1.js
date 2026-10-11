const values = [
  true,
  "hello",
  5,
  12,
  -200,
  false,
  false,
  "word",
  null,
  67,
  "JavaScripting",
  true,
  "uhhh",
  2026,
  undefined,
  "Perchance",
];


const counts = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
};

for (const value of values) {
  const type = typeof value;
  counts[type]++;
}

console.dir(counts);