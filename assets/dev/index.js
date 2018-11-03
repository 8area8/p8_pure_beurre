/* JS INDEX */

import './styles.scss';

import 'bootstrap';

import '../../apps/index/assets/js/creative.js';
import '../../apps/index/assets/js/logonav.js';
import '../../templates/admin/main_admin.js';

const carrot = require('../../apps/index/assets/icons/carrot.png');
const logo = require('../../apps/index/assets/icons/logo.png');
const colette = require('../../apps/index/assets/imgs/colette.jpg');
const remy = require('../../apps/index/assets/imgs/remy.jpg');
const load = require('../../templates/admin/loading.gif');


/*
function celeryTest() {
    var body = document.querySelector("body");

    // HTTPREQUEST
    var httpRequest;
    var content;
    var divChild;
    function newcelery() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            console.log(httpRequest);
            if (httpRequest.readyState == 4) {
                if (httpRequest.status === 200) {
                    content = JSON.parse(httpRequest.responseText).resp;
                    divChild = document.createElement('div');
                    divChild.innerHTML = content;
                    body.appendChild(divChild);
                }
            }
        }
        httpRequest.open("GET", window.func_celery);
        httpRequest.send();
    }

    // BUTTON A BUTTON-EVENT
    var button = document.createElement('button');
    button.innerHTML = 'celery event';
    button.classList.add('celery');
    body.appendChild(button);
    var celery = document.getElementsByClassName('celery')[0];
    celery.addEventListener('click', (event) => {
        newcelery();
    })
}
*/