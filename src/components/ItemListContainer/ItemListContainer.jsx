import { useEffect, useState } from "react";
import obtenerProductos from "../Utils/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true)
    obtenerProductos
      .then((respuesta) => {
        if (categoria) {
          const productosFiltrados = respuesta.filter(
            (producto) => producto.categoria === categoria
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [categoria]);

  return (
    <>
      <div className="item-list-container">

        <ItemList productos={productos} />
      </div>

    </>
  );
};


