class InventarioViejo {
    private items: string[] = [];
    
    public addItem(nombreDetallado: string): void {
        this.items.push(nombreDetallado);
    }

    public getItems(): string[] {
        return this.items;
    }
}

interface NuevoInventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): { nombre: string, tipo: string, estado: string }[];
}

class AdaptadorInventario implements NuevoInventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        const itemDetalle = `${nombre}|${tipo}|${estado}`; 
        this.inventarioViejo.addItem(itemDetalle);
    }

    public listarEquipos(): { nombre: string, tipo: string, estado: string }[] {
        const itemsDetallados = this.inventarioViejo.getItems();
        
        return itemsDetallados.map(item => {
            const partes = item.split('|');
            return {
                nombre: partes[0],
                tipo: partes[1],
                estado: partes[2],
            };
        });
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Router Cisco", "Red", "disponible");

console.log(adaptador.listarEquipos());