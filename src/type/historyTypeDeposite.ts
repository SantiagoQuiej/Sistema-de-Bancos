export interface HistorialDeposite {
  monto: number;
  metodo: string;
  motivo: string;
  fecha: Date;

}

export interface HistorialDepositeState {
  data: HistorialDeposite[];
}
