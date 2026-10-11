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

const counts = {};

for (const value of values) {
  const type = typeof value;

  if (counts[type] === undefined) {
    counts[type] = 0;
  }

  counts[type]++;
}

console.dir(counts);