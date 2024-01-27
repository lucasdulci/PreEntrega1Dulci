import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  // const [cargando, setCargando] = useState(false);

  const { categoria } = useParams();

  useEffect(() => {
  

    let consulta
    const productosRef = collection(db, "products")

    if (categoria) {
      consulta = query(productosRef, where("categoria", "==", categoria))
    } else {
      // traer la data
      consulta = productosRef;
    }

    getDocs(consulta).then((respuesta) => {
      let productosDB = respuesta.docs.map((products) => {
        return { id: products.id, ...products.data() }
      })
      setProductos(productosDB)
    })
      .catch((error) => console.log(error))
      // .finally(() => setCargando(false))

  }, [categoria]);

  return (
    <>
      <div className="item-list-container">

        <ItemList productos={productos} />
      </div>

    </>
  );
};


