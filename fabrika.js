import {silos} from './silos.js'

export class fabrika{
  constructor(naziv){

    this.naziv=naziv;

    this.silosi= new Array();

    this.container=null;
  }

  dodajSilos(silos){
    this.silosi.push(silos);
  }

  crtajFabriku(gde){

    this.container=document.createElement("div")
    this.container.className="fabrika"

    let leviDeoFabrike=document.createElement("div");
    leviDeoFabrike.className="levi-deo"

    
    
    let nazivFabrike=document.createElement("h1");
    nazivFabrike.className="fabrika-ime"
    nazivFabrike.innerHTML=this.naziv

    let sviSilosi=document.createElement("div");
    sviSilosi.className="svi-silosi"

    this.silosi.forEach(element => {
      let silos=element.crtajSilos(sviSilosi);
    });

    leviDeoFabrike.appendChild(nazivFabrike)
    leviDeoFabrike.appendChild(sviSilosi)

    //desni deo fabrike sa formom 
    let desniDeoFabrike=document.createElement("div");
    desniDeoFabrike.className="desni-deo"

    let formaDodajKolicinu=document.createElement("div");
    formaDodajKolicinu.className="forma"

    let naslovForme=document.createElement("h2");
    naslovForme.innerHTML="Forma za dodavanje kolicine"
    formaDodajKolicinu.appendChild(naslovForme)
    let labelaSekcija=document.createElement("div")
    labelaSekcija.className="red-u-formi"
    let silosLabela=document.createElement("label")
    silosLabela.innerHTML="Silos";
    let padacujiMeni=document.createElement("select");
    padacujiMeni.className="select-el-kolicina"
    labelaSekcija.appendChild(silosLabela);
    labelaSekcija.appendChild(padacujiMeni);
    formaDodajKolicinu.appendChild(labelaSekcija);

    //opcije u select sekciji 
    this.silosi.forEach((element,index) =>{
      let opcija=document.createElement("option");
      opcija.innerHTML=element.naziv
      opcija.className="opcija-kolicina"
      opcija.value=index;
      padacujiMeni.appendChild(opcija)

    })

    //drugi red forme za kolicinu 
    let kolicinaInput=document.createElement("div");
    kolicinaInput.className="red-u-formi"
    let kolicinaLabela=document.createElement("label");
    kolicinaLabela.innerHTML="Kolicina";
    let inputKolicina=document.createElement("input")
    inputKolicina.className="input-za-kolicinu"
    kolicinaInput.appendChild(kolicinaLabela)
    kolicinaInput.appendChild(inputKolicina)
    formaDodajKolicinu.appendChild(kolicinaInput)

    let dugmeZaKolicinu=document.createElement("button");
    dugmeZaKolicinu.className="dugme-kolicina"
    dugmeZaKolicinu.innerHTML="DODAJ KOLIČINU U SILOS"
    formaDodajKolicinu.appendChild(dugmeZaKolicinu)
    dugmeZaKolicinu.onclick = (ev) => this.klik(ev);
    
    desniDeoFabrike.appendChild(formaDodajKolicinu)

    //forma za promenu imena 
    let formaZaNovoIme=document.createElement("div");
    formaZaNovoIme.className="forma";
    formaZaNovoIme.id="forma-ime"

    let naslovFormaIme=document.createElement("h2")
    naslovFormaIme.innerHTML="Forma za promenu imena"
    formaZaNovoIme.appendChild(naslovFormaIme)

    //prvi red u formi za ime
    let priviRedFime=document.createElement("div");
    priviRedFime.className="red-u-formi";
    let silosLabelaFIme=document.createElement("label")
    silosLabelaFIme.innerHTML="Silos";
    priviRedFime.appendChild(silosLabelaFIme);
    let padacujiMeniFIme=document.createElement("select");
    padacujiMeniFIme.className="meni-forma-ime"

    this.silosi.forEach((element,index) =>{
      let opcijaIme=document.createElement("option");
      opcijaIme.className="opcija-ime"
      opcijaIme.innerHTML=element.naziv
      opcijaIme.value=index;
      padacujiMeniFIme.appendChild(opcijaIme)

    })


    priviRedFime.appendChild(padacujiMeniFIme);
    formaZaNovoIme.appendChild(priviRedFime);
    formaZaNovoIme.className="forma"

    //drugi red u formi za ime
    let drugiRedFime= document.createElement("div");
    drugiRedFime.className="red-u-formi";
    drugiRedFime.className="labela-input-text"
    drugiRedFime.className="red-u-formi"
    let novoImeLabela=document.createElement("label");
    novoImeLabela.innerHTML="Novo ime";
    let inputIme=document.createElement("input");
    inputIme.className="novo-ime-input"
    inputIme.type="text";
    drugiRedFime.appendChild(novoImeLabela)
    drugiRedFime.appendChild(inputIme)
    formaZaNovoIme.appendChild(drugiRedFime)

    let dugmeZaIme=document.createElement("button");
    dugmeZaIme.className="dugme-kolicina"
    dugmeZaIme.innerHTML="PROMENI IME SILOSU"
    formaZaNovoIme.appendChild(dugmeZaIme)
    dugmeZaIme.onclick = (ev) => this.promenaImena(ev);

    desniDeoFabrike.appendChild(formaZaNovoIme);

   //forma za smanjivanje tecnosti 
   let formaZaSmanjiTecnost=document.createElement("div");
    formaZaSmanjiTecnost.className="forma";
    formaZaSmanjiTecnost.id="forma-manje-tecnosti"

    let naslovFormaMinusTecnost=document.createElement("h2")
    naslovFormaMinusTecnost.innerHTML="Forma za smanjenje tecnosti"
    formaZaSmanjiTecnost.appendChild(naslovFormaMinusTecnost);

    //prvi red u  formi za smanjenje tecnosti

    let priviRedFMTecnosti=document.createElement("div");
    priviRedFMTecnosti.className="red-u-formi";
    let silosLabelaMT=document.createElement("label")
    silosLabelaMT.innerHTML="Silos";
    priviRedFMTecnosti.appendChild(silosLabelaMT);
    let padacujiMeniFMTecnosti=document.createElement("select");
    padacujiMeniFMTecnosti.className="meni-forma-manje-t"
    priviRedFMTecnosti.appendChild(padacujiMeniFMTecnosti)

    this.silosi.forEach((element,index) =>{
      let opcijaMTecnosti=document.createElement("option");
      opcijaMTecnosti.className="opcija-manje-t"
      opcijaMTecnosti.innerHTML=element.naziv
      opcijaMTecnosti.value=index;
      padacujiMeniFMTecnosti.appendChild(opcijaMTecnosti)

    })

    formaZaSmanjiTecnost.appendChild(priviRedFMTecnosti)


    //drugi red u formi za manje tecnosti
    let drugiRedFMTecnosti= document.createElement("div");
    drugiRedFMTecnosti.className="red-u-formi";
    let kolicinaManje=document.createElement("label");
    kolicinaManje.innerHTML="Kolicina";
    let inputMKolicina=document.createElement("input");
    inputMKolicina.className="input-manje-tecnosti"
    inputMKolicina.type="number";
    drugiRedFMTecnosti.appendChild(kolicinaManje)
    drugiRedFMTecnosti.appendChild(inputMKolicina)
    formaZaSmanjiTecnost.appendChild(drugiRedFMTecnosti)

    let dugmeZaMTecnosti=document.createElement("button");
    dugmeZaMTecnosti.className="dugme-kolicina"
    dugmeZaMTecnosti.innerHTML="SMANJI KOLICINU TECNOSTI"
    formaZaSmanjiTecnost.appendChild(dugmeZaMTecnosti)
    dugmeZaMTecnosti.onclick = (ev) => this.smanjiKolicinu(ev);

    desniDeoFabrike.appendChild(formaZaSmanjiTecnost);

    this.container.appendChild(leviDeoFabrike);
    this.container.appendChild(desniDeoFabrike)
    gde.appendChild(this.container)
    
  }

  klik(ev) {
      console.log(ev)

      let izabraniSilos= this.container.querySelector(".select-el-kolicina").value;
      
      let izabranaKolicina=this.container.querySelector(".input-za-kolicinu").value

      this.silosi[izabraniSilos].sipajUSilos(izabranaKolicina)
  }


  promenaImena(ev){

    console.log(ev)
    let izabraniSilos= this.container.querySelector(".meni-forma-ime").value;
    
    let novoIme=this.container.querySelector(".novo-ime-input").value;

    this.silosi[izabraniSilos].promeniImeSilosu(novoIme);
    
    let SilosUMeniju=this.container.querySelectorAll(".opcija-ime")[izabraniSilos]
    SilosUMeniju.innerHTML=novoIme

    let silosUKolicini=this.container.querySelectorAll(".opcija-kolicina")[izabraniSilos];
    silosUKolicini.innerHTML=novoIme;

    let silosManjaKolicina=this.container.querySelectorAll(".opcija-manje-t")[izabraniSilos]
    silosManjaKolicina.innerHTML=novoIme;
    
}

smanjiKolicinu(ev){

  let izabraniSilos=this.container.querySelector(".meni-forma-manje-t").value;

  let izabranaKolicina=this.container.querySelector(".input-manje-tecnosti").value;

  this.silosi[izabraniSilos].smanjiTecnostSilosu(izabranaKolicina);


}

}