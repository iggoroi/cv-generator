import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CurriculumService{

  data:any;

  constructor(private http:HttpClient) {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data;
    })
  }

  getEducation():Observable<any>{
    return of(this.data["education"])
  }
  getExperiences():Observable<any>{
    return of(this.data["experiences"])
  }
  getInformation():Observable<any>{
    return of(this.data["information"])
  }
  getLicense():Observable<any>{
    return of(this.data["license"])
  }
  getProjects():Observable<any>{
    return of(this.data["projects"])
  }
  getSkills():Observable<any>{
    return of(this.data["skills"])
  }

}
