import { TypeArticle } from "./type-article";

export class Article {
  id: number;
  nom: string;
  prix?: number;
  image?: string;
  description?: string;
  types: TypeArticle[]; 

  constructor(rId: number, rNom: string) {
    if (!rId || !rNom) {
      throw new Error('ID et le nom sont requis pour un article.');
    }

    this.id = rId;
    this.nom = rNom;
    this.types = []; // Faire le lien avec type-article = Liste des articles associés à ce type
  }

  /**
   * Ajoute un article à la liste des articles du type
   */
  addType(type: TypeArticle): void {
    this.types.push(type);
    type.articles.push(this); 
  }
}
