var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Main class Locations
var Locations = /** @class */ (function () {
    function Locations(nameLocation, address, zipCode, city, image, date, time) {
        this.nameLocation = "";
        this.address = "";
        this.zipCode = 0;
        this.city = "";
        this.image = "";
        this.date = "";
        this.time = "";
        this.nameLocation = nameLocation;
        this.address = address;
        this.zipCode = zipCode;
        this.city = city;
        this.image = image;
        this.date = date;
        this.time = time;
    }
    Locations.prototype.display = function () {
        return "<div class=\"card px-2 py-2 mb-3\">\n                    <img src=\"img/" + this.image + "\" class=\"card-img-top\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">" + this.nameLocation + "</h5>\n                      <p class=\"card-text\">&#128205; " + this.address + ", " + this.zipCode + ", " + this.city + "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                      <small class=\"text-muted\">From Admir, " + this.date + ", " + this.time + "</small>\n                    </div>\n                </div>\n               ";
    };
    return Locations;
}());
//class Restaurant that extends Locations
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(nameLocation, address, zipCode, city, image, date, time, telephoneNumber, type, webAddress) {
        var _this = _super.call(this, nameLocation, address, zipCode, city, image, date, time) || this;
        _this.telephoneNumber = 0;
        _this.type = "";
        _this.webAddress = "";
        _this.telephoneNumber = telephoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"card px-2 py-2 mb-3\">\n                    <img src=\"img/" + this.image + "\" class=\"card-img-top\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">" + this.nameLocation + "</h5>\n                      <p class=\"card-text\">&#128205; " + this.address + ", " + this.zipCode + ", " + this.city + ", " + this.telephoneNumber + "</p>\n                      <p class=\"card-text\">" + this.type + "</p>\n                      <a href=\"" + this.webAddress + "\" target=\"_blank\" class=\"card-link\">" + this.webAddress + "</a>\n                    </div>\n                    <div class=\"card-footer\">\n                      <small class=\"text-muted\">From Admir, " + this.date + ", " + this.time + "</small>\n                    </div>\n                </div>\n               ";
    };
    return Restaurant;
}(Locations));
//class Events that extends Locations
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(nameLocation, address, zipCode, city, image, date, time, price, webAddress) {
        var _this = _super.call(this, nameLocation, address, zipCode, city, image, date, time) || this;
        _this.price = 0;
        _this.webAddress = "";
        _this.price = price;
        _this.webAddress = webAddress;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"card px-2 py-2 mb-3\">\n                    <img src=\"img/" + this.image + "\" class=\"card-img-top\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">" + this.nameLocation + "</h5>\n                      <p class=\"card-text\">&#128205; " + this.address + ", " + this.zipCode + ", " + this.city + "</p>\n                      <p class=\"card-text\">" + this.price + "</p>\n                      <a href=\"" + this.webAddress + "\" target=\"_blank\" class=\"card-link\">" + this.webAddress + "</a>\n                    </div>\n                    <div class=\"card-footer\">\n                      <small class=\"text-muted\">From Admir, " + this.date + ", " + this.time + "</small>\n                    </div>\n                </div>\n               ";
    };
    return Events;
}(Locations));
// Create the array to push data from the classes
var data = [];
// Create new objects for Locations and push data to array
var location1 = new Locations('Karlskirche', 'Karlsplatz 1', 1010, 'Vienna', 'karlskirche.jpg', '03/15/2020', '12:45');
var location2 = new Locations('Schönbrunn Park', 'Maxingstrasse 13b', 1130, 'Vienna', 'schonbrunn.jpg', '04/17/2020', '17:45');
data.push(location1);
data.push(location2);
// Create new objects for Restaurant and push data to array
var restaurant1 = new Restaurant('Café Central', 'Corner Herrengasse', 1010, 'Vienna', 'c_central.jpg', '04/04/2020', '10:30', '+43(1) 533376361', 'Viennese', 'https://www.cafecentral.wien');
var restaurant2 = new Restaurant('The Palmenhaus', 'Burggarten 1', 1010, 'Vienna', 'p_haus.jpg', '03/17/2020', '14:45', '+43(1) 533 10 33', 'German, Austrian, or Swiss', 'https://www.palmenhaus.at');
var restaurant3 = new Restaurant('Café Museum', 'Maria Theresien Platz 1', 1010, 'Vienna', 'museum.jpg', '01/15/2020', '12:45', '+43(0) 50 876 1001', 'Viennese', 'http://www.restaurant-on.at');
var restaurant4 = new Restaurant('Aend Restaurant', 'Mollardgasse 76', 1060, 'Vienna', 'gourmet.jpg', '01/17/2020', '18:00', '+43(1) 5953416', 'Gourmet', 'http://aend.at');
data.push(restaurant1);
data.push(restaurant2);
data.push(restaurant3);
data.push(restaurant4);
// Create new objects for Events and push data to array
var events1 = new Events('Cats - the musical', 'Ronacher - Seilerstätte 9', 1010, 'Vienna', 'musical.jpg', '09/06/2020', '20:00', '120 &euro;', 'http://catsmusical.at');
var events2 = new Events('Guns Roses', 'Ernst-Happel Stadion, Meiereistraße 7', 1020, 'Vienna', 'guns.jpg', '12/15/2020', '19:30', '95,50 &euro;', 'www.gunsandroses.com');
data.push(events1);
data.push(events2);
//add array data to html
function addData(type) {
    $("#wrapper").text("");
    if (type === "asc") {
        data.sort(function (a, b) {
            return Number(new Date(a.date + ' ' + a.time)) - Number(new Date(b.date + ' ' + b.time));
        });
    }
    else if (type === "desc") {
        data.sort(function (a, b) {
            return Number(new Date(b.date + ' ' + b.time)) - Number(new Date(a.date + ' ' + a.time));
        });
    }
    data.forEach(function (value) {
        $("#wrapper").append(value.display());
    });
}
//call the function 
addData("");
//onclick ascending function
$("body").on("click", "#asc", function (e) {
    e.preventDefault();
    addData("asc");
});
//onclick descending function
$("body").on("click", "#desc", function (e) {
    e.preventDefault();
    addData("desc");
});
