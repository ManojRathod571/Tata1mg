# cart API

<!-- add to cart -->

# cart api need headers and body.

headers-
1: key: token
2: value: example(abcd@1234)

body-
1: product:example(639809a489776d408d4e233e)
2: quantity: 1.

# initially quantity will be one only. quantity should not be more than 3 if it is more than 3 then product will be out of stock.

# we can increment and decrement the product quantity.

url = axios.post(`${process.env.REACT_APP_URL}/cart`, body);

<!-- To increment and decrement quantity of product -->

# increment

{
"product":"639809a489776d408d4e232a",
"quantity":"1",
"type":"inc"
}

# decrement

{
"product":"639809a489776d408d4e232a",
"quantity":"1",
"type":"dec"
}

<!-- delete from cart -->

# Delete product from cart

# pass token in headers and id will product id that user want to delete from cart

url = axios.post(`${process.env.REACT_APP_URL}/cart/:id`);

# To Start server use below command

- npm start

# Base URL

-http://localhost:8000

# for login and signup

- Signup

url = axios.post(`${process.env.REACT_APP_URL}/user/signup`, body)

- login

url = axios.post(`${process.env.REACT_APP_URL}/user/login`, body)

# for product_page

- queries will come as per the requirement

### category => filter by category =>

- query => ?category=${category}
- from the frontend, onClick =>{()=> handle(" category will be here as per the page ")}

### q => filter by input serach (for debouncing & throttling) =>

- query => ?category=${category}&q=${q}
- from the frontend, onClick =>{()=> handle(input)} => input which is coming form state

### sort => sorting by price1 ( "asc" , "desc") =>

- query ==> ?category=${category}&sort=${"asc" or "desc"}
- from the frontend, onClick =>{()=> handleSort("asc" or "desc")}

<!-- ### arr => price b/w two number (i.e. gte 20 and lt 1000) =>

- query ==> ?category=${category}&arr=${arr}
- from the frontend, onClick =>{()=> handleSort("20,1000")} -->

### off => sorting by %off ("desc")

- query ==> ?category=${category}&off=${asc or desc}
- from the frontend, onClick =>{()=> handleSort("asc" or "desc")}

### offSet => %discount b/w two number (i.e. gte 10 and lt 35) => query

- query ==> ?category=${category}&offSet=${offSet}
- from the frontend, onClick =>{()=> handle("10,35")}

### firstLetter => filter by first letter (in medicine category)

- query ==> ?category=${category}&firstLetter=${firstLetter}
- from the frontend, onClick =>{()=> handle("A/B/C/D.... => as per the state")}

# USE ONLY ONE URL i.e. ONLY ONE API IN PRODUCT ACTION

url = axios.get(`${process.env.REACT_APP_URL}/product?category=${category}&q=${q}&sort=${sort}&arr=${arr}&off=${off}&offSet=${offSet}&firstLetter=${firstLetter}&page=${page}&limit=${limit}`)

- please change the query in the dispatch function from frontend,

### URL, POST, SECRET_KEY

## categories

"category":"healthPackages", "category": "labtest", "category": "ayurvedic", "category": "babycare", "category": "diabetes", "category": "disinfactents", "category": "healthcareDevices", "category": "healthFood", "category": "immunity", "category": "medicine", "category": "sale", , "category": "mens", "category": "skincare", "category": "stomach",
