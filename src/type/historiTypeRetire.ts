export interface HistorialSalida {
  monto: number;
  metodo: string;
  motivo: string;
}

export interface HistorialSalidaState {
  data: HistorialSalida[];
}
