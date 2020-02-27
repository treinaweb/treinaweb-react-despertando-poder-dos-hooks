import React, {useState, useEffect, useCallback} from 'react';

export default function ExemploUseCallback(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const printB = useCallback(() => {
        console.log(b);
    }, [b])

    useEffect(() => {
        printB();
    }, [a])

    return(
        <div>
            <button onClick={() => setA(a+1)} >A = {a}</button>
            <button onClick={() => setB(b+1)} >B = {b}</button>
            <MeuComponente printB={printB} />
        </div>
    )
}

function MeuComponente(props){
    useEffect(() => {
        console.log('Meu Componente')
    }, [props.printB])
    
    return(
        <button onClick={props.printB} >![B]!</button>
    )
}
