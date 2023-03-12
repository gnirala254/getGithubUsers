import  {  useState } from 'react'

function Header({ setSearchText, setSortBy, sortBy}) {

  const [searchText, setSearchText2] = useState('React');


    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchText(searchText)
    };

    const handleNameChange = (event) => {
        setSearchText2(event.target.value);
    };

    const handleSortBy = (sort) =>{
        setSortBy(sort);
    }

    return (
        <div>
            <div className="" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div>
                    <h1> Public Github Repositories</h1>
                </div>
                <div className="searchDiv">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <input
                                className="search"
                                value={searchText}
                                onChange={handleNameChange}
                            />
                            <button className="btn hover">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="sortDiv">
                <button className="btn" style={{backgroundColor : 'blue'}}>Sort By :</button>
                <button className={`btn hover ${sortBy === 'stargazers_count' ? 'selected' : ''}`} onClick={() => handleSortBy('stargazers_count')}>Stars</button>
                <button className={`btn hover ${sortBy === 'watchers_count' ? 'selected' : ''}`} onClick={() => handleSortBy('watchers_count')}>Watchers Count</button>
                <button className={`btn hover ${sortBy === 'score' ? 'selected' : ''}`} onClick={() => handleSortBy('score')}>Score</button>
                <button className={`btn hover ${sortBy === 'name' ? 'selected' : ''}`} onClick={() => handleSortBy('name')}>Name</button>
                <button className={`btn hover ${sortBy === 'created_at_original' ? 'selected' : ''}`} onClick={() => handleSortBy('created_at_original')}>Created At</button>
                <button className={`btn hover ${sortBy === 'updated_at_original' ? 'selected' : ''}`} onClick={() => handleSortBy('updated_at_original')}>Updated At</button>
            </div>
        </div>
    )
}

export default Header;