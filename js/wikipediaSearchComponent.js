export function WikipediaSearch() {
  async function queryWikiApi(){
      const response = await fetch('https://en.wikipedia.org/w/rest.php/v1/search/title?q=Foo&limit=20');
      return await response.json();
  }

    queryWikiApi().then(results => {
       let listElement =  document.querySelector('#wikipedia-search-result');
        for(const [index, result] of results.pages.entries()){
            if (index === results.pages.length - 1){
                listElement.innerHTML += `<li><h3> ${ result.title } </h3><input type='text' placeholder='Search for pages containing [x]...'></li>`
                return;
            }
            listElement.innerHTML += `<li> <img src='${ result.thumbnail ? result.thumbnail.url : 'img/placeholder.png'}' alt='image' width='100'> <div class='block-content'><h3>${result.title}</h3> <div>${result.description ?? '...'}</div> </div></li>`
        }
    });
}
