//method untuk mendapatkan semua data
function allData(){
            
    table.innerHTML = ``
    //mendapatkan data dari localstorage dan menyimpannya ke contaclist array
    //kita harus menggunakan JSON.parse, karena data sebagai string, kita perlu mengubahnya menjadi array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //looping data dan menampilkan data dalam tabel
    contactList.forEach(function (value, i){
       
        var table = document.getElementById('table')

        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td>${value.address}</td>
                <td>${value.phone}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
    })
}
