//Main class Locations
class Locations {
    nameLocation = "";
    address = "";
    zipCode = 0;
    city = "";
    image = ""; 
    date = "";
    time = "";

    constructor(nameLocation, address, zipCode, city, image, date, time) { 
       this.nameLocation = nameLocation;   
       this.address = address;
       this.zipCode = zipCode;
       this.city = city;
       this.image = image;
       this.date = date; 
       this.time = time; 
    }

    display() { 
        return `<div class="card px-2 py-2 mb-3">
                    <img src="img/${this.image}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${this.nameLocation}</h5>
                      <p class="card-text">&#128205; ${this.address}, ${this.zipCode}, ${this.city}</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">From Admir, ${this.date}, ${this.time}</small>
                    </div>
                </div>
               `;
    }
}

//class Restaurant that extends Locations
class Restaurant  extends Locations {
    telephoneNumber = 0;
    type = "";
    webAddress = "";

    constructor(nameLocation, address, zipCode, city, image, date, time, telephoneNumber, type, webAddress) {
       super(nameLocation, address, zipCode, city, image, date, time);
       this.telephoneNumber = telephoneNumber;
       this.type = type;
       this.webAddress = webAddress;
    }

    display() {
        return `<div class="card px-2 py-2 mb-3">
                    <img src="img/${this.image}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${this.nameLocation}</h5>
                      <p class="card-text">&#128205; ${this.address}, ${this.zipCode}, ${this.city}, ${this.telephoneNumber}</p>
                      <p class="card-text">${this.type}</p>
                      <a href="${this.webAddress}" target="_blank" class="card-link">${this.webAddress}</a>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">From Admir, ${this.date}, ${this.time}</small>
                    </div>
                </div>
               `;
    }
}

//class Events that extends Locations
class Events  extends Locations {
    price  = 0;
    webAddress = "";

    constructor(nameLocation, address, zipCode, city, image, date, time, price, webAddress) {
       super(nameLocation, address, zipCode, city, image, date, time);
       this.price = price;
       this.webAddress = webAddress;
    }

    display() {
        return `<div class="card px-2 py-2 mb-3">
                    <img src="img/${this.image}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${this.nameLocation}</h5>
                      <p class="card-text">&#128205; ${this.address}, ${this.zipCode}, ${this.city}</p>
                      <p class="card-text">${this.price}</p>
                      <a href="${this.webAddress}" target="_blank" class="card-link">${this.webAddress}</a>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">From Admir, ${this.date}, ${this.time}</small>
                    </div>
                </div>
               `;
    }
}

// Create the array to push data from the classes
let data = [];

// Create new objects for Locations and push data to array
let location1 = new Locations('Karlskirche', 'Karlsplatz 1', 1010, 'Vienna', 'karlskirche.jpg', '03/15/2020', '12:45');
let location2 = new Locations('Schönbrunn Park', 'Maxingstrasse 13b', 1130, 'Vienna', 'schonbrunn.jpg', '04/17/2020', '17:45');
data.push(location1)
data.push(location2)

// Create new objects for Restaurant and push data to array
let restaurant1 = new Restaurant('Café Central', 'Corner Herrengasse', 1010, 'Vienna', 'c_central.jpg', '04/04/2020', '10:30', '+43(1) 533376361', 'Viennese', 'https://www.cafecentral.wien');
let restaurant2 = new Restaurant('The Palmenhaus', 'Burggarten 1', 1010, 'Vienna', 'p_haus.jpg', '03/17/2020', '14:45', '+43(1) 533 10 33', 'German, Austrian, or Swiss', 'https://www.palmenhaus.at');
let restaurant3 = new Restaurant('Café Museum', 'Maria Theresien Platz 1', 1010, 'Vienna', 'museum.jpg', '01/15/2020', '12:45', '+43(0) 50 876 1001', 'Viennese', 'http://www.restaurant-on.at');
let restaurant4 = new Restaurant('Aend Restaurant', 'Mollardgasse 76', 1060, 'Vienna', 'gourmet.jpg', '01/17/2020', '18:00', '+43(1) 5953416', 'Gourmet', 'http://aend.at');
data.push(restaurant1)
data.push(restaurant2)
data.push(restaurant3)
data.push(restaurant4)

// Create new objects for Events and push data to array
let events1 = new Events('Cats - the musical', 'Ronacher - Seilerstätte 9', 1010, 'Vienna', 'musical.jpg', '09/06/2020', '20:00', '120 &euro;', 'http://catsmusical.at');
let events2 = new Events('Guns Roses', 'Ernst-Happel Stadion, Meiereistraße 7', 1020, 'Vienna', 'guns.jpg', '12/15/2020', '19:30', '95,50 &euro;', 'www.gunsandroses.com');
data.push(events1)
data.push(events2)

//add array data to html
function addData(type) {
    $("#wrapper").text("");

    if (type === "asc") {
        data.sort ((a, b) => {
          return Number(new Date(a.date+' '+a.time)) - Number(new Date(b.date+' '+b.time));
        });
    } else if (type === "desc"){
        data.sort ((a, b) => {
          return Number(new Date(b.date+' '+b.time)) - Number(new Date(a.date+' '+a.time));
        });
    }

    data.forEach(function(value) {
        $("#wrapper").append(value.display());
    });
}

//call the function 
addData("");

//onclick ascending function
$("body").on("click","#asc", function(e) {
    e.preventDefault();
    addData("asc")
});

//onclick descending function
$("body").on("click","#desc", function(e) {
    e.preventDefault();
    addData("desc")
});
