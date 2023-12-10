//method untuk mendapatkan detail data pribadi berdasarkan id
function find(id){
    //mendapatkan data dari localstorage dan menyimpannya ke contaclist array
    //kita harus menggunakan JSON.parse, karena data sebagai string, kita perlu mengubahnya menjadi array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('name').value = value.name
           document.getElementById('age').value = value.age
           document.getElementById('address').value = value.address
           document.getElementById('phone').value = value.phone
        }
    })
}