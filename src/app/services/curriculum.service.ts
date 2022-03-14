import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, shareReplay} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CurriculumService{

  private readonly _data:Observable<any>;

  constructor(private http:HttpClient) {
    this._data = this.http.get<any>("assets/CV.json").pipe(shareReplay(1))
  }

  getSection(section: string): Observable<any>{
    return this._data.pipe(map(x=> x[section]))
  }

}
