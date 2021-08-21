# API Calculator

## Request
### Exemple:

* **method** : post
* localhost/3000/calculate

#### **Body:**
```javascript
{
	"numberOne":10,
	"numberTwo":2,
	"operation": "/"
}
...
#### **Response**:
```javascript

{
  "result": 5
}
...
### Parameters
* *numberOne* only type number
* *numberTwo* only type number
* *operation* operators only (+ , -, *, /)
