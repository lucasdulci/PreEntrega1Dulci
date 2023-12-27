const productos = [
    {
      id: "1",
      nombre: "PS3",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 16,
      precio: 100,
      imagen: "/img/ps3.webp",
      categoria: "sony"
    },
    {
      id: "2",
      nombre: "PS4",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 4,
      precio: 150,
      imagen: "/img/ps4.webp",
      categoria: "sony"
    },
    {
      id: "3",
      nombre: "PS5",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 7,
      precio: 300,
      imagen: "/img/ps5.webp",
      categoria: "sony"
    },
    {
      id: "4",
      nombre: "XBOX 360",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 9,
      precio: 100,
      imagen: "/img/xbox360.webp",
      categoria: "microsoft"
    },
    {
      id: "5",
      nombre: "XBOX SERIES S",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 9,
      precio: 120,
      imagen: "/img/xbox-series-s.webp",
      categoria: "microsoft"
    },
    {
      id: "6",
      nombre: "XBOX SERIES X",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 15,
      precio: 250,
      imagen: "/img/xbox-series-x.webp",
      categoria: "microsoft"
    },
    {
      id: "7",
      nombre: "NINTENDO WII",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 3,
      precio: 110,
      imagen: "/img/nintendo-wii.webp",
      categoria: "nintendo"
    },
    {
      id: "8",
      nombre: "NINTENDO SWITCH LITE",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 3,
      precio: 170,
      imagen: "/img/nintendo-lite.webp",
      categoria: "nintendo"
    },
    {
      id: "9",
      nombre: "NINTENDO SWITCH OLED",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stock: 2,
      precio: 280,
      imagen: "/img/nintendo-switch.webp",
      categoria: "nintendo"
    },
  ];
  
  const obtenerProductos = new Promise((resolve ) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos