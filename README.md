Analizador de sentimientos en redes sociales
Equipo Rockstar Lifestyle
Campus: Ciudad de México


Integrantes: 
1. Oscar Emiliano Cervantes del Valle        A01332891
2. Alfredo Puente Vasconcelos                A01332573
3. Irvin Uriel Mundo Rivera                  A01333820
4. Héctor Carlos Flores Reynoso              A01333126
5. José Gabriel Vergara Álvarez              A01333672
1. Aspectos generales
1.1 Requerimientos técnicos
A continuación se mencionan los requerimientos técnicos mínimos del proyecto, favor de tenerlos presente para que cumpla con todos.


* El equipo tiene la libertad de elegir las tecnologías de desarrollo a utilizar en el proyecto, sin embargo, debe tener presente que la solución final se deberá ejecutar en una de las siguientes plataformas en la nube: IBM Cloud o Google Cloud Platform.
* El proyecto debe utilizar algunos de los servicios disponibles en las plataformas anteriores.
* La solución debe utilizar una arquitectura de microservicios. Si no tiene conocimiento sobre este tema, le recomendamos la lectura Microservices de Martin Fowler.
* La arquitectura debe ser modular, escalable, con redundancia y alta disponibilidad.
* La arquitectura deberá estar separada claramente por capas (frontend, backend, API RESTful, datos y almacenamiento).
* Los diferentes componentes del proyecto (frontend, backend, API RESTful, bases de datos, entre otros) deberán ejecutarse sobre contenedores Docker y utilizar Kubernetes como orquestador. Tanto IBM Cloud como Google Cloud Platform permiten el uso de estas tecnologías.
* Todo el código, datasets y la documentación del proyecto debe alojarse en este repositorio de GitLab que en Nearshore Delivery Solutions habilitamos para tales efectos. Favor de mantener la estructura de carpetas generada.
1.2 Estructura del repositorio
El proyecto debe seguir la siguiente estructura de carpetas, la cual generamos por usted:
- /                        # Raíz de todo el proyecto
- README.md        # Archivo con los datos del proyecto (este archivo)
- frontend                # Carpeta con la solución del frontend (Web app)
- backend                # Carpeta con la solución del backend (CMS)
- api                        # Carpeta con la solución de la API


- datasets                # Carpeta con los datasets y recursos utilizados (csv, json, audio, videos, entre otros)
- dbs                        # Carpeta con los modelos, catálogos y scripts necesarios para generar las bases de datos
- models                # Carpeta donde se almacenarán los modelos de Machine
Learning ya entrenados
- docs                        # Carpeta con la documentación del proyecto
- stage_1                # Documentos de la primera entrega
- stage_2                # Documentos de la segunda entrega
- stage_3                # Documentos de la entrega final
- manuals                # Manuales y guías
1.3 Documentación del proyecto
? Justificación del modelo de Machine Learning que seleccionaron.
? Descripción del o los datasets y las fuentes de información utilizadas.
? Guía de configuración, instalación y despliegue de la solución en la plataforma en la nube seleccionada (IBM Cloud o Google Cloud Platform).
? El código debe estar documentado siguiendo los estándares definidos para el lenguaje de programación seleccionado.
2. Descripción del proyecto
A través del análisis de información de redes sociales, se desarrollará una plataforma web en React donde se mostrarán las gráficas a partir de los tweets analizados. Los tweets serán examinados a partir de un programa en Python donde al final se imprimen los porcentajes que tiene el modelo de qué tan impactantes son las palabras en la oración y cuál es la probabilidad calculada por el modelo que el dueño de suicidarse.
2.1 Problemática
Actualmente las redes sociales son un medio de comunicación y expresión masivo. De acuerdo a unas estadísticas por Omnicore realizadas en enero de 2018, mensualmente se conectan 330 millones de usuarios, con un número aproximado de 500 millones de tweets enviados al día.
Esto representa una gran cantidad de información que usuarios de toda clase mandan y un canal de comunicación donde la gente se expresa y puede enviar avisos de toda clase.
De acuerdo al New York Post, en 2015, el 36% de los adolescentes reportaron sentirse desesperadamente tristes o sin esperanza, o pensando, planeando o intentando suicidarse; esto de un 32% en 2009. Para las niñas, los índices fueron más altos, 45% en 2015 contra un 40% en 2009. De hecho, Twitter anunció en febrero de 2018 que los usuarios ya pueden reportar perfiles, tweets y mensajes directos que alienten daño a sí mismo o suicidio.
2.2 Objetivos del negocio
Seccionar las publicaciones de perfiles en redes sociales (Twitter) para su análisis.


Categorizar las palabras a través de una técnica de machine learning en negativas, neutras o positivas.


Establecer un modelo de análisis de las palabras categorizadas para contrastarlas contra oraciones ingresadas en el sistema.


Imprimir reportes de la información analizada a través de porcentajes de salida indicando si la persona puede tener una tendencia a ser suicida.


Mostrar gráficamente los resultados del análisis a través de tablas donde se muestran los porcentajes por palabras y por texto analizado.
3. Solución
Elaborar un sistema que analice tweets y obtenga la probabilidad de que una persona pueda llegar a suicidarse.
La solución se divide en tres partes, primero se tiene un analizador de palabras, primero se filtran palabras que no son de interés como artículos (el, la los, etc), preposiciones y se limpian los datasets de acentos y eñes.
Posteriormente, se recopilan el resto de las palabras y se almacenan en un archivo llamado vocabulario donde se van juntando las palabras conocidas (el vocabulario es en español). Todas las palabras repetidas se reemplazan con un token para evitar errores en el sistema.
Dentro de la segunda parte de la solución, a través de redes neuronales, modelo de Skip-gram, se entrena al modelo dándole a cada palabra un peso y una relación con las demás palabras.
En la parte final del sistema, se le envían una a una las oraciones (tweets) para que se analicen las palabras dentro de ellas para determinar la probabilidad de suicidio. Al final, tanto las palabras como los porcentajes de las palabras que se obtienen se mandan a un google sheets para posteriormente mostrar las gráficas en un navegador web.
El sistema estára implementado en un contenedor Docker y en la nube de Microsoft Azure donde Azure proverá una URL donde se podrá ver el proyecto.
El motivo final es que las personas que deseen analizar algún perfil de Twitter para saber si puede tener una tendencia a ser suicida puedan utilizar las publicaciones de dicha red social para examinar al perfil y tener un mayor entendimiento de esa persona en particular.


3.1 Técnica de Machine Learning utilizada
Se utilizó Skip Gram, una arquitectura de redes neuronales que se lleva a cabo dentro de una frase. El propósito es seleccionar una a una las palabras que componen la frase. Por cada palabra se analizan demás que la rodean para luego alimentar una red neuronal.
Esto quiere decir que se van relacionando las palabras entre sí a partir de la idea de que ciertas palabras van juntas porque se suelen utilizar juntas, suelen aparecer juntas dentro de las oraciones. Después del entrenamiento el algoritmo permite predecir la probabilidad de cada una de las palabras de aparecer realmente en el contexto de la palabra de enfoque.
3.1.1 Hipótesis
Con base en la clasificación que tiene el modelo de palabras negativas y positivas, asimismo, el modelo de agrupación a través de redes neuronales de palabras conforme a cómo se van usando juntas el sistema imprimirá probabilidades entre 0 y 1 de si es posible que una persona pueda suicidarse, siendo 1 completamente seguro y 0 completamente seguro que no.
3.2 Arquitectura de la solución
3.3 Frontend
3.3.1 Lenguaje de programación
JavaScript (ECMAScript 2016)
3.3.2 Framework
ReactJS - https://reactjs.org/
3.3.3 Librerías de funciones o dependencias
Pandas 0.22.0 - https://pandas.pydata.org/pandas-docs/stable/
NumPy - https://docs.scipy.org/doc/numpy-dev/dev/
Sklearn - http://scikit-learn.org/stable/documentation.html
Pydotplus
IPython
Google Charts with Google Spreadsheets - https://developers.google.com/chart/interactive/docs/spreadsheets
3.4 Backend
3.4.1 Lenguaje de programación
Python 3.6.0 - https://www.python.org/doc/
3.4.2 Framework
Docker - https://www.docker.com/
3.4.3 Librerías de funciones o dependencias

Portal azure - https://portal.azure.com
Jupyter Notebook - http://jupyter.org/
Pandas 0.22.0 - https://pandas.pydata.org/pandas-docs/stable/
NumPy - https://docs.scipy.org/doc/numpy-dev/dev/
Sklearn - http://scikit-learn.org/stable/documentation.html


3.6 Pasos a seguir para utilizar el proyecto
Para este punto se toma como referencia un usuario que pueda navegar por Internet y que sólo desea utilizar el sistema sin querer editarlo.

Paso 1. Instalar Docker en la computadora a utilizar a través de https://docker.com.

Paso 2. Abrir una terminal

Paso 3. Ingresar docker run -p 4000:8888 emilianocervantes/suicideairepo:ver1. Darle enter.

Paso 4. Abrir un navegador web. Ir a http://localhost:4000.


4. Referencias

Sitios de interés:

https://www.omnicoreagency.com/twitter-statistics/

https://nypost.com/2017/11/14/rise-in-teen-suicide-connected-to-social-media-popularity-study/

https://techcrunch.com/2018/02/20/twitter-updates-its-policy-on-tweets-that-encourage-self-harm-and-suicide/


Datasets:
https://www.kaggle.com/crowdflower/first-gop-debate-twitter-sentiment/contributors

https://www.kaggle.com/benhamner/clinton-trump-tweets

https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/

https://medium.com/machine-learning-for-humans/unsupervised-learning-f45587588294