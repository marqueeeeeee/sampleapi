const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('{"employee":[{"employee_id":2015081514,"name":"Jericho Soriano","birthday":"1995-01-09","job":"Network Administrator","contact":"09178837315","email":"jericho.soriano@nttdata.com","salary":"35,000.00"},{"employee_id":2015081513,"name":"Adrian Conquilla","birthday":"1996-02-25","job":"iOS Developer","contact":"09178431234","email":"aids.conquilla@nttdata.com","salary":"42,000.00"},{"employee_id":2015081516,"name":"Frangel Ty","birthday":"1992-06-21","job":"Android Developer","contact":"09178436784","email":"frank.ty@nttdata.com","salary":"60,000.00"},{"employee_id":2015081512,"name":"Angeli Delos Reyes","birthday":"1994-08-30","job":"Android Developer","contact":"09178435554","email":"angeli.dr@nttdata.com","salary":"50,000.00"}]}'))

app.get('/getPlaces', (req, res) => {
        var loc = req.query.location
    
        if(loc == 'manila') {
            var makati = Place()
            res.send('{ "places": [{ "name": "Manila Hotel", "photo": "http://images.asiatravel.com/Hotel/787/facade01.jpg", "long": "121.0202", "lat": "14.0202", "phone":"888-88-88", "email" : "john@doe.com"}, { "name": "Manila Zoo", "photo": "https://www.wheninmanila.com/wp-content/uploads/2016/05/The-Manila-Zoo-Will-be-Renovated-Will-Become-World-Class.jpg", "long": "121.0202", "lat": "14.0202", "phone":"888-88-99", "email" : "john@doe.com" }, { "name": "Sofitel", "photo": "https://pix10.agoda.net/hotelImages/240/2402697/2402697_17112504570059844928.jpg?s=1024x768", "long": "121.0202", "lat": "14.0202", "phone":"888-88-77", "email" : "john@doe.com" }]}')
        }
        else if(loc == 'makati') {
            var makati = Place()
            res.send('{ "places": [{ "name": "Corporate 88", "photo": "http://www.condo.com.ph/pro_images/act_26810.jpg", "long": "121.0202", "lat": "14.0202" }]}')
        }
        else {
            res.status(400).send('error')
        }
})

function Place() {
    this.name = 'Condo';
    this.photo = 'http://www.condo.com.ph/pro_images/act_26810.jpg';
    this.longitude = '121.0202';
    this.latitude = '14.0202'
}

app.listen(process.env.PORT, () => console.log('Example app listening on port 3000!'))
