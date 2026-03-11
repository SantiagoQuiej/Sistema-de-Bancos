export interface HistorialSalida {
  monto: number;
  metodo: string;
  motivo: string;
  fecha: Date;
}

export interface HistorialSalidaState {
  data: HistorialSalida[];
}
