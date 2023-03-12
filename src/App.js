import './App.css';
import './Components/Header.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import React, { useEffect, useState } from 'react'

function App() {

  const [searchText, setSearchText] = useState('React');
  const [repositories, setRepositories] = useState([]);
  const [sortBy, setSortBy] = useState('stargazers_count');


  const getRepos = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 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");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch("https://api.github.com/search/repositories?q=" + searchText + "&per_page=20", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("result", result['items']);
        let repos = result['items'].map((repo) => {
          let obj = {
            'avatar_url': repo.owner.avatar_url ? repo.owner.avatar_url : 'NA',
            'html_url': repo.html_url ? (repo.html_url).substring(0, 50) : 'NA',
            'url': repo.html_url ? repo.html_url : 'NA',
            'name': repo.name ? repo.name : 'NA',
            'stargazers_count': repo.stargazers_count ? repo.stargazers_count : 'NA',
            'description': repo.description ? (repo.description).substring(0, 50) + '...more' : 'NA',
            'language': repo.language ? repo.language : 'NA',
            'watchers_count': repo.watchers_count ? repo.watchers_count : 'NA',
            'score': repo.score ? repo.score : 'NA',
            'created_at': repo.created_at ? (new Date(repo.created_at)).toDateString().split(' ').slice(1).join(' ') : 'NA',
            'updated_at': repo.updated_at ? (new Date(repo.updated_at)).toDateString().split(' ').slice(1).join(' ') : 'NA',
            'created_at_original': repo.created_at ? (Date.now(repo.created_at)) : 'NA',
            'updated_at_original': repo.updated_at ? (Date.now(repo.updated_at)) : 'NA',
          };
          return obj
        })
        setRepositories(repos)
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getRepos();
  }, [searchText])

  useEffect(() => {
    let sortedRepositories = repositories.sort((a, b) => a[sortBy] - b[sortBy])
    // console.log('sortedRepositories',sortBy, sortedRepositories)
    setRepositories(sortedRepositories)
  }, [sortBy])

  return (
    <div>
      <Header searchText={searchText} setSearchText={setSearchText} setSortBy={setSortBy} sortBy={sortBy} />
      <Cards repositories={repositories} />
    </div>
  );
}

export default App;
