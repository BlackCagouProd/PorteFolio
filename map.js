/*--------------open street map via leaflet--------------------------------------------- */
//init map
let map = L.map('carte').setView([40.8079775,29.3568799], 12);

//load tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



//add marker
let marker = L.marker([40.8079775,29.3568799])
    .addTo(map)
marker.bindPopup('<p>gebze technical university</p>')
.openPopup();

// let xhr = new XMLHttpRequest();
// const url = "static/js/communes-nc-limites-terrestres-simplifiees.geojson"
//     // Sur changement de statut
// xhr.onreadystatechange = () => {
//     // Si la transaction est terminée
//     if (xhr.readyState == 4) {
//         // Si la transaction est un succès
//         if (xhr.status == 200) {
//             // On traite le json reçu
//             let data = JSON.parse(xhr.responseText)

//             // On dessine le polygone
//             let geojsonLayer = L.geoJSON(data, {
//                 style: {
//                     "color": "#839c49",
//                     "opacity": 1,
//                     "weight": 1,
//                     "fillColor": "#839c49",
//                     "fillOpacity": 0.5
//                 }
//             });
//             // On ajoute une popup
//             geojsonLayer.bindPopup('');

//             // On ajoute à la carte
//             geojsonLayer.addTo(map);

//         } else {
//             console.log(req.status);
//         }
//     }
// }

// // On ouvre la connexion vers le fichier geojson
// xhr.open('GET', url, true);

// // On envoie la requête
// xhr.send(null);