Analizador de sentimientos en redes sociales
Equipo Rockstar Lifestyle
Campus: Ciudad de M�xico


Integrantes: 
1. Oscar Emiliano Cervantes del Valle        A01332891
2. Alfredo Puente Vasconcelos                A01332573
3. Irvin Uriel Mundo Rivera                  A01333820
4. H�ctor Carlos Flores Reynoso              A01333126
5. Jos� Gabriel Vergara �lvarez              A01333672
1. Aspectos generales
1.1 Requerimientos t�cnicos
A continuaci�n se mencionan los requerimientos t�cnicos m�nimos del proyecto, favor de tenerlos presente para que cumpla con todos.


* El equipo tiene la libertad de elegir las tecnolog�as de desarrollo a utilizar en el proyecto, sin embargo, debe tener presente que la soluci�n final se deber� ejecutar en una de las siguientes plataformas en la nube: IBM Cloud o Google Cloud Platform.
* El proyecto debe utilizar algunos de los servicios disponibles en las plataformas anteriores.
* La soluci�n debe utilizar una arquitectura de microservicios. Si no tiene conocimiento sobre este tema, le recomendamos la lectura Microservices de Martin Fowler.
* La arquitectura debe ser modular, escalable, con redundancia y alta disponibilidad.
* La arquitectura deber� estar separada claramente por capas (frontend, backend, API RESTful, datos y almacenamiento).
* Los diferentes componentes del proyecto (frontend, backend, API RESTful, bases de datos, entre otros) deber�n ejecutarse sobre contenedores Docker y utilizar Kubernetes como orquestador. Tanto IBM Cloud como Google Cloud Platform permiten el uso de estas tecnolog�as.
* Todo el c�digo, datasets y la documentaci�n del proyecto debe alojarse en este repositorio de GitLab que en Nearshore Delivery Solutions habilitamos para tales efectos. Favor de mantener la estructura de carpetas generada.
1.2 Estructura del repositorio
El proyecto debe seguir la siguiente estructura de carpetas, la cual generamos por usted:
- /                        # Ra�z de todo el proyecto
- README.md        # Archivo con los datos del proyecto (este archivo)
- frontend                # Carpeta con la soluci�n del frontend (Web app)
- backend                # Carpeta con la soluci�n del backend (CMS)
- api                        # Carpeta con la soluci�n de la API


- datasets                # Carpeta con los datasets y recursos utilizados (csv, json, audio, videos, entre otros)
- dbs                        # Carpeta con los modelos, cat�logos y scripts necesarios para generar las bases de datos
- models                # Carpeta donde se almacenar�n los modelos de Machine
Learning ya entrenados
- docs                        # Carpeta con la documentaci�n del proyecto
- stage_1                # Documentos de la primera entrega
- stage_2                # Documentos de la segunda entrega
- stage_3                # Documentos de la entrega final
- manuals                # Manuales y gu�as
1.3 Documentaci�n del proyecto
? Justificaci�n del modelo de Machine Learning que seleccionaron.
? Descripci�n del o los datasets y las fuentes de informaci�n utilizadas.
? Gu�a de configuraci�n, instalaci�n y despliegue de la soluci�n en la plataforma en la nube seleccionada (IBM Cloud o Google Cloud Platform).
? El c�digo debe estar documentado siguiendo los est�ndares definidos para el lenguaje de programaci�n seleccionado.
2. Descripci�n del proyecto
A trav�s del an�lisis de informaci�n de redes sociales, se desarrollar� una plataforma web en React donde se mostrar�n las gr�ficas a partir de los tweets analizados. Los tweets ser�n examinados a partir de un programa en Python donde al final se imprimen los porcentajes que tiene el modelo de qu� tan impactantes son las palabras en la oraci�n y cu�l es la probabilidad calculada por el modelo que el due�o de suicidarse.
2.1 Problem�tica
Actualmente las redes sociales son un medio de comunicaci�n y expresi�n masivo. De acuerdo a unas estad�sticas por Omnicore realizadas en enero de 2018, mensualmente se conectan 330 millones de usuarios, con un n�mero aproximado de 500 millones de tweets enviados al d�a.
Esto representa una gran cantidad de informaci�n que usuarios de toda clase mandan y un canal de comunicaci�n donde la gente se expresa y puede enviar avisos de toda clase.
De acuerdo al New York Post, en 2015, el 36% de los adolescentes reportaron sentirse desesperadamente tristes o sin esperanza, o pensando, planeando o intentando suicidarse; esto de un 32% en 2009. Para las ni�as, los �ndices fueron m�s altos, 45% en 2015 contra un 40% en 2009. De hecho, Twitter anunci� en febrero de 2018 que los usuarios ya pueden reportar perfiles, tweets y mensajes directos que alienten da�o a s� mismo o suicidio.
2.2 Objetivos del negocio
Seccionar las publicaciones de perfiles en redes sociales (Twitter) para su an�lisis.


Categorizar las palabras a trav�s de una t�cnica de machine learning en negativas, neutras o positivas.


Establecer un modelo de an�lisis de las palabras categorizadas para contrastarlas contra oraciones ingresadas en el sistema.


Imprimir reportes de la informaci�n analizada a trav�s de porcentajes de salida indicando si la persona puede tener una tendencia a ser suicida.


Mostrar gr�ficamente los resultados del an�lisis a trav�s de tablas donde se muestran los porcentajes por palabras y por texto analizado.
3. Soluci�n
Elaborar un sistema que analice tweets y obtenga la probabilidad de que una persona pueda llegar a suicidarse.
La soluci�n se divide en tres partes, primero se tiene un analizador de palabras, primero se filtran palabras que no son de inter�s como art�culos (el, la los, etc), preposiciones y se limpian los datasets de acentos y e�es.
Posteriormente, se recopilan el resto de las palabras y se almacenan en un archivo llamado vocabulario donde se van juntando las palabras conocidas (el vocabulario es en espa�ol). Todas las palabras repetidas se reemplazan con un token para evitar errores en el sistema.
Dentro de la segunda parte de la soluci�n, a trav�s de redes neuronales, modelo de Skip-gram, se entrena al modelo d�ndole a cada palabra un peso y una relaci�n con las dem�s palabras.
En la parte final del sistema, se le env�an una a una las oraciones (tweets) para que se analicen las palabras dentro de ellas para determinar la probabilidad de suicidio. Al final, tanto las palabras como los porcentajes de las palabras que se obtienen se mandan a un google sheets para posteriormente mostrar las gr�ficas en un navegador web.
El sistema est�ra implementado en un contenedor Docker y en la nube de Microsoft Azure donde Azure prover� una URL donde se podr� ver el proyecto.
El motivo final es que las personas que deseen analizar alg�n perfil de Twitter para saber si puede tener una tendencia a ser suicida puedan utilizar las publicaciones de dicha red social para examinar al perfil y tener un mayor entendimiento de esa persona en particular.


3.1 T�cnica de Machine Learning utilizada
Se utiliz� Skip Gram, una arquitectura de redes neuronales que se lleva a cabo dentro de una frase. El prop�sito es seleccionar una a una las palabras que componen la frase. Por cada palabra se analizan dem�s que la rodean para luego alimentar una red neuronal.
Esto quiere decir que se van relacionando las palabras entre s� a partir de la idea de que ciertas palabras van juntas porque se suelen utilizar juntas, suelen aparecer juntas dentro de las oraciones. Despu�s del entrenamiento el algoritmo permite predecir la probabilidad de cada una de las palabras de aparecer realmente en el contexto de la palabra de enfoque.
3.1.1 Hip�tesis
Con base en la clasificaci�n que tiene el modelo de palabras negativas y positivas, asimismo, el modelo de agrupaci�n a trav�s de redes neuronales de palabras conforme a c�mo se van usando juntas el sistema imprimir� probabilidades entre 0 y 1 de si es posible que una persona pueda suicidarse, siendo 1 completamente seguro y 0 completamente seguro que no.
3.2 Arquitectura de la soluci�n
3.3 Frontend
3.3.1 Lenguaje de programaci�n
JavaScript (ECMAScript 2016)
3.3.2 Framework
ReactJS - https://reactjs.org/
3.3.3 Librer�as de funciones o dependencias
Pandas 0.22.0 - https://pandas.pydata.org/pandas-docs/stable/
NumPy - https://docs.scipy.org/doc/numpy-dev/dev/
Sklearn - http://scikit-learn.org/stable/documentation.html
Pydotplus
IPython
Google Charts with Google Spreadsheets - https://developers.google.com/chart/interactive/docs/spreadsheets
3.4 Backend
3.4.1 Lenguaje de programaci�n
Python 3.6.0 - https://www.python.org/doc/
3.4.2 Framework
Docker - https://www.docker.com/
3.4.3 Librer�as de funciones o dependencias

Portal azure - https://portal.azure.com
Jupyter Notebook - http://jupyter.org/
Pandas 0.22.0 - https://pandas.pydata.org/pandas-docs/stable/
NumPy - https://docs.scipy.org/doc/numpy-dev/dev/
Sklearn - http://scikit-learn.org/stable/documentation.html


3.6 Pasos a seguir para utilizar el proyecto
Para este punto se toma como referencia un usuario que pueda navegar por Internet y que s�lo desea utilizar el sistema sin querer editarlo.

Paso 1. Instalar Docker en la computadora a utilizar a trav�s de https://docker.com.

Paso 2. Abrir una terminal

Paso 3. Ingresar docker run -p 4000:8888 emilianocervantes/suicideairepo:ver1. Darle enter.

Paso 4. Abrir un navegador web. Ir a http://localhost:4000.


4. Referencias

Sitios de inter�s:

https://www.omnicoreagency.com/twitter-statistics/

https://nypost.com/2017/11/14/rise-in-teen-suicide-connected-to-social-media-popularity-study/

https://techcrunch.com/2018/02/20/twitter-updates-its-policy-on-tweets-that-encourage-self-harm-and-suicide/


Datasets:
https://www.kaggle.com/crowdflower/first-gop-debate-twitter-sentiment/contributors

https://www.kaggle.com/benhamner/clinton-trump-tweets

https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/

https://medium.com/machine-learning-for-humans/unsupervised-learning-f45587588294