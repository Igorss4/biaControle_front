import { DecimalPipe } from "@angular/common";
import { Cliente } from "./Cliente";

export class Servico {
  public id: number;
  public tipo: string;
  public formato: string;
  public preco: number;
  public descricao: string;
  public dataProcedimento: Date;
  public cliente: Cliente;
}