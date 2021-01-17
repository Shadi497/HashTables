const prompt = require("prompt-sync")({ sigint: true });

const students = [
  { name: "Jean-Luc Garza", score: 24 },
  { name: "Teddy Munoz", score: 79 },
  { name: "Georgia Ali", score: 17 },
  { name: "Vicky Calhoun", score: 8 },
  { name: "Awais Weaver", score: 65 },
  { name: "Athena Kline", score: 52 },
  { name: "Zacharia Whitaker", score: 38 },
  { name: "Clarice Davenport", score: 99 },
  { name: "Viktoria Flynn", score: 84 },
  { name: "Ianis Crossley", score: 20 },
  { name: "Johnnie Owens", score: 74 },
  { name: "Emily-Rose Erickson", score: 33 },
  { name: "Adeel Nieves", score: 100 },
  { name: "Dustin Villegas", score: 98 },
  { name: "Maxine Hughes", score: 65 },
  { name: "Bilaal Harding", score: 79 },
  { name: "Maddie Ventura", score: 71 },
  { name: "Leroy Rees", score: 44 },
  { name: "Wanda Frank", score: 73 },
  { name: "Margaux Herbert", score: 80 },
  { name: "Ali Rios", score: 70 },
  { name: "Nigel Santiago", score: 25 },
  { name: "Markus Greene", score: 78 },
  { name: "Harlan Parrish", score: 97 },
  { name: "Baran Davidson", score: 43 },
  { name: "Seth Rodriguezh", score: 67 },
  { name: "Diego Mayer", score: 100 },
];

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
  }

  hash = (key) => {
    const encoded = new TextEncoder("utf-8").encode(key);
    const hashCode = encoded.reduce((a, b) => {
      return a + b;
    }, 0);

    return hashCode;
  };

  compress = (hashCode) => {
    return hashCode % this.classSize;
  };

  insert = (key, value) => {
    while (true) {
      const hashCode = this.hash(key);
      const index = this.compress(hashCode);

      if (value >= 90) {
        this.classes.A[index] = [key, value];
      } else if (value >= 80 && value < 90) {
        this.classes.B[index] = [key, value];
      } else if (value >= 70 && value < 80) {
        this.classes.C[index] = [key, value];
      } else if (value >= 60 && value < 70) {
        this.classes.D[index] = [key, value];
      } else if (value < 60) {
        this.classes.Other[index] = [key, value];
      }
      break;
    }
  };

  lookup = (key) => {
    while (true) {
      const hashCode = this.hash(key);
      const index = this.compress(hashCode);
      let currentValue = this.classes[index];

      const found = currentValue.find((element) => element === key);

      return found;
    }
  };
}

let maxnum = prompt(`Enter the maximum number of students in class.  `);
const hashTable = new HashTable(maxnum);

for (let i = 0; i < students.length; i++) {
  hashTable.insert(students[i].name, students[i].score);
}

console.log(hashTable.classes.A.filter((n) => n));
console.log(hashTable.classes.B.filter((n) => n));
console.log(hashTable.classes.C.filter((n) => n));
console.log(hashTable.classes.D.filter((n) => n));
console.log(hashTable.classes.Other.filter((n) => n));
