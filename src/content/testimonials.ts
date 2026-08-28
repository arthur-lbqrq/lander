export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/**
 * Vazio até o primeiro depoimento real chegar — o componente Testimonials
 * mostra um placeholder explícito enquanto este array estiver vazio.
 * Para publicar um depoimento, adicione um objeto { quote, author, role }.
 */
export const testimonials: Testimonial[] = [];
