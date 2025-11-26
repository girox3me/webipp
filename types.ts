export interface NewsItem {
    id: number;
    title: string;
    date: string;
    summary: string;
    imageUrl: string;
    category: 'Evento' | 'Noticia' | 'Lanzamiento';
}

export interface Product {
    id: number;
    name: string;
    type: string;
    region: string;
    priceRange: string; // Symbolic representation e.g., $$
    imageUrl: string;
}

export interface Warehouse {
    id: number;
    state: string;
    city: string;
    address: string;
    phone: string;
}

export interface SiteContent {
    company: {
        name: string;
        mission: string;
        vision: string;
        strengths: string[];
        phone: string;
        email: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
}