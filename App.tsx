"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [headerText, setHeaderText] = useState("¿Serías mi Valentín?"); // Estado para el texto del encabezado
  const [noButtonText, setNoButtonText] = useState("No"); // Estado para el texto del botón "No"
  const [imageSrc, setImageSrc] = useState("https://media1.tenor.com/m/8Q0eOwIuzyYAAAAC/aimep3-aimelover.gif"); // Estado para la imagen
  const yesButtonSize = noCount * 20 + 16;

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
      "¿Serías mi Valentín?",
      "Eres increíble!",
      "¡Te quiero mucho!",
      "Eres la mejor!",
      "¿Qué piensas de esto?",
      "¡Eres especial!",
      "¡Eres única!",
      "¡Eres maravillosa!",
    ];

    return headerPhrases[Math.floor(Math.random() * headerPhrases.length)];
  };

  const getNoButtonText = () => {
    const noPhrases = [
      "No",
      "¿Estás segura?",
      "Última oportunidad",
      "Obteniendo dirección, ¿segura?",
      "IP:192.168.1.225",
      "Ubicación exacta:",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep, I'm dead",
      "ok, you're talking to Nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
      "Hola", // Nueva frase añadida
      "Adiós"  // Nueva frase añadida
    ];

    return noPhrases[Math.min(noCount, noPhrases.length - 1)];
  };
  const getImageSrc = () => {
    const images = [
      "https://media1.tenor.com/m/8Q0eOwIuzyYAAAAC/aimep3-aimelover.gif",
      "https://media.tenor.com/PQnuiOtLo5wAAAAi/evaporating.gif",
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/nXlJOW35lvYAAAAi/5.gif" />
          <div className="my-4 text-4xl font-bold">VIVA!!! Te amo amor!! ;))</div>
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