interface Observador {
  actualizar(equipo: Equipo): void;
}

class Soporte implements Observador {
  public actualizar(equipo: Equipo): void {
    console.log(`Soporte notificado: ${equipo.getNombre()} ha cambiado su estado a ${equipo.getEstado()}`);
  }
}

class Equipo {
  private observadores: Observador[] = [];
  private nombre: string;
  private tipo: string;
  private estado: string;

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getEstado(): string {
    return this.estado;
  }

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.actualizar(this);
    }
  }

  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");