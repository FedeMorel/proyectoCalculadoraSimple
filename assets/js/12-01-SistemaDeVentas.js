class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){

        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
       
    }

    get idProducto(){

        return this._idProducto;

    }

    get nombre(){

        return this._nombre;

    }

    set nombre(nombre){

        this._nombre = nombre;

    }

    get precio(){

       return this._precio;

    }

    set precio(precio){

        this.precio = precio;

    }

    toString(){

        return `\nid producto: ${this._idProducto} \n
                nombre: ${this._nombre} \n
                precio: $${this._precio}`;

    }

}

class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        
        return 5;

    }
    constructor(){

        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;

    }

    get idOrden(){

        return this._idOrden;

    }

    agregarProducto(producto){

        if(this._productos.length < Orden.MAX_PRODUCTOS){

            this._productos.push(producto);

        }
        else{
            
            console.log("No se pueden agregar mas productos");

        }

    }

    calcularTotal(){

        let totalVenta = 0;

        //For simplificado para iterar un arreglo en JS
        for(let producto of this._productos){

            totalVenta += producto.precio;

        }

        return totalVenta;

    }

    mostrarOrden(){

        let productoOrden = "";

        for(let producto of this._productos){

            productoOrden += producto.toString() + " ";

        }

        console.log(`Orden: ${this._idOrden} \nTotal: $${this.calcularTotal()} \nProductos: \n${productoOrden}` );

    }

}


let producto1 = new Producto("Dulce de Leche",50);
let producto2 = new Producto("Crema",70);
let producto3 = new Producto("Fideos",50);
let producto4 = new Producto("Arroz",42);
let producto5 = new Producto("Jugo",12);
let producto6 = new Producto("Queso",73);
let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);
orden1.mostrarOrden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto6);
orden2.mostrarOrden();
