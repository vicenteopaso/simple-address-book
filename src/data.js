let content, dummyContent = [
  {
    "id": "5bfccc932d70ba0a19e79070",
    "index": 0,
    "name": {
      "first": "Franks",
      "middle": "Flynn",
      "last": "Mccormick"
    },
    "email": "franks.mccormick@goggle.name",
    "country": "IE"
  },
  {
    "id": "5bfccc93b81203a1a29b08f5",
    "index": 1,
    "name": {
      "first": "Dominguez",
      "middle": "Vivian",
      "last": "Oneil"
    },
    "email": "dominguez.oneil@goggle.us",
    "country": "KM"
  },
  {
    "id": "5bfccc936a792b6a47751d18",
    "index": 2,
    "name": {
      "first": "Cheryl",
      "middle": "Velasquez",
      "last": "Leach"
    },
    "email": "cheryl.leach@goggle.io",
    "country": "IQ"
  },
  {
    "id": "5bfccc93beca8e7aff85c3cb",
    "index": 3,
    "name": {
      "first": "Mack",
      "middle": "Alta",
      "last": "Chaney"
    },
    "email": "mack.chaney@goggle.biz",
    "country": "CI"
  },
  {
    "id": "5bfccc933bc5d2c5a2b6d21a",
    "index": 4,
    "name": {
      "first": "Gwen",
      "middle": "Carey",
      "last": "Dominguez"
    },
    "email": "gwen.dominguez@goggle.org",
    "country": "SJ"
  },
  {
    "id": "5bfccc9342e5f6c20ec1c7e0",
    "index": 5,
    "name": {
      "first": "Kelly",
      "middle": "Lila",
      "last": "Hill"
    },
    "email": "kelly.hill@goggle.com",
    "country": "NE"
  },
  {
    "id": "5bfccc93bcfe9e974e14b5ae",
    "index": 6,
    "name": {
      "first": "Constance",
      "middle": "Hallie",
      "last": "Taylor"
    },
    "email": "constance.taylor@goggle.tv",
    "country": "PE"
  },
  {
    "id": "5bfccc935e9d6fd390fa9796",
    "index": 7,
    "name": {
      "first": "Shannon",
      "middle": "Tamera",
      "last": "Price"
    },
    "email": "shannon.price@goggle.me",
    "country": "GP"
  },
  {
    "id": "5bfccc9371c8bf21cd5cc538",
    "index": 8,
    "name": {
      "first": "Marcella",
      "middle": "Green",
      "last": "Mccarty"
    },
    "email": "marcella.mccarty@goggle.ca",
    "country": "SI"
  },
  {
    "id": "5bfccc93195717741b8af6db",
    "index": 9,
    "name": {
      "first": "Kristie",
      "middle": "Key",
      "last": "Myers"
    },
    "email": "kristie.myers@goggle.info",
    "country": "BI"
  }
];

if (localStorage.hasOwnProperty('SimpleAddressBook')) {
  content = JSON.parse(localStorage.getItem('SimpleAddressBook'))
  console.log('Loading from localStorage')
} else {
  localStorage.setItem('SimpleAddressBook', JSON.stringify(dummyContent))
  content = dummyContent
  console.log('Loading dummyContent')
}

export { content }