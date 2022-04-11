// [
//   {
//     numero: 1,
//     texto: [
//       "Tumbada al sol en el jardín de mi casa de Bel Air, estoy ojeando una revista sobre blindaje de coches para vips, cuando mi móvil blanco, el que uso para el trabajo, emite un pitido. Alargo una mano y veo que tengo un mensaje nuevo, de Nicolae. Me cita en una cafetería del centro. No dice nada más. Dejo el teléfono sobre la tumbona y me levanto para darme un rápido baño en la piscina. Tras nadar un par de largos, entro en la casa mientras me seco el pelo, largo y rubio como buena chica del este, y lo envuelvo en una toalla.",
//       "Media hora después salgo vestida con un pantalón negro y una ajustada camiseta blanca, ocultando mis ojos azules tras unas gafas de sol. Subo al descapotable y conduzco tranquilamente hacia el lugar de la cita con Nicolae.",
//       "Mercenario sin escrúpulos, Nicolae estuvo luchando durante una década en todas las guerras que se originaron tras la caída de la antigua Unión Sovietica. Junto a sus compinches, operaba en Bosnia, Chechenia, Georgia y un largo etcétera de países en conflicto. Le conocí durante la guerra, cuando yo actuaba como francotiradora en el centro de Sarajevo. Al llegar a los Estados Unidos, lo primero que hice fue contactar con él, y no me extrañó encontrarle dirigiendo el tráfico de armas y joyas entre Los Ángeles y Moscú.",
//       "Aparco junto a la cafetería y veo a Nicolae sentado en la terraza, con una cerveza sin tocar sobre la mesa y echando lentas miradas alrededor. Es un hombre grande y corpulento, de unos cuarenta años, pelo afeitado y unos ojos profundos y escrutadores que parecen poder atravesarte el cerebro sólo con mirarte. Viste un elegante traje blanco con un pañuelo rojo en el bolsillo de la chaqueta, justo encima del ligero bulto que forma la pistola que lleva escondida debajo. Se muestra distante y confiado, seguro de sí mismo hasta resultar repulsivo.",
//       "Al verme, levanta ligeramente una mano en señal de saludo y vuelve a examinar la tranquila avenida.",
//       "- Vlada, estás preciosa, como siempre -dice con voz melosa y acaricia mi brazo levemente mientras me invita a sentarme. Respondo a su halago con una fría sonrisa y hago un gesto al camarero para que me sirva un agua mineral.",
//       "- El encargo es sencillo -sigue hablando Nicolae una vez se aleja el chico-, pero eso no significa que sea fácil -entonces extrae una fotografía de su chaqueta y la tiende sobre la mesa. En ella se ve a un hombre oriental, gordo como un cerdo, de cara obesa y pequeños ojillos glotones-. Éste es Xuilei, un conocido mafioso de Hong Kong recién llegado a Los Ángeles. Parece ser que quiere meterse en varios negocios, cosa que no nos conviene en absoluto. Él es tu objetivo, elimínalo como quieras, sin importar la forma. Mátalo a él y a quien sea que esté con él. Eso es lo principal; no puede haber testigos. Lo último que necesitamos es una guerra con las tríadas chinas.",
//       "- ¿Dónde y cuándo? -pregunto, guardándome la fotografía en un bolsillo del pantalón. - Xiulei se aloja en la suite del hotel Luxury de Santa Monica. Esta noche será la última que duerma allí. No debe llegar a mañana. Asiento levemente y recoloco mis gafas de sol. - Recuerda: No debe haber testigos -insiste Nicolae, como si hiciese falta que me lo recordase.",
//     ],
//     accion: { existe: false, accion: "", dato: "" },
//     opciones: [
//       { texto: "Continuar", exito: 25, modificadores: "" },
//     ],
//   },
//   {
//     numero: 3,
//     texto: [
//       "De pronto, resuenan unos pasos en el pasillo a mi espalda. Me vuelvo para encontrarme con otro vigilante chino, vestido también de traje y cuyos ojos rasgados se abren por la sorpresa al verme junto a la puerta de la suite. Con un rápido movimiento, saco mi pistola y abro fuego, mientras él busca bajo su chaqueta su propia arma. ",
//     ],
//     imagen:
//       "https://res.cloudinary.com/do8tmezpd/image/upload/v1648747478/gamebook-1/ficha3_gixtiq.png",
//     accion: { existe: false, accion: "", dato: "" },
//     chequeo: true,
//     opciones:
//       {
//         texto: "Disparas",
//         exito: 32,
//         fracaso: 19,

//         modificadores: {
//           dificultad: -4,
//           descripcion: { fria: 1, diestra: 2 },
//           conocimiento: ["Armas fuego"],
//         },
//       },
//   }
// ];

let Lineas = [
  {
    numero: 1,
    texto: [
      "Tumbada al sol en el jardín de mi casa de Bel Air, estoy ojeando una revista sobre blindaje de coches para vips, cuando mi móvil blanco, el que uso para el trabajo, emite un pitido. Alargo una mano y veo que tengo un mensaje nuevo, de Nicolae. Me cita en una cafetería del centro. No dice nada más. Dejo el teléfono sobre la tumbona y me levanto para darme un rápido baño en la piscina. Tras nadar un par de largos, entro en la casa mientras me seco el pelo, largo y rubio como buena chica del este, y lo envuelvo en una toalla.",
      "Media hora después salgo vestida con un pantalón negro y una ajustada camiseta blanca, ocultando mis ojos azules tras unas gafas de sol. Subo al descapotable y conduzco tranquilamente hacia el lugar de la cita con Nicolae.",
      "Mercenario sin escrúpulos, Nicolae estuvo luchando durante una década en todas las guerras que se originaron tras la caída de la antigua Unión Sovietica. Junto a sus compinches, operaba en Bosnia, Chechenia, Georgia y un largo etcétera de países en conflicto. Le conocí durante la guerra, cuando yo actuaba como francotiradora en el centro de Sarajevo. Al llegar a los Estados Unidos, lo primero que hice fue contactar con él, y no me extrañó encontrarle dirigiendo el tráfico de armas y joyas entre Los Ángeles y Moscú.",
      "Aparco junto a la cafetería y veo a Nicolae sentado en la terraza, con una cerveza sin tocar sobre la mesa y echando lentas miradas alrededor. Es un hombre grande y corpulento, de unos cuarenta años, pelo afeitado y unos ojos profundos y escrutadores que parecen poder atravesarte el cerebro sólo con mirarte. Viste un elegante traje blanco con un pañuelo rojo en el bolsillo de la chaqueta, justo encima del ligero bulto que forma la pistola que lleva escondida debajo. Se muestra distante y confiado, seguro de sí mismo hasta resultar repulsivo. Al verme, levanta ligeramente una mano en señal de saludo y vuelve a examinar la tranquila avenida.",
      "- Vlada, estás preciosa, como siempre -dice con voz melosa y acaricia mi brazo levemente mientras me invita a sentarme. Respondo a su halago con una fría sonrisa y hago un gesto al camarero para que me sirva un agua mineral.",
      "- El encargo es sencillo -sigue hablando Nicolae una vez se aleja el chico-, pero eso no significa que sea fácil -entonces extrae una fotografía de su chaqueta y la tiende sobre la mesa. En ella se ve a un hombre oriental, gordo como un cerdo, de cara obesa y pequeños ojillos glotones-. Éste es Xuilei, un conocido mafioso de Hong Kong recién llegado a Los Ángeles. Parece ser que quiere meterse en varios negocios, cosa que no nos conviene en absoluto. Él es tu objetivo, elimínalo como quieras, sin importar la forma. Mátalo a él y a quien sea que esté con él. Eso es lo principal; no puede haber testigos. Lo último que necesitamos es una guerra con las tríadas chinas.",
      "- ¿Dónde y cuándo? -pregunto, guardándome la fotografía en un bolsillo del pantalón. - Xiulei se aloja en la suite del hotel Luxury de Santa Monica. Esta noche será la última que duerma allí. No debe llegar a mañana. Asiento levemente y recoloco mis gafas de sol. - Recuerda: No debe haber testigos -insiste Nicolae, como si hiciese falta que me lo recordase.",
    ],
    opciones: [{ texto: "Continuar", exito: 25 }],
  },
  {
    numero: 2,
    texto: [
      "El silenciador atenúa el sonido de la muerte. El cuerpo desnudo queda agrupado sobre el ensangrentado suelo, en posición fetal. Me fuerzo a apartar la mirada. Una vez terminado el trabajo, me apresuro en salir del dormitorio. Ya en el pasillo, se oyen gritos y demandas de ayuda. El panel luminoso de los ascensores indica que uno está subiendo. Más allá se abre el hueco de las escaleras.",
    ],
    accion: "apuntar",
    palabra: "NIÑO",
    opciones: [
      { texto: "Esperar al ascensor", exito: 24 },
      { texto: "Escapar escaleras abajo", exito: 49 },
    ],
  },
  {
    numero: 3,
    texto: [
      "De pronto, resuenan unos pasos en el pasillo a mi espalda. Me vuelvo para encontrarme con otro vigilante chino, vestido también de traje y cuyos ojos rasgados se abren por la sorpresa al verme junto a la puerta de la suite. Con un rápido movimiento, saco mi pistola y abro fuego, mientras él busca bajo su chaqueta su propia arma. ",
    ],
    imagen:
      "https://res.cloudinary.com/do8tmezpd/image/upload/v1648747478/gamebook-1/ficha3_gixtiq.png",
    chequeo: true,
    modificadores: {
      dificultad: -3,
      conocimientos: ["Armas fuego"],
      descripcion: { diestra: 2, fria: 1 },
    },
    exito: 32,
    fracaso: 19,
  },
  {
    numero: 4,
    texto: [
      "No alcanzo a los guardias, que disparan sobre mí. Un chispazo de dolor sacude mi brazo al atravesarme una bala (recibes una Herida). Antes de que puedan volver a disparar, me lanzo sobre ellos para eliminarlos.",
    ],
    accion: "herida",
    herida: 1,
    opciones: [{ texto: "Continuar", exito: 31 }],
    imagen:
      "https://res.cloudinary.com/do8tmezpd/image/upload/v1648911926/gamebook-1/ficha4_m6cs4f.png",
  },
  {
    numero: 5,
    texto: [
      "Una vez me he deshecho del guardaespaldas, me acerco hacia la gran puerta que conduce a lo que supongo es el dormitorio de la suite. Al abrirla,me encuentro en una enorme habitación. La cama revuelta ocupa el centro, mientras que mullidos sofás se alinean ante un ventanal que ocupa por completo la pared sur, ofreciendo una magnífica paronámica de la luminosa noche de Los Ángeles. Apunto con la pistola, buscando al objetivo que me ha traído hasta aquí.",
    ],
    comprobacion: { palabra: "ALARMA" },
    exito: 30,
    fracaso: 5.1,
  },
  {
    numero: 5.1,
    texto: [
      "La puerta del baño se abre en ese momento. Por ella aparece Xiulei, totalmente desnudo, su blanco y fofo cuerpo cayendo en pellejos colgantes por encima de su bajo vientre. El puro que cuelga de sus labios está a punto de caerse cuando me descubre en su habitación. Al instante, da un grito, en chino, supongo que pidiendo ayuda, mientras se lanza hacia la mesilla de noche, donde reposa una escopeta de cañones recortados. Le apunto con la pistola y le disparo antes de que la alcance.",
    ],
    chequeo: true,
    modificadores: {
      dificultad: -2,
      conocimientos: ["Armas fuego"],
      descripcion: { diestra: 2, fria: 1 },
    },
    exito: 43,
    fracaso: 14,
  },
  {
    numero: 6,
    texto: [
      "Saco con rapidez mi pistola y disparo sobre el sorprendido guardia. La cabeza del chino revienta con un crujido, salpicando de sangre toda la pared. Por desgracia, el cuerpo cae sobre una de las mesas, derribando una lámpara al suelo.",
    ],
    accion: "Tirar dado",
    // if herida no existe, lo siguiente
    resultados: { menosCuatro: { accion: "apuntar", palabra: "ALARMA" } },
    opciones: { texto: "Continuar", exito: 15 },
  },
  {
    numero: 7,
    texto: [
      "- ¡Esa mujer! -grita de pronto la vieja, señalándome con el dedo.",
      " -¡Esa mujer estaba arriba, la vi luchando con los otros hombres! -insiste, tirando del brazo del policía. El hombre duda un instante, pero otro testigo aparece y corrobora la versión de la vieja.",
    ],
    opciones: [{ texto: "Continuar", exito: 40 }],
  },
  {
    numero: 8,
    texto: [
      "Me lanzo contra la puerta de la suite y arremeto con una patada frontal, justo a la altura de la cerradura. La madera se quiebra con un crujido y la puerta se abre de golpe, dando a un amplio salón abarrotado de muebles, mesas y sillones. Me lanzo al interior con la pistola preparada, justo para encontrarme con un guardia que surge tras una de las columnas. El hombre da un grito, mientras alza su pistola y dispara sobre mí. Las explosiones retumban en la sala. Con un giro, me vuelvo hacia a un lado y salto para ponerme a cubierto tras uno de los sillones.",
    ],
    chequeo: true,
    modificadores: {
      dificultad: -3,
      conocimientos: ["Atletismo"],
      descripcion: { agil: 2, logica: 1 },
    },
    exito: 38,
    fracaso: 17,
  },
  {
    numero: 9,
    texto: [
      "Salto escaleras abajo. Arriba se escuchan los pasos apresurados de varios chinos que me persiguen, gritando que me detenga. Alcanzo por fin la planta baja. Un gran revuelo se ha montado en el vestíbulo de entrada: Los clientes salen por las puertas mientras aseguran a gritos haber oído disparos. Los conserjes intentan mantener la calma y llaman por teléfono. Un grupo de cuatro policías irrumpe entonces por las puertas giratorias y se ponen a hablar con el director del hotel.",
      "Si quiero salir por la puerta principal, tendré que cruzarme con esos policías. Durante un instante, dudo en salir al vestíbulo, cuando veo una puerta lateral que lleva a las cocinas. Quizás por ellas pueda alcanzar la puerta trasera del hotel.",
    ],
    opciones: [
      { texto: "Salir por la puerta principal", exito: 45 },
      { texto: "Huir por las cocinas", exito: 54 },
    ],
  },
  {
    numero: 10,
    texto: [
      "Esquivo la patada del chino y le agarro por debajo, alzándolo para lanzarlo por encima de mi hombro y hacerle aterrizar de cabeza contra el suelo. El cráneo cruje al impactar contra las baldosas. Me vuelvo con rapidez, justo en el momento en que su compañero me apunta con su pistola. Salto por encima de un mostrador mientras los disparos atruenan en la cocina y hacen volar en pedazos cacharros y cubiertos. Nada más caer al otro lado, saco mi pistola y me levanto para devolver el fuego.",
    ],
    imagen:
      "https://res.cloudinary.com/do8tmezpd/image/upload/v1648911926/gamebook-1/ficha10_cfbtuf.png",
    chequeo: true,
    modificadores: {
      dificultad: -2,
      conocimientos: ["Armas fuego"],
      descripcion: { diestra: 1, fria: 1 },
    },
    exito: 27,
    fracaso: 36,
  },
  {
    numero: 11,
    texto: [
      "De pronto, el guardia descubre mis intenciones. Su mirada se ilumina por la sorpresa, antes de darse la vuelta y correr hacia la puerta.",
    ],
    opciones: [
      { texto: "Dispararle antes de que dé la alarma", exito: 6 },
      { texto: "Saltar sobre él y silenciarlo", exito: 21 },
    ],
  },
  {
    numero: 12,
    texto: [
      "Me echo a un lado y abro la puerta metálica de la nevera, estampándosela en la cara al chino, que recibe el golpe de pleno y se derrumba sin sentido. Su compañero alza su pistola y abre fuego, pero salto por encima de un mostrador y esquivo los disparos, que hacen pedazos la vajilla y los cacharros. Nada más caer al otro lado, saco mi pistola y me levanto apuntándole.",
    ],
    chequeo: true,
    modificadores: {
      dificultad: -2,
      conocimientos: ["Armas fuego"],
      descripcion: { diestra: 1, fria: 1 },
    },
    exito: 27,
    fracaso: 36,
  },
  {
    numero: 13,
    texto: [
      "Sigilosa como un gato, cruzo el salón hasta situarme detrás del guardia, que sigue leyendo el periódico. Me incoporo a su espalda y, agarrándole con ambas manos del cuello, le silencio con un violento giro. El cuello se rompe con un chasquido y el cuerpo cae de lado sobre el sillón.",
    ],
    opciones: [{ texto: "Continuar", exito: 5 }],
  },
  {
    numero: 14,
    texto: [
      "Descargo mi pistola sobre el gordo, pero sólo logro herirle en el brazo. Inmune al dolor, Xiulei dispara su escopeta, que truena como un relámpago, alcanzándome de pleno y haciéndome volar un par de metros hacia atrás. Caigo al suelo sangrando por el estómago.",
    ],
    accion: "Tirar dado",
    heridas: true,
    opciones: [{ texto: "Continuar", exito: 14.1 }],
  },
  {
    numero: 14.1,
    texto: [
      "Escupo un espumajo y meto otro cargador en la pistola. Xiulei cree que ha acabado conmigo. Me levanto y le demuestro cuan equivocado está.",
    ],
    opciones: [{ texto: "Continuar", exito: 43 }],
  },
  {
    numero: 15,
    texto: [
      "Una vez me deshago del guardia, continúo por el pasillo, alerta por si aparecen más guardaespaldas. Me deslizo con cuidado hasta la entrada de la suite, una doble puerta cerrada con un lector magnético.",
    ],
    comprobacion: { palabra: "ALARMA" },
    exito: 3,
    fracaso: 15.1,
  },
  {
    numero: 15.1,
    texto: [
      "Me cubro junto a la puerta, evitando el ángulo de visión de la mirilla. En ese momento descubro sobre mi cabeza la rejilla de un conducto de ventilación, que recorre todo el pasillo con salidas a cada una de las habitaciones.",
    ],
    opciones: [
      {
        texto: "Echar la puerta abajo y entrar con la pistola preparada",
        exito: 8,
      },
      {
        condicional: { cosas: "ganzua" },
        texto: "Forzar cerradura",
        exito: 23,
      },
      { texto: "Meterte por el conducto de ventilación", exito: 37 },
    ],
  },
  {
    numero: 16,
    texto: [
      "Abro fuego con la escopeta, acribillándoles a quemarropa. Los chinos se retuercen a cámara lenta al ser alcanzados por una lluvia de perdigones: Sus rostros se quiebran por el dolor, las blancas camisas estallan en sangrantes erupciones, sus brazos aletean mientras se derrumban al suelo.",
      "Vacío la recamara de la escopeta sobre ellos, el pasillo retumbando con cada disparo. Al final, sólo quedan los cadáveres sobre el suelo y la destrozada pared detrás. Arrojo la inservible escopeta y sigo corriendo escaleras abajo.",
    ],
    accion: "borrar",
    cosas: "escopeta",
    opciones: [{ texto: "Continuar", exito: 9 }],
  },
  { numero: 17, texto: [], opciones: [{ texto: "Continuar", exito: 26 }] },
  { numero: 18, texto: [] },
  { numero: 19, texto: [], opciones: [{ texto: "Continuar", exito: 32 }] },
  { numero: 20, texto: [] },
  { numero: 21, texto: [] },
  { numero: 22, texto: [] },
  { numero: 23, texto: [] },
  { numero: 24, texto: [] },
  {
    numero: 25,
    texto: [
      "Son pasadas las diez de la noche cuando entro en el vestíbulo del Luxury. El hotel hace honor a su nombre con un horrible estilismo de pomposos muebles de madera oscura y lámparas bañadas en oro. El suelo de mármol blanco reluce brillante y guía mis pasos hasta la recepción. Tras una breve charla con el recepcionista, me dirijo a los ascensores y subo en uno hasta la última planta.",
      "Un pitido eléctrico resuena en la cabina al alcanzar mi destino. Las puertas metálicas de abren dando a un desierto pasillo, alfombrado en verde y con numerosos cuadros adornando las paredes color crema. Me dirijo por el corredor hasta el pasillo que lleva a la suit. Desde la esquina, me asomo levemente y veo a un guardia que vigila el paso. Se trata de un chino de pelo engominado, vestido con un elegante traje negro. El hombre camina aburrido de un lado a otro, mientras observa con curiosidad alguno de los cuadros.",
    ],
    opciones: [
      { texto: "Dispararle por sorpresa", exito: 6 },
      { texto: "Hablar con él e intentar distraerle", exito: 18 },
      { texto: "Acecharle cuando esté de espaldas y eliminarlo", exito: 41 },
    ],
  },
  { numero: 26, texto: [] },
  { numero: 27, texto: [] },
  { numero: 28, texto: [], opciones: [{ texto: "Continuar", exito: 15 }] },
  { numero: 29, texto: [], opciones: [{ texto: "Continuar", exito: 49 }] },
  { numero: 30, texto: [] },
  { numero: 31, texto: [], opciones: [{ texto: "Continuar", exito: 9 }] },
  { numero: 32, texto: [] },
  { numero: 33, texto: [] },
  { numero: 34, texto: [] },
  { numero: 35, texto: [], opciones: [{ texto: "Continuar", exito: 49 }] },
  { numero: 36, texto: [], opciones: [{ texto: "Continuar", exito: 27 }] },
  { numero: 37, texto: [] },
  { numero: 38, texto: [], opciones: [{ texto: "Continuar", exito: 26 }] },
  { numero: 39, texto: [] },
  {
    numero: 40,
    texto: [],
    final: "Continúa en Asesina: La Fuga",
    libro: "LaFuga",
  },
  { numero: 41, texto: [] },
  { numero: 42, texto: [] },
  { numero: 43, texto: [] },
  { numero: 44, texto: [] },
  { numero: 45, texto: [] },
  { numero: 46, texto: [] },
  { numero: 47, texto: [] },
  { numero: 48, texto: [] },
  { numero: 49, texto: [] },
  {
    numero: 50,
    texto: [
      "Recostada en el asiento trasero del taxi, le doy una dirección al conductor, un parking de las afueras donde tengo un coche para emergencias. Observo mis heridas y golpes, aunque ninguna es grave. Entonces me viene una imagen, repentina y directa como un relámpago: el rostro del niño, desnudo en el lavabo, suplicando por su vida. Cierro los ojos, pero la imagen permanece. Remordimiento. El sentimiento me abrasa el estómago como ácido. Jamás lo había sentido hasta ahora. Niego con la cabeza y aparto el pensamiento. Matar es mi trabajo, no importa quién sea la víctima. ¿O si?",
      "- ¿Está segura de que quiere ir tan lejos? -me pregunta el conductor, un hispano con pinta de hablador.",
      "- Sí, lejos -asiento, y cierro los ojos e intento no pensar, y, simplemente, me dejo llevar, lejos.",
    ],
    final: "Continúa en Asesina: La Tierra Prometida",
    libro: "TierraPrometida",
  },
  { numero: 51, texto: [], opciones: [{ texto: "Continuar", exito: 51 }] },
  { numero: 52, texto: [] },
  { numero: 53, texto: [], opciones: [{ texto: "Continuar", exito: 9 }] },
  { numero: 54, texto: [] },
  { numero: 55, texto: [], opciones: [{ texto: "Continuar", exito: 40 }] },
  { numero: 56, texto: [], opciones: [{ texto: "Continuar", exito: 15 }] },
  { numero: 57, texto: [], opciones: [{ texto: "Continuar", exito: 29 }] },
  { numero: 58, texto: [] },
  { numero: 59, texto: [], opciones: [{ texto: "Continuar", exito: 49 }] },
  {
    numero: 60,
    texto: [],
    final: "Continúa en Asesina: El Substituto",
    libro: "Substituto",
  },
];
export default Lineas;
