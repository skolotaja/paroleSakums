let ciparuSkaits;
let variantuSkaits = 5;
let papildusVards;

const vardi1 = ['spalvains', 'karsta', 'papedis', 'mazais', 'pinkains'];
const vardi2 = ['lacis', 'vista', 'ruksis', 'suns', 'sesks', 'kakis'];
const vardi3 = ['lien', 'klukst', 'lec', 'lido', 'skrien', 'naud'];
let rindas = document.querySelector('.rindas');
function randFunc(maxCipars) {
   let random1 = Math.floor(Math.random() * maxCipars);
    return random1;
}
function generetParoles() {
    rindas.innerHTML = "";
    for (let i = 0; i < variantuSkaits; i++) {
        let rand1 = randFunc(vardi1.length);
        let rand2 = randFunc(vardi2.length);
        let rand3 = randFunc(vardi3.length);

        let parole1 = vardi1[rand1];
        let parole2 = vardi2[rand2];
        let parole3 = vardi3[rand3];

//let random = Math.ceil(Math.random() * 10);
        let parole = parole[rand1] + parole[rand2] + parole[rand3];
        rindas.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${parole}</td>
        </tr>`


    }
}