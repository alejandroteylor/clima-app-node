const lugar = require('./lugar/lugar1');
const clima = require('./clima/clima1');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;

    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }

}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/*const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
let encodedUrl = encodeURI(argv.direccion)

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