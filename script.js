const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach
// companies.forEach(function (company) {
//   console.log(company);
// });

// filter
// for (i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     ages.push(ages[i]);
//   }
// }

// filter retail Companies
// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );

// console.log(retailCompanies);

// Get 80s companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1989
);

console.log(eightiesCompanies);

// Map
// Create array of company names

// const companyNames = companies.map(function (company) {
//   return company.name;
// });

const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

const agesSquare = ages.map((age) => Math.sqrt(age));

console.log(agesSquare);

// Sort

const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

// Sort ages
// const sortAges = ages.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortAges);

// Reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce(function (total, age) {
  return total + age;
}, 0);

console.log(ageSum);

// get total years for all companies

const totalYears = companies.reduce(function (years, company) {
  return years + (company.end - company.start);
}, 0);

console.log(totalYears);

// combine Methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
