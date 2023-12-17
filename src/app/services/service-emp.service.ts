import { Injectable } from '@angular/core';

import {Employe} from "../employe";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceEmpService {
  /*EmpList:Employe[]=[
    {id:1,nom:"nom1", prenom:"prenom1"},
    {id:2,nom:"nom2", prenom:"prenom2"},
    {id:3,nom:"nom3", prenom:"prenom3"},
  ];*/

  private url="http://localhost:8081/employes";
  constructor(private  httpClient:HttpClient) { }
  getAllEmp():Observable<Employe[]>{
    return this.httpClient.get<Employe[]>(this.url);
  }
  AddEmp(employe: Employe):Observable<Employe>{
    return this.httpClient.post<Employe>(this.url,employe);
  }
  updateEmp(id:number,employe:Employe):Observable<Employe>{
    return this.httpClient.put<Employe>("http://localhost:8081/employes/"+id,employe);
  }
  deleteEmp(id:number):Observable<string>{
    return this.httpClient.delete<string>("http://localhost:8081/employes/"+id);
  }
  getEmp(id:number):Observable<Employe>{
    return this.httpClient.get<Employe>(this.url+id);
  }


}
