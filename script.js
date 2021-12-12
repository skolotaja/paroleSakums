let tabulasRindas = document.querySelector('.rindas');
let ciparuSkaits;
let variantuSkaits;
let papildusVards;

const vardi1 = ['spalvains', 'karsta', 'papedis', 'mazais', 'pinkains'];
const vardi2 = ['lacis', 'vista', 'ruksis', 'sunis', 'sesks', 'kakis'];
const vardi3 = ['lien', 'klukst', 'lec', 'lido', 'skrien', 'naud'];
function randFunc(maxCipars) {
    random1 = Math.floor(Math.random() * maxCipars);
    return random1;
}
function generet() {
    tabulasRindas.innerHTML = "";
    for (let i = 0; i < variantuSkaits; i++) {
        let rand1 = randFunc(vardi1.length);
        let rand2 = randFunc(vardi2.length);
        let rand3 = randFunc(vardi3.length);

        let parole1=vardi1[rand1];
        let parole2=vardi2[rand2];
        let parole3=vardi3[rand3];
        let parole=parole1+parole2+parole3;


    }
}