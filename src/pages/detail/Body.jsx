import React, {useEffect, useState} from 'react'

import "./style.css"
import TextP from '../../components/TextP'

export default function Body(props) {
    // console.log(props.url)
    const [data, getData] = useState([])
    const [hp, getHp] = useState()
    const [attack, getAttack] = useState()
    const [defense, getDefense] = useState()
    const [specialAttack, getSpecialAttack] = useState()
    const [specialDefense, getSpecialDefense] = useState()
    const [speed, getSpeed] = useState()
    const [types, getTypes] = useState()
    const [abilities, getAbilities] = useState([])

    const getDetail = async () => {
        try {
            fetch(props.url).then(function(response) {
                if(response.status !== 200) {
                console.log(response.status)
                return
            }
            response.json().then(function(detailData){
                console.log(detailData)
                getData(detailData)
                getHp(detailData.stats[0].base_stat)
                getAttack(detailData.stats[1].base_stat)
                getDefense(detailData.stats[2].base_stat)
                getSpecialAttack(detailData.stats[3].base_stat)
                getSpecialDefense(detailData.stats[4].base_stat)
                getSpeed(detailData.stats[5].base_stat)
                getTypes(detailData.types[0]?.type.name)
                getAbilities(detailData.abilities[0])
            })
            })
        } catch (error) {
            console.log(error)
        }
    }

    console.log(abilities)

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <div className='h-100 mx-5'>
            <div className="row h-100 d-flex justify-content-center mb-4">
                <div className="col-4 h-100 image bg-light me-2">
                    <img 
                        src={data?.sprites?.front_default} 
                        alt="image" style={{width: "200px"}}/>
                </div>
                <div className="col h-100 detail align-content-between">
                    <div>
                        <TextP title="#" detail={data?.id}/>
                    </div>
                    <div>
                        <h2 className="text-danger my-3">
                            {data?.name}
                            </h2>
                    </div>
                    <div>
                        <TextP title="Exp:" detail={data?.base_experience}/>
                        <TextP title="weight:" detail={data?.weight}/>
                        <TextP title="height:" detail={data?.height}/>
                    </div>
                </div>
            </div>
            
            <div className="row desc bg-light">
                <div className="col">
                    <div className="stats mb-3">
                        <h2 className='text-danger'>Stats</h2>
                        <TextP title="hp" detail={hp}/>
                        <TextP title="attack" detail={attack}/>
                        <TextP title="defense" detail={defense}/>
                        <TextP title="special attack" detail={specialAttack}/>
                        <TextP title="special defense:" detail={specialDefense}/>
                        <TextP title="speed" detail={speed}/>
                    </div>
                    <div className="types mb-3">
                        <h2 className='text-danger'>Types</h2>
                        <p className='my-0'><b>{types}</b></p>
                    </div>
                    <div className="abilities">
                        <h2 className='text-danger'>Abilities</h2>
                        {data?.abilities?.map((m, i) => {
                            console.log(m)
                            return(
                                <p className='my-0' key={i}><b>{m.ability.name}</b></p>
                            )
                        })}
                    </div>
                </div>
                <div className="col moves">
                    <h2 className='text-danger'>Moves</h2>
                    {data?.moves?.map((m, i) => {
                        return(
                            <p className='my-0' id={i}><b>{m?.move.name} </b></p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
