import { SiteContent, NewsItem, Product, Warehouse } from './types';

// DATA: Edit this object to change website text
export const CONTENT: SiteContent = {
    company: {
        name: "Importaciones PP",
        mission: "Satisfacer las necesidades de nuestros clientes, generando una experiencia de compra única, a través de nuestra calidad y servicio.",
        vision: "Posicionarnos como líder en el mercado nacional de vinos y licores. Destacándonos en la industria por nuestra competitividad, innovación, crecimiento, desarrollo digital, calidad y servicio de nuestro capital humano.",
        strengths: [
            "Calidad Premium Garantizada",
            "Precios Competitivos",
            "Innovación Digital",
            "Cobertura Nacional",
            "Atención Especializada B2B"
        ],
        phone: "+52 (999) 123 4567",
        email: "contacto@importacionespp.mx"
    },
    hero: {
        title: "Excelencia en Vinos y Licores",
        subtitle: "Líderes en distribución para el sureste mexicano y más allá. Abasteciendo a las cadenas hoteleras y restaurantes más exigentes."
    }
};

// DATA: Edit this array to add/remove news
export const NEWS_ITEMS: NewsItem[] = [
    {
        id: 1,
        title: "Gran Cata Anual Riviera Maya 2024",
        date: "15 Oct 2024",
        summary: "Importaciones PP presentó su nueva colección de vinos tintos españoles ante más de 200 sommeliers y chefs en Cancún.",
        imageUrl: "https://picsum.photos/id/431/800/600",
        category: "Evento"
    },
    {
        id: 2,
        title: "Apertura de Nuevo Almacén en Monterrey",
        date: "01 Nov 2024",
        summary: "Continuando con nuestra expansión nacional, inauguramos un centro de distribución estratégico para el norte del país.",
        imageUrl: "https://picsum.photos/id/188/800/600",
        category: "Noticia"
    },
    {
        id: 3,
        title: "Lanzamiento Exclusivo: Mezcal Artesanal",
        date: "20 Nov 2024",
        summary: "Incorporamos a nuestro catálogo una línea premium de mezcales oaxaqueños, disponibles para distribución inmediata.",
        imageUrl: "https://picsum.photos/id/326/800/600",
        category: "Lanzamiento"
    }
];

// DATA: Edit this array to change showcase products
export const FEATURED_PRODUCTS: Product[] = [
    { id: 1, name: "Chateau Reserve 2018", type: "Vino Tinto", region: "Bordeaux, Francia", priceRange: "$$$", imageUrl: "https://picsum.photos/id/75/400/600" },
    { id: 2, name: "Valle de Guadalupe Blanco", type: "Vino Blanco", region: "Baja California, MX", priceRange: "$$", imageUrl: "https://picsum.photos/id/225/400/600" },
    { id: 3, name: "Highland Single Malt 12Y", type: "Whisky", region: "Escocia", priceRange: "$$$$", imageUrl: "https://picsum.photos/id/430/400/600" },
    { id: 4, name: "Tequila Añejo Cristalino", type: "Tequila", region: "Jalisco, MX", priceRange: "$$$", imageUrl: "https://picsum.photos/id/366/400/600" },
];

// DATA: Edit this array to change locations
export const WAREHOUSES: Warehouse[] = [
    { id: 1, state: "Yucatán", city: "Mérida", address: "Parque Industrial Norte, Calle 60 #300", phone: "(999) 999-9999" },
    { id: 2, state: "Quintana Roo", city: "Cancún", address: "Blvd. Luis Donaldo Colosio Km 12", phone: "(998) 888-8888" },
    { id: 3, state: "CDMX", city: "Ciudad de México", address: "Av. Vallejo 500, Industrial Vallejo", phone: "(55) 5555-5555" },
    { id: 4, state: "Nuevo León", city: "Monterrey", address: "Carretera Nacional Km 250", phone: "(81) 8181-8181" },
];