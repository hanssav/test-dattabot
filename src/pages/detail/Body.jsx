import React from 'react'

import "./style.css"
import TextP from '../../components/TextP'

export default function Body(data) {
    console.log(data.sprites.front_default)

    return (
        <div className='h-100 mx-5'>
            <div className="row h-100 d-flex justify-content-center mb-4">
                <div className="col-4 h-100 image bg-light me-2">
                    <img src={data.sprites.front_default} alt="image" style={{width: "200px"}}/>
                </div>
                <div className="col h-100 detail align-content-between">
                    <div>
                        <TextP title="#" detail={data.id}/>
                    </div>
                    <div>
                        <h2 className="text-danger my-3">{data.name}</h2>
                    </div>
                    <div>
                        <TextP title="Exp:" detail={data.base_experience}/>
                        <TextP title="weight:" detail={data.weight}/>
                        <TextP title="height:" detail={data.height}/>
                    </div>
                </div>
            </div>
            
            <div className="row desc bg-light">
                <div className="col">
                    <div className="stats mb-3">
                        <h2 className='text-danger'>Stats</h2>
                        <TextP title="hp" detail={data.stats[0].base_stat}/>
                        <TextP title="attack" detail={data.stats[1].base_stat}/>
                        <TextP title="defense" detail={data.stats[2].base_stat}/>
                        <TextP title="special attack" detail={data.stats[3].base_stat}/>
                        <TextP title="special defense:" detail={data.stats[4].base_stat}/>
                        <TextP title="speed" detail={data.stats[5].base_stat}/>
                    </div>
                    <div className="types mb-3">
                        <h2 className='text-danger'>Types</h2>
                        <p className='my-0'><b>{data.types[0].type.name}</b></p>
                    </div>
                    <div className="abilities">
                        <h2 className='text-danger'>Abilities</h2>
                        {data.abilities.map((m, i) => {
                            console.log(m)
                            return(
                                <p className='my-0' id={i}><b>{m.ability.name}</b></p>
                            )
                        })}
                    </div>
                </div>
                <div className="col moves">
                    <h2 className='text-danger'>Moves</h2>
                    {data.moves.map((m, i) => {
                        // console.log(m)
                        return(
                            <p className='my-0' id={i}><b>{m.move.name} </b></p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
