
export class QuotesService{
  private favoriteQuotes = [];

  addQuoteToFavorites(quote){
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote){
    const position = this.favoriteQuotes.findIndex((quoteElement) =>{
      return quoteElement.id == quote.id;
    });
    this.favoriteQuotes.splice(position,1);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }
}
