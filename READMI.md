======================================================================
INFORME TÉCNICO: CONFIGURACIÓN DEL ENTORNO Y REQUISITOS DEL PROYECTO
======================================================================

Para garantizar el correcto funcionamiento del analizador y evitar fallas
en la resolución de rutas o dependencias, se deben cumplir estrictamente
los siguientes requisitos de entorno:

1. INSTALACIÓN DE JAVA (JDK)
   Es obligatorio contar con el Java Development Kit (JDK) en su versión 
   26.0.1 para asegurar la plena compatibilidad con las herramientas de 
   compilación de ANTLR4.
   
   * Enlace de descarga oficial:
     https://www.oracle.com/java/technologies/downloads/#jdk26-windows

2. APERTURA CORRECTA DEL ESPACIO DE TRABAJO (WORKSPACE)
   El entorno de desarrollo utiliza la variable de configuración 
   "${workspaceFolder}" para resolver las rutas del sistema. Por lo tanto,
   para que el analizador localice correctamente los archivos de entrada 
   (como "input.txt"), es un requisito indispensable abrir el editor 
   directamente sobre la carpeta raíz "Examen 2".

   Para realizar esta apertura de forma correcta a través de la consola de 
   comandos (CMD) de Windows, ejecute la siguiente secuencia:
   
   > cd /d "F:\Usuario\OneDrive\Documentos\Facultad\Sintaxis\antlr\Proyecto Analizador\Examen 2"
   > code .

3. DEPURACIÓN DE LA GRAMÁTICA (ANTLR4)
   El archivo fundamental que contiene las reglas sintácticas y léxicas del 
   lenguaje se denomina "Lenguaje.g4" y está ubicado dentro de la carpeta 
   "grammar". 
   
   Al momento de realizar pruebas de depuración rápidas mediante la extensión 
   de VS Code, recuerde mantener este archivo abierto y enfocado en pantalla 
   antes de presionar la tecla F5 (antlr-debug).

======================================================================




