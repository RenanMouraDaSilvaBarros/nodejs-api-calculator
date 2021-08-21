# API Calculator

## Request
### Exemple:

* **method** : post
* localhost/3000/calculate

#### **Body:**
{
	"numberOne":10,
	"numberTwo":2,
	"operation": "/"
}
##### **response**:
{
  "result": 5
}
### Parameters
* *numberOne* only type number
* *numberTwo* only type number
* *numberOne* operators only (+ , -, *, /)