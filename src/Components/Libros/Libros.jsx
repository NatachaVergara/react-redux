import React from "react";
import { useGetLibrosQuery } from "../../api/apisSlice";

const Libros = () => {
  const { data: libros, isError, isLoading, error } = useGetLibrosQuery();

  if (isLoading) return <div>Cargando.....</div>;
  else if (isError) return <div>Error: {error.message} </div>;

  console.log(libros);

  return (
    <div>
      {" "}
      {libros.map((libro) => (
        <p className="text-3xl font-bold underline" key={libro.id}>Titulo: {libro.titulo} </p>
      ))}{" "}
    </div>
  );
};

export default Libros;
