require('dotenv').config();

const mongoose = require('mongoose');

const Place = require('../models/Place');

const Review = require('../models/Review');

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected to DB: " + process.env.DB_URL);
});

const places = [{
            reviews: [],
            name: "Cafetería Milán",
            description: "Sirven desayunos y meriendas",
            url: "bares-restaurantes",
            trustLevel: "2",
            lat: "40.415268",
            lng: "-3.698606",
            address: "Calle de Cervantes, 11",
            cp: "28014",
            city: "Madrid",
            upload: "https://www.anzze.com/wp-content/uploads/2017/05/cafeteria.jpg",

        },
        {
            reviews: [],
            name: "Kumba",
            description: "Pub nocturno",
            url: "bares-restaurantes",
            trustLevel: "5",
            lat: "40.403891, ",
            lng: "-3.697131",
            address: "Paseo de Santa María de la Cabeza, 42",
            cp: "28045",
            city: "Madrid",
            upload: "https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg",

        },
        {
            reviews: [],
            name: "Bar la Reja",
            description: "Bar de tapas asturianas",
            url: "bares-restaurantes",
            trustLevel: "2",
            lat: "40.416260",
            lng: "-3.691350",
            address: "Calle del Gral. Pardiñas, 56",
            cp: "28001",
            city: "Madrid",
            upload: "http://tmsillerias.com/wp-content/uploads/2014/07/My-Little-Spanish-Place-Singapore-620x344.jpg"

        },

        {
            reviews: [],
            name: "Delaware",
            description: "Discoteca",
            url: "bares-restaurantes",
            trustLevel: "3",
            lat: "40.422950",
            lng: "-3.699639",
            address: "Calle de las Conchas, 6",
            cp: "28013",
            city: "Madrid",
            upload: "http://glup-glup.com/sites/default/files/images/Cola(1).jpg"

        },
        {
            reviews: [],
            name: "El tiradito",
            description: "Restaurante peruano",
            url: "bares-restaurantes",
            trustLevel: "3",
            lat: "40.432350",
            lng: "-3.709973",
            address: "Calle de Meléndez Valdés, 7",
            cp: "28015",
            city: "Madrid",
            upload: "http://media-cache-ec0.pinimg.com/originals/69/3f/92/693f92dca5bcb6d64b14a72c93e43b9c.jpg"

        },
        {
            reviews: [],
            name: "Mesón Paco",
            description: "restaurante tradicional",
            url: "bares-restaurantes",
            trustLevel: "3",
            lat: "40.408974, ",
            lng: "-3.712723",
            address: "Calle de Toledo, 86",
            cp: "28005",
            city: "Madrid",
            upload: "http://glup-glup.com/sites/default/files/images/Cola(1).jpg"

        }];


        Place.create(places, (err, docs) => {
            if (err) {
                throw err;
            };

            docs.forEach((cel) => {
                console.log(cel.name);
            });
        });


        Place.collection.drop();