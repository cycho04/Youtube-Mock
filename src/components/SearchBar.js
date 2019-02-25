import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    render(){
        return (
            <div className='search-bar ui segment'>
                <div className='ui grid'>
                    <div className='three column row'>
                        <div className='five wide column logoSide'>
                            <div className='inside'>
                                <i className='large grey bars icon'/>
                                &thinsp;
                                &thinsp;
                                &thinsp;
                                <i className='large red youtube icon'/>
                                YouTube Copy    
                            </div>
                            
                        </div>
                        
                        <div className='six wide column'>
                            <form onSubmit={this.onFormSubmit} className='ui form'>
                                <div className='ui fluid input'>
                                    <input 
                                        type='text'
                                        value={this.state.term}
                                        onChange={this.onInputChange}   
                                        placeholder='Search' 
                                    />
                                    <button className='ui button'><i className='search icon' /></button>
                                </div>
                            </form>
                        </div>

                        <div className='five wide column rightAlign'>
                            <i className='large grey video icon'/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className='grey th icon large'/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className='large grey envelope outline icon'/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className='large grey bell icon'/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className='large inverted grey circular user icon'/>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default SearchBar;

                