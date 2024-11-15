import {silos} from "./silos.js"
import {fabrika} from "./fabrika.js"

let silos1=new silos("Silos 1", 2000)
let fabrika1= new fabrika ("Zitopek");
fabrika1.dodajSilos(silos1)


let silos2=new silos("Silos 2", 2000);
let silos3=new silos("Silos 3", 2000);
let silos4=new silos("Silos 4", 2000);
fabrika1.dodajSilos(silos2)
fabrika1.dodajSilos(silos3)
fabrika1.dodajSilos(silos4)



fabrika1.crtajFabriku(document.body)

