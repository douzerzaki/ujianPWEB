//method to save data into localstorage
function save(){
    //mendapatkan data dari localstorage dan menyimpannya ke contaclist array
    //ita harus menggunakan JSON.parse, karena data sebagai string, kita perlu mengubahnya menjadi array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //ambil array terakhir untuk mendapatkan id terakhir
    //dan menyimpannya ke dalam variabel id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        //edit contactlist array berdasarkan nilai
        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.name      = document.getElementById('name').value, 
                value.age       = document.getElementById('age').value, 
                value.address   = document.getElementById('address').value, 
                value.phone     = document.getElementById('phone').value
            }
        });

        //menghapus input terssembunyi
        document.getElementById('id').value = ''

    }else{

        //simpan
        //ambil data dari form
        var item = {
            id        : id + 1, 
            name      : document.getElementById('name').value, 
            age       : document.getElementById('age').value, 
            address   : document.getElementById('address').value, 
            phone     : document.getElementById('phone').value
        }

        //menambahkan data item ke array contactlist
        contactList.push(item)
    }

    // simpan array ke dalam localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //mengupdate list tabel
    allData()

    //hapus form data
    document.getElementById('form').reset()
}