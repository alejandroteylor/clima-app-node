//const axios = require('axios');
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;
let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`
    } catch (e) {
        return `no se pudo determinar el clima en ${ direccion }`
    }

}

/*lugar.getLugarLatLng(argv.direccion)
.then(resp => {
    console.log(resp);
})
.catch(e => console.log(e));*/

//console.log(argv.direccion);
/*let encodedUrl = encodeURI(argv.direccion)

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
    .then(resp => {
        let location = resp.data.results[0];
        let coors = location.geometry.location;

        console.log('Direccion', location.formatted_address);
        console.log('Lat', coors.lat);
        console.log('Lng', coors.lng);
        //console.log(JSON.stringify(resp.data, undefined, 2));
        //console.log(resp.status);
    })
    .catch(e => console.log('ERROR!!!', e));*/

/*clima.getClima(9.9280694, -84.0907246)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));*/

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))