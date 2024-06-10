import { Article } from "./article";

export class ItemPanier {
  article: Article;
  nbarticles: number = 1;

  constructor(rArticle: Article) {
    this.article = rArticle;
    this.nbarticles = 1;
  }

  /**
   * compte ajout article
   */
  addArticle() {
    this.nbarticles++;
  }

  /**
   * decompte ajout article
   */
   removeArticle() {
    this.nbarticles = Math.max(--this.nbarticles, 0);
  }

   /**
   * Calcule le prix total
   */
   getTotalPrix(): number {
    return this.article.prix ? this.article.prix * this.nbarticles : 0;
  }
}
