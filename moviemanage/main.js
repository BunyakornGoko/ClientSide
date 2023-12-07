//65130500108 Bunyakorn Pornsombatpaibool

class Movies {
    constructor(){
      this.movies = []
    }
  
  
  getAllMovies(){
    return this.movies
  }
  
  
  addMovie(title, director, year, genre){
    const addMovie1 = {title:title,director:director,year:year,genre:genre}
    if((!director || !year || !genre) || (this.movies.some((movie) => movie.title.toLowerCase() === title.toLowerCase() && movie.director.toLowerCase() === director.toLowerCase()) === true)){
      return undefined
    }
    this.movies.push(addMovie1)
    return addMovie1
  }
  
  updateMovie(title, {...updatedDetails}){
    const indexoftitle = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if(indexoftitle !== -1){
      if(updatedDetails.director !== undefined){
        this.movies[indexoftitle].director = updatedDetails.director
      }
      if(updatedDetails.year !== undefined){
        this.movies[indexoftitle].year = updatedDetails.year
      }
      if(updatedDetails.genre !== undefined){
        this.movies[indexoftitle].genre = updatedDetails.genre
      }
      return this.movies[indexoftitle]
    }
    return undefined
  }
  
  deleteMovieByTitle(title){
    if(this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase()) === -1){
      return 
    }
    const indexoftitle = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    this.movies.splice(indexoftitle,1)
  }
  }