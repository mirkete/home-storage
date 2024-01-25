# Aplicacion de Cloud Storage **local**
Esta aplicación te permite almacenar, subir y descargar archivos desde cualquier dispositivo conectado a tu red. Logra altas velocidades de transferencia ya que se maneja por red local y no por internet.

## Iniciar
Para utilizar la aplicación, se debe tener instalado Node.js y npm previamente. Los archivos que sean cargados en la aplicación se almacenaran en el dispositivo que la ejecute.

1. **Crear copia local del repositorio (clonar/fork)**
3. **Instalar dependencias:**
Se deben instalar las dependencias del proyecto. Son muy pocas, por lo que la descarga es minima. El comando para hacerlo es el siguiente:
```
npm install
```

3. **Ejecutar la aplicación:**
Para poner en marcha la aplicación se debe ejecutar el siguiente comando:
```
npm start
```

## Como usar?
Una vez que se haya ejecutado la app, el sitio web estara disponible en el puerto 3000 del host local. [Ver aqui](http://localhost:3000/). Para acceder desde otro dispositivo se debera
obtener la direccion IP local del equipo.

### Obtener dirección IP
Abrir la consola de comando de Windows (o cualquier otro O.S) y ejecutar el siguiente comando:
```
ipconfig
```
Al hacerlo, se mostrara una variedad de información. Se necesita solo la dirección IPV4:
![Imagen de la consola al ejecutar el comando ipconfig](https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/how_to_find_your_ip_address_signal_refresh/img-09.png?width=614&height=424&name=img-09.png)

Luego, la URL del sitio web sera la siguiente: 
**https://*direccion_obtenida*:3000**
