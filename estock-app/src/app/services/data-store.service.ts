import { Injectable } from '@angular/core';
import { Company } from '../company';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  company={} as Company;
  code=[] as Array<string>;
  constructor() {
    
   }
   setData(company: Company)
   {
     this.company=company;
     console.log("Inside setData",this.company);
   }
 
   getData()
   {  console.log("Inside getData",this.company);
     return this.company;
    
   }

   setCodeList(code:Array<string>)
   { console.log("Inside setCodeList",this.code);
     this.code=code;
   }
   getCodeList()
   {console.log("Inside getCodeList",this.code);
     return this.code;
   }
}
