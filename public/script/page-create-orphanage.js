
const map = L.map('mapid').setView([13.09937,-86.3351369], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 

).addTo(map);
//criar um icone em leaf let

const icon = L.icon({
iconUrl: "/images/map-marker.svg",
iconSize:[58,68],
iconAmchor:[170,2]
})

//create popup overlay



//create and add markers for
let marker;



map.on('click',function(event){


const lat= event.latlng.lat;
const lng=event.latlng.lng;
//pegar input escondidos
document.querySelector('[name=lat]').value=lat;
document.querySelector('[name=lng]').value=lng;


//remover el market
marker && map.removeLayer(marker)




marker= L.marker([lat,lng], {icon})
.addTo(map)


})

function addPhotoField(){
//pegar o container de fotos #images 
const container=document.querySelector('#images')

//pegar o container para duplicar .new-images
const fieldsContainer =  document.querySelectorAll('.new-upload')
//realizar o clone da ultima imagem adicionada para
const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
//verificar se esta vazio se sim nao adicionar al campo de images 
const input= newFieldContainer.children[0]

if(input.value==""){
    return
}
//Limpar o campo antes de adicionar al conatiner de images
input.value=""
//adicionar o clone ao container de images 
container.appendChild(newFieldContainer)
}

function deleteField(event){
  const span=event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length < 2){
    span.parentNode.children[0].value=""
    return

  }
  //deletar o campo 

  span.parentNode.remove()

}

//troca do sim o nao 

function toggleSelect(event){
//retirar a class active s
document.querySelectorAll('.button-select button')
.forEach(function(button){
  button.classList.remove('active')
})

//colocar a class active

  //pegar o botao clickado
const button = event.currentTarget
button.classList.add('active')


// atualizar o meu input hidden com o valor selecionado 
const input = document.querySelector('[name="open_on_weekends"]')
//verificar se é sim o nao se

input.value = button.dataset.value

}