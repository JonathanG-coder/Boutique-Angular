import { Article } from "./article";

export class TypeArticle {
  id: number;
  nom: string;
  articles: Article[]; // Faire le lien avec article = Liste des articles associés à ce type

  constructor(rId: number, rNom: string) {
    if (!rId || !rNom) {
      throw new Error('ID et le nom sont requis pour un article.');
    }

    this.id = rId;
    this.nom = rNom;
    this.articles = [];
  }
}
