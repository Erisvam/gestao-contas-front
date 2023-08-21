import { HttpHeaders } from "@angular/common/http";

export class GestaoContasUtilService {

  static readonly authorization = "Authorization";

  constructor() {
  }

  static setAuthorization(token: string): void {
    this.limparAuthorization();
    localStorage.setItem(this.authorization, btoa(token));
  }

  static getAuthorization(): string {
    const token = localStorage.getItem(this.authorization);
    if(token != undefined){
      return atob(token);
    }
    return "";
  }

  static limparAuthorization(): void {
    if(this.getAuthorization() != ""){
      localStorage.removeItem(this.authorization);
    }
  }

  static getHttpHeaders(): HttpHeaders {
    return new HttpHeaders()
      .append(this.authorization, this.getAuthorization());
  }
}
