console.log('hello world');

abstract class Lavoratore {
    constructor(public codredd:number,public redditoannuolordo:number,public tasseinps:number,public tasseirperf:number){
       
    }


    getUtileTasse(){
      return  this.redditoannuolordo * (this.codredd)/100
    }

    getTasseInps(){
        return this.getUtileTasse() * (this.tasseinps)/100
    }

    getTasseIrpef(){
        return this.getUtileTasse() * (this.tasseirperf)/100

    }

    getRedditoAnnuoNetto(){
        return this.redditoannuolordo-this.getTasseInps()-this.getTasseIrpef()

    }
}




      
    

class Artigiano extends Lavoratore{
    constructor(codredd:number,redditoannuolordo:number,tasseinps:number,tasseirpef:number){
        super(codredd,redditoannuolordo,tasseinps,tasseirpef)
    }

    
}




class Commerciante extends Lavoratore{
    constructor(codredd:number,redditoannuolordo:number,tasseinps:number,tasseirpef:number){
        super(codredd,redditoannuolordo,tasseinps,tasseirpef)
    }

    
}


let simone = new Artigiano(78,5000,24,27)
console.table(simone)
console.log('il tuo reddito annuo netto è',simone.getRedditoAnnuoNetto())  


let marco = new Artigiano (78,10000,24,34)
console.table(marco)
console.log('il tuo reddito annuo netto è', marco.getRedditoAnnuoNetto())
