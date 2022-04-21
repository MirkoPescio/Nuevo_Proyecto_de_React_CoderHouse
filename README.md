[![Netlify Status](https://api.netlify.com/api/v1/badges/55c8ca85-f61e-426a-8d01-15d05870f708/deploy-status)](https://app.netlify.com/sites/mirkopesciodigitalbuy/deploys)


# Mi Proyecto de React: E-Commerce Digital Buy

## Diseño Responsive

La visualización del sitio web es adaptable tanto para computadoras portátiles o de escritorio, como también para dispositivos móviles.

### Frameworks librerías

* Bootstrap

El uso de bootstrap fué usado para la implementación del Slide de imágenes de la página principal ya que el
resto de los componentes, si no utilizan pocas clases de bootstrap, usan css puro.



## Funcionalidades

### Login obligatorio

Usando firebaseAuth, no se puede acceder a la página principal sin estar logueado. Desde el login cada usuario puede ingresar o registrarse.

#### Usuario de invitado

Para no tener que registrarse, use el siguiente usuario de invitado:

* correo: invitado@gmail.com
* contraseña: 123456




### Productos

#### Renderizado de los mismos

En la página principal, abajo de un slide de imágenes, se muestran los productos destacados (renderizados por el componente, ItemListContainer) mientras que todos los productos pueden verse desde la sección correspondiente desde el navbar o filtrados por las categorías de los mismos (renderizados por el componente AllProducts)


#### Cards de los productos

Las cards muestran Datos simples de los productos: imágen, nombre, precio unitario, stock, botón de detalles, contador de unidades, y botón de agregar producto al carrito.

##### El contador y el stock

Como detalle, el contador tiene como límite la cantidad de unidades de dicho producto EN EL CARRITO, por ejemplo, si tengo un producto A de 18 unidades y agrego 3 unidades al carrito, el contador se va a reiniciar en 0 y el límite actual va a ser de 15 unidades. El límite también se va a mostrar por una notificación con sweetalert.


#### Visualización de detalles

Cada card de producto, cuenta con su botón de visualización de detalles el cual además de mostrar las características principales de los mismos y su imágen, también muestra el precio unitario, el stock disponible, el contador con selector de unidades, el cual, una vez seleccionado, se oculta para mostrar 2 botones para ir al carrito o para volver al catálogo.



#### Procesamiento de pagos

##### Api de MercadoPago

Cuando un producto es agregado al carrito, en el navbar, se muestra el widget del carrito con un contador que indica la cantidad de productos diferentes. Este no se asocia a la cantidad de Unidades totales.
Después de Completar un formulario y de tener al menos 1 producto en el carrito, al clickear el boton de comprar, se vaciará el carrito y se va a abrir una nueva ventana para proceder con el checkout de la compra por medio de MercadoPago. Checkout-Pro con posibilidad de pagos con tarjetas o billetera de MercadoPago.

##### Ordenes a Firebase

Los datos de la orden también se suben a una colección en la base de datos de firebase.



#### Eliminar productos y vaciar carrito

En la sección del carrito de compras cada producto va a contar con su botón de eliminar, el cual va a sacar del carrito a dicho producto con todo sus unidades actuales.
Junto al botón de comprar va a estar el botón para vaciar todo el carrito




### Envíos de consultas

En la sección de contacto y en el footer, se pueden completar formularios de consultas las cuales están validadas con Formik y Yup. Cuando son completados correctamente, los datos son enviados a una colección en la base de datos de Firebase



### Notificaciones

Las notificaciones de errores de formularios, productos agregados al carrito o de límite de stock, son mostrados con la librería de sweetalert.
Siendo los casos de:

* Límite de stock de los productos
* Añadir al carrito: error y validación
* Envío de formulario contacto y footer: error y validación
* Checkout del carrito de compra: error y validación



## Versiones implementadas

* "node-modules": "^1.0.1"
* "react-router-dom": "^6.2.2"
* "sweetalert": "^2.1.2"
* "formik": "^2.2.9"
* "yup": "^0.32.11"



## Otras aclaraciones

Poco después de la última clase tuve que llevar a arreglar mi PC, por lo que las actualizaciones hechas hasta la fecha, necesitaron versiones compatibles con Windows 7.
De Firebase me llegó una notificación acerca del acceso a la base de datos Cloud por su caducidad dentro de 3 días. No sé si va a afectar al renderizado de la lista de productos o a los envíos de los mensajes de los formularios a sus colecciones de Firebase.
Por último tuve que subir los últimos commits del proyecto a este nuevo repositorio por un error que tuve en GIT y que no pude solucionar. Para verificarlo, dejé el repositorio anterior también guardado en mi Github.




## Capturas de firebase

Capturas para corroborar que las llamadas o subidas a firebase se están realizando correctamente

![primera captura](/firebase_capturas/firebase-captura-1.jpg)
![segunda captura](/firebase_capturas/firebase-captura-2.jpg)
![tercera captura](/firebase_capturas/firebase-captura-3.jpg)
![cuarta captura](/firebase_capturas/firebase-captura-4.jpg)
![quinta captura](/firebase_capturas/firebase-captura-5.jpg)
![sexta captura](/firebase_capturas/firebase-captura-6.jpg)
