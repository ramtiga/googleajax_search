function search(){

    var searcher = new google.search.WebSearch();  //Web検索
    searcher.setSearchCompleteCallback(searcher, searchComplete, null);
    searcher.execute('iphone4');  //検索キーワード指定

    function searchComplete(){
        showSearchResults(this.results,document.getElementById('searchResults'));
    }

    // 検索結果を表示
    function showSearchResults(searchResults,domElement){
        if (searchResults && searchResults.length > 0) {
            domElement.innerHTML = '';
            for (var i = 0; i < searchResults.length; i++) {
                var result=searchResults[i];
                domElement.innerHTML += '<a href="'+ result.url  +'" target="_blank">'+ result.titleNoFormatting + '</a><BR>';
            }
        }
    }
}

