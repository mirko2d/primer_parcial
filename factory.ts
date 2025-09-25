interface Equipo {
  detalles(): string;
}

class Servidor implements Equipo {
  constructor(
    private nombre: string,
    private ram: string,
    private cpu: string
  ) {}

  public detalles(): string {
    return `Servidor ${this.nombre} con ${this.ram} RAM y procesador ${this.cpu}`;
  }
}

class Notebook implements Equipo {
  constructor(
    private nombre: string,
    private ram: string,
    private almacenamiento: string
  ) {}

  public detalles(): string {
    return `Notebook ${this.nombre} (${this.ram} RAM / ${this.almacenamiento} SSD)`;
  }
}

class Desktop implements Equipo {
  constructor(
    private nombre: string,
    private monitor: string,
    private os: string
  ) {}

  public detalles(): string {
    return `Desktop ${this.nombre} (Monitor: ${this.monitor}, OS: ${this.os})`;
  }
}

class EquipoFactory {
  public createEquipo(type: string, ...data: any[]): Equipo {
    const [nombre, param2, param3] = data;

    if (type === "Servidor") {
      return new Servidor(nombre, param2, param3);
    } else if (type === "Notebook") {
      return new Notebook(nombre, param2, param3);
    } else if (type === "Desktop") {
      return new Desktop(nombre, param2, param3);
    } else {
      throw new Error("Error: tipo de equipo no reconocido");
    }
  }
}

const factory = new EquipoFactory();

const server = factory.createEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles()); // Servidor Dell PowerEdge con 32GB RAM y procesador Xeon