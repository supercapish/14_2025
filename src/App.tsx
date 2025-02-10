"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [headerText, setHeaderText] = useState("¿Serías mi Valentín?"); // Estado para el texto del encabezado
  const [noButtonText, setNoButtonText] = useState("No"); // Estado para el texto del botón "No"
  const [imageSrc, setImageSrc] = useState("https://media.tenor.com/s5Vk1hGqijsAAAAi/smug-smirk-with-rose-emoticon-emoticon.gif"); // Estado para la imagen
  const yesButtonSize = noCount * 40 + 16;//original 20

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Cambiar el título de la página a ";("
    document.title = ";("; // Aquí se establece el nuevo título
    // Cambiar el texto del encabezado
    setHeaderText(getHeaderText()); // Actualiza el texto del encabezado
    // Cambiar el texto del botón "No"
    setNoButtonText(getNoButtonText()); // Actualiza el texto del botón "No"
    // Cambiar la imagen
    setImageSrc(getImageSrc()); // Actualiza la imagen
  };

  const getHeaderText = () => {
    const headerPhrases = [
      "como que no",
      "di que si ultima oportunidad",
      "te lo adverti no digas que no",
      "IP:192.168.16.181",
      "Descargando...",
      "Robando Datos",
      "Usted ha sido Hackeada ",
      "Ya sabes como revertirlo",
      "ya no tienes opcion",
    ];

    return headerPhrases[Math.min(noCount,headerPhrases.length -1)]//floor(Math.random() * headerPhrases.length)];
  };

  const getNoButtonText = () => {
    const noPhrases = [
      "No",
      "No?",
      "<--ahi ",
      "oye no seas asi",
      "no hay vuelta atras",
      "te lo adverti",
      "ni modo",
      "no se"
    ];

    return noPhrases[Math.min(noCount, noPhrases.length - 1)];
  };
  const getImageSrc = () => {
    const images = [
      "https://media1.tenor.com/m/4gXRC9clEBsAAAAd/dog-gets-flung.gif",
      "https://media.tenor.com/PQnuiOtLo5wAAAAi/evaporating.gif",
      "https://media1.tenor.com/m/k-7S4OjrJ0cAAAAd/daredevil-daredevil-dog.gif",
      "https://media1.tenor.com/m/CgGUXc-LDc4AAAAC/hacker-pc.gif",//hacking lentes
      "https://media1.tenor.com/m/yoDf2V4bGzQAAAAC/hacker.gif",//hacker señor
      "https://media.tenor.com/7DeeDs3MME4AAAAi/emoji-shocked.gif",//bola amarilla hackeada
      "https://media1.tenor.com/m/zhIcXsZo6wwAAAAC/mischievous-emoji.gif",
    ];
    return images[Math.min(noCount,images.length -1)]//floor(Math.random() * images.length)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/nyKA3MuWfKQAAAAd/aimep3-gorilovers.gif" />
          <div className="my-4 text-4xl font-bold">VIVA!!! Te amo </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={imageSrc}
          />
          <h1 className="my-4 text-4xl" style={{ color: 'red' }}>{headerText}</h1> {/* Usar el estado para el texto del encabezado */}

          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              ¡Acepto! {/* Texto fijo para el botón "Yes" */}
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noButtonText} {/* Este texto cambia, pero es diferente al del encabezado */}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
