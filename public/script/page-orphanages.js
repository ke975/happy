//create mapa 


const map = L.map('mapid').setView([13.09937,-86.3351369], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 

).addTo(map);
//criar um icone em leaf let

const icon = L.icon({
iconUrl: "/images/map-marker.svg",
iconSize:[58,68],
iconAmchor:[170,2]
})



function addMarker({id,name,lat,lng}){


    const popup = L.popup({
        closeButton: false,
        className:'map-popup',
        minWidth:240,
        minHeight:240
    }).setContent(`${name}<a href="/orphanage?id=${id} "><img src="/images/arrow-white.svg"</a>`)
    
    L
    .marker([lat,lng],{icon})
    .addTo(map)
        .bindPopup(popup)
    
}

const orphanagesSpan= document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span =>{
    const orphanage ={
        id:span.dataset.id,
        name:span.dataset.name,
        lat:span.dataset.lat,
        lng:span.dataset.lng
    }
    addMarker(orphanage)
})
//create popup overlay

