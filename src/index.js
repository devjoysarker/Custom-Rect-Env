
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Students from './components/Students';
import Teacher from './components/Teacher';
import './index.css';
import './min.scss';

getProducts()
function getProducts (){
    const p_list = document.querySelector('.p-list');
    let list = '';
    axios.get('http://localhost:5050/products').then(ress => {
        ress.data.map(data => {
            let { id,name,price,sale_price,photo } = data;
            list +=`
            <div class="col-md-3">
            <div class="card shadow">
                <img style="height:200px; object-fit:cover;" class="card-img" src="${ photo }" alt="">
                <div class="card-body">
                <h3>${ name }</h3>
                <p>Price : ${ price }</p>
                <p>Sele Price : ${ sale_price }</p>
                </div>
            </div>
            </div>
            `
        })
        p_list.innerHTML = list;
    })
}