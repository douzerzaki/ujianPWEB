function removeData(id){
    //mendapatkan data dari localstorage dan menyimpannya ke contaclist array
    //ita harus menggunakan JSON.parse, karena data sebagai string, kita perlu mengubahnya menjadi array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList = contactList.filter(function(value){ 
        return value.id != id; 
    });

    //simpan array ke dalam localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //dapatkan data lagi
    allData()
}