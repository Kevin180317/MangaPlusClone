"use client";
import React, { useState } from "react";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import { FaHashtag} from 'react-icons/fa'
const SelectNumero = () => {
  const [selectedNumero, setSelectedNumero] = useState("240");
  const [isLoading, setIsLoading] = useState(false); 

  const numerosDescendentes = [];
  for (let i = 240; i >= 238; i--) {
    numerosDescendentes.push(i.toString());
  }

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
          {numerosDescendentes.map((numero) => (
            <SelectItem key={numero} value={numero}>
              {numero}
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
              {Array.from({ length: 19 }, (_, index) => (
                <img
                  key={index}
                  src={`/${selectedNumero}/pagina${index}.jpg`}
                  alt={`Página ${selectedNumero}`}
                  className="max-w-full mt-4"
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
