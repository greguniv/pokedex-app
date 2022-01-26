import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'
import axios from 'axios'

const PokemonList = ({ pokeList, itemsPerPage }) => {
    // console.log('props', pokeList)
    // We start with an empty list of pokeList.
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        try {
            // Fetch pokeList from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading pokeList from ${itemOffset} to ${endOffset}`);

        const pokeURLS = []

        for (let i = itemOffset; i <= endOffset; i++) {
            pokeURLs.push(`https://pokeapi.co/v2/pokemon/${i}`)
        }

        console.log('urls', pokeURLs)

        // setCurrentPokemon(pokeList.slice(itemOffset, endOffset));
        // if(currentPokemon) currPagePokeon()
        setPageCount(Math.ceil(pokeList.length / itemsPerPage));
        } catch(error) {
            console.log(error)
        }
    }, [itemOffset, itemsPerPage]);

const currPagePokemon = (pokeURLs) => {
        try {
            // axios all() makes all concurrent requests
            // instead of doing individual requests, we can programatically make mulptiple requests
            // if one of our Promises fails, the entire request fails
            axios.all()
        } catch(error) {
            console.log(error)
        }
    }

    const Pokemon = () => {
        return (
            <>
                {
                    pokeList &&
                    pokeList.map(pokemon => (
                        <div>
                            {/* <h3>{pokemon.name}</h3> */}

                        </div>
                    )
                    )
                }
            </>
        );
    }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokeList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    console.log('current pokemon', currentPokemon)

    return (
        <div>
            {/* POKEMON LIST
            {pokemon} */}
            <Pokemon />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default PokemonList;
