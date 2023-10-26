"use client";
import React, { useState } from "react";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import { FaHashtag } from 'react-icons/fa';

const SelectNumero = () => {
  const [selectedNumero, setSelectedNumero] = useState("240");
  const [isLoading, setIsLoading] = useState(false);

  const capitulos = [
    { id: "240", imagenes: 20 },
    { id: "239", imagenes: 19 },
    { id: "238", imagenes: 19 }
  ];

  const handleSelectChange = (event) => {
    const numeroSeleccionado = event.target.value;

    setIsLoading(true);

    setTimeout(() => {
      setSelectedNumero(numeroSeleccionado);
      setIsLoading(false);
      console.log(`Número seleccionado: ${numeroSeleccionado}`);
    }, 1000);
  };

  const imagenesDisponibles = (numero) => {
    return numero !== "1";
  };

  const getImagenesCount = (numero) => {
    const capitulo = capitulos.find(cap => cap.id === numero);
    return capitulo ? capitulo.imagenes : 0;
  };

  return (
    <div className="p-8">
      <h2 className="text-center">Selecciona un capitulo:</h2>
      <div className="flex justify-center">
        <Select
          label="Número"
          placeholder="Selecciona un número"
          value={selectedNumero}
          onChange={handleSelectChange}
          defaultSelectedKeys={["240"]}
          startContent={<FaHashtag />}
          className="max-w-xs"
        >
          {capitulos.map((capitulo) => (
            <SelectItem key={capitulo.id} value={capitulo.id}>
              {capitulo.id}
            </SelectItem>
          ))}
        </Select>
      </div>
      {isLoading ? (
        <div className="flex justify-center mt-4">
          <Spinner color="primary" labelColor="primary" />
        </div>
      ) : (
        <>
          {imagenesDisponibles(selectedNumero) ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              {Array.from({ length: getImagenesCount(selectedNumero) }, (_, index) => (
                <img
                  key={index}
                  src={`/${selectedNumero}/pagina${index}.jpg`} 
                  alt={`Página ${selectedNumero}`}
                  className="w-[100vh] mt-4"
                />
              ))}
            </div>
          ) : (
            <h1 className="text-center">No se encontraron imágenes</h1>
          )}
        </>
      )}
    </div>
  );
};

export default SelectNumero;
