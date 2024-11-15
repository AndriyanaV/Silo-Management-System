export class silos{

  constructor(naziv, kapacitet){

    this.naziv=naziv;
    this.kapacitet=kapacitet;

    this.trenutno=0;
    this.container=null;
  }

sipajUSilos(kolicina){
  

    if(kolicina==''){
      alert("Niste uneli kolicinu")
      return
    }


    if(kolicina<0){
      alert("Kolicina ne sme biti manja od nule!")
      return
      
    }

    else if(this.kapacitet<parseInt(this.trenutno)+parseInt(kolicina)){
      alert("Nemate mesta u silosu!")
      return

    }
    
    else{
      this.trenutno+=parseInt(kolicina)

      let novaPopuna=this.container.querySelector(".popuna");
      novaPopuna.style.flexGrow=this.trenutno/this.kapacitet;

      let promenaKapaciteta=this.container.querySelector(".kapacitet")
      promenaKapaciteta.innerHTML=this.trenutno + "t / " +
      this.kapacitet + "t";
      
    }
    
  
}

promeniImeSilosu(novoIme){

  if(novoIme==''){
    alert("Niste odabrali novo ime!")
    return
  }


  this.naziv=novoIme

  let novoImeS=this.container.querySelector(".naziv-silosa");
  novoImeS.innerHTML=novoIme
}

smanjiTecnostSilosu(izabranaKolicina){

  if(izabranaKolicina==''){
    alert("Niste uneli kolicinu!")
    return
  }



  this.trenutno-=parseInt(izabranaKolicina);

  let noviKapacitet=this.container.querySelector(".kapacitet")
  let novaPopuna=this.container.querySelector(".popuna");

  if(this.trenutno===0){
    alert("Vas silos je prazan")

  }

  else if(this.trenutno<0){

      this.trenutno=0;
      alert("Vas silos se ispraznio")
      noviKapacitet.innerHTML=this.trenutno + "t / " +
      this.kapacitet + "t";
      novaPopuna.style.flexGrow=this.trenutno/this.kapacitet

    }

  else{

    novaPopuna.style.flexGrow=this.trenutno/this.kapacitet
    noviKapacitet.innerHTML=this.trenutno + "t / " +
    this.kapacitet + "t";
    
  }
    
  

  
}

  
crtajSilos(gde){
    this.container=document.createElement("div");
    this.container.className="silos";

    let nazivKapacitetKontejner=document.createElement("div");
    nazivKapacitetKontejner.className="naziv-kapacitet-kontejner";

    let nazivSilosa=document.createElement("h1");
    nazivSilosa.innerHTML=this.naziv;
    nazivSilosa.className="naziv-silosa";

    let kapacitetSilosa=document.createElement("h2");
    kapacitetSilosa.className="kapacitet"
    kapacitetSilosa.innerHTML=this.trenutno + "t / " +
    this.kapacitet + "t";
    

    nazivKapacitetKontejner.appendChild(nazivSilosa)
    nazivKapacitetKontejner.appendChild(kapacitetSilosa);

    let vizuelno=document.createElement("div");
    vizuelno.className="vizuelno"
    let popuna=document.createElement("div")
    popuna.className="popuna";
    popuna.id="popuna-id"
    popuna.style.flexGrow=this.trenutno/this.kapacitet;
    vizuelno.appendChild(popuna);
    
    

    this.container.appendChild(nazivKapacitetKontejner)
    this.container.appendChild(vizuelno);
    

    gde.appendChild(this.container);



  }

  
    
  





}