import { Article } from './article';
import { ItemPanier } from './item-panier';

describe('ItemPanier', () => {
  let article: Article;
  let itemPanier: ItemPanier;

  beforeEach(() => {
    article = new Article(54, "Banjo");
    itemPanier = new ItemPanier(article);
  });

  it('devrait créer une instance', () => {
    expect(itemPanier).toBeTruthy();
  });

  it('devrait ajouter un article', () => {
    const nbArticlesInitial = itemPanier.nbarticles;
    itemPanier.addArticle();
    expect(itemPanier.nbarticles).toEqual(nbArticlesInitial + 1);
  });

  it('devrait retirer un article', () => {
    itemPanier.nbarticles = 3; 
    const nbArticlesInitial = itemPanier.nbarticles;
    itemPanier.removeArticle();
    expect(itemPanier.nbarticles).toEqual(nbArticlesInitial - 1);
  });

  it('ne devrait pas permettre un nombre d\'articles négatif après la suppression', () => {
    itemPanier.nbarticles = 0; 
    itemPanier.removeArticle(); 
    expect(itemPanier.nbarticles).toEqual(0); 
  });

  it('devrait calculer le prix total correctement', () => {
    itemPanier.nbarticles = 2; 
    article.prix = 20; 
    const prixTotal = itemPanier.getTotalPrix();
    expect(prixTotal).toEqual(40); 
  });
});
