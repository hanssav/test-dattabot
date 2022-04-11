import React, { useState, useEffect } from 'react'

import Detail from '../detail/Detail';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
    const [data, getData] = useState([])
    const [url, getUrl] = useState([])
    const [limit, getLimit] = useState(20)
    const [offset, getOffset] = useState(0)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const detailModalProps = {
        show,
        handleClose,
        handleShow,
        url,
      };

    const getPokemon = async () => {
        try {
            // setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            // fetch('https://pokeapi.co/api/v2/pokemon')
            .then(
                function(response){
                    if(response.status !== 200){
                        console.log(response.status)
                        return
                    }       

                    response.json().then(function(data){
                        console.log(data.results.length)
                        console.log(data.results)
                        getData(data.results)
                    })
                }
            )
        // }, 1500);

        } catch (error) {
            console.log(error)
        }
    }
    
    const detail = (url) => {
        getUrl(url)
        // e.preventDefault();
        handleShow();
        console.log(url)
        // try {
        //     // setTimeout(() => {
        //         fetch(url).then(function(response) {
        //             if(response.status !== 200) {
        //                 console.log(response.status)
        //                 return
        //             }
                    
        //             response.json().then(function(detailData){
        //                 // console.log(detailData)
        //                 getDetailData(detailData)
        //             })
        //         })
            // }, 2000)
            
        // } catch (error) {
        //     console.log(error)       
        // }
    }
    
    useEffect(() => {
        getPokemon();
        // console.log("detail data" + detailData)
    }, [])

    return (
        <div className="container home py-5 h-100 overflow-hidden">
            <div className="row justify-content-center h-100">
                <div className="col-6 h-100">
                    <div className="title d-flex justify-content-center mb-3">
                        <h1 className='text-danger'><b>Pokedex</b></h1>
                    </div>
                    <div className="list overflow-auto rounded" style={{height: "90%" }}>
                        <InfiniteScroll
                            dataLength={data.length}
                            next={getPokemon}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                  <b>Yay! You have seen it all</b>
                                </p>
                              }                            
                            >
                            <div className="list-group h-100">
                                {data.map((data, i) =>
                                    <button variant="outline-light py-2 w-100" onClick={() => detail(data.url)}>
                                        <p className="list-group-item list-group-item-action m-0" key={i}>{data.name}</p>
                                    </button>
                                )}
                            </div>
                        </InfiniteScroll>

                            {/* {data.map((data, i) =>
                                <button variant="outline-light py-2" onClick={() => detail(data.url)}>
                                    <p className="list-group-item list-group-item-action m-0" id={i}>{data.name}</p>
                                </button>

                            )} */}
                    </div>
                </div>
            </div>
            {/* <Detail /> */}
            <Detail {...detailModalProps}/>
        </div>
    )
}

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };