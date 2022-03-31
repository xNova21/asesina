let Lineas = [
  {
    numero: 1,
    texto: [
      "Tumbada al sol en el jardín de mi casa de Bel Air, estoy ojeando una revista sobre blindaje de coches para vips, cuando mi móvil blanco, el que uso para el trabajo, emite un pitido. Alargo una mano y veo que tengo un mensaje nuevo, de Nicolae. Me cita en una cafetería del centro. No dice nada más. Dejo el teléfono sobre la tumbona y me levanto para darme un rápido baño en la piscina. Tras nadar un par de largos, entro en la casa mientras me seco el pelo, largo y rubio como buena chica del este, y lo envuelvo en una toalla.",
      "Media hora después salgo vestida con un pantalón negro y una ajustada camiseta blanca, ocultando mis ojos azules tras unas gafas de sol. Subo al descapotable y conduzco tranquilamente hacia el lugar de la cita con Nicolae.",
      "Mercenario sin escrúpulos, Nicolae estuvo luchando durante una década en todas las guerras que se originaron tras la caída de la antigua Unión Sovietica. Junto a sus compinches, operaba en Bosnia, Chechenia, Georgia y un largo etcétera de países en conflicto. Le conocí durante la guerra, cuando yo actuaba como francotiradora en el centro de Sarajevo. Al llegar a los Estados Unidos, lo primero que hice fue contactar con él, y no me extrañó encontrarle dirigiendo el tráfico de armas y joyas entre Los Ángeles y Moscú.",
      "Aparco junto a la cafetería y veo a Nicolae sentado en la terraza, con una cerveza sin tocar sobre la mesa y echando lentas miradas alrededor. Es un hombre grande y corpulento, de unos cuarenta años, pelo afeitado y unos ojos profundos y escrutadores que parecen poder atravesarte el cerebro sólo con mirarte. Viste un elegante traje blanco con un pañuelo rojo en el bolsillo de la chaqueta, justo encima del ligero bulto que forma la pistola que lleva escondida debajo. Se muestra distante y confiado, seguro de sí mismo hasta resultar repulsivo.",
      "Al verme, levanta ligeramente una mano en señal de saludo y vuelve a examinar la tranquila avenida.",
      "- Vlada, estás preciosa, como siempre -dice con voz melosa y acaricia mi brazo levemente mientras me invita a sentarme. Respondo a su halago con una fría sonrisa y hago un gesto al camarero para que me sirva un agua mineral.",
      "- El encargo es sencillo -sigue hablando Nicolae una vez se aleja el chico-, pero eso no significa que sea fácil -entonces extrae una fotografía de su chaqueta y la tiende sobre la mesa. En ella se ve a un hombre oriental, gordo como un cerdo, de cara obesa y pequeños ojillos glotones-. Éste es Xuilei, un conocido mafioso de Hong Kong recién llegado a Los Ángeles. Parece ser que quiere meterse en varios negocios, cosa que no nos conviene en absoluto. Él es tu objetivo, elimínalo como quieras, sin importar la forma. Mátalo a él y a quien sea que esté con él. Eso es lo principal; no puede haber testigos. Lo último que necesitamos es una guerra con las tríadas chinas.",
      "- ¿Dónde y cuándo? -pregunto, guardándome la fotografía en un bolsillo del pantalón. - Xiulei se aloja en la suite del hotel Luxury de Santa Monica. Esta noche será la última que duerma allí. No debe llegar a mañana. Asiento levemente y recoloco mis gafas de sol. - Recuerda: No debe haber testigos -insiste Nicolae, como si hiciese falta que me lo recordase.",
    ],
    accion: { existe: false, accion: "", dato: "" },
    opciones: [
      { texto: "Continuar", exito: 25, chequeo: false, modificadores: "" },
    ],
  },
  {
    numero: 3,
    texto: [
      "De pronto, resuenan unos pasos en el pasillo a mi espalda. Me vuelvo para encontrarme con otro vigilante chino, vestido también de traje y cuyos ojos rasgados se abren por la sorpresa al verme junto a la puerta de la suite. Con un rápido movimiento, saco mi pistola y abro fuego, mientras él busca bajo su chaqueta su propia arma. ",
    ],
    imagen:
      "https://res.cloudinary.com/do8tmezpd/image/upload/v1648747478/gamebook-1/ficha3_gixtiq.png",
    accion: { existe: false, accion: "", dato: "" },
    opciones: [
      { chequeo: true,
        texto: "Disparas",
        exito: 32,
        fracaso: 19,
        
        modificadores: {
          dificultad: -4,
          descripcion: { fria: 1, diestra: 2 },
          conocimiento: ["Armas fuego"],
        },
      },
    ],
  }
];

export default Lineas;
