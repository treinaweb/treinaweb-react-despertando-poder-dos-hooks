import React, {useState, useEffect, useCallback, useMemo} from 'react';

export default function ExemploUseCallback(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const printB = useCallback(() => {
        console.log(b);
    }, [b])
    const meuComp = useMemo(() => {
        return <MeuComponente printB={printB} />
    }, [printB])

    useEffect(() => {
        printB();
    }, [a])

    return(
        <div>
            <button onClick={() => setA(a+1)} >A = {a}</button>
            <button onClick={() => setB(b+1)} >B = {b}</button>
            {meuComp}
        </div>
    )
}

function MeuComponente(props){
    useEffect(() => {
        console.log('Meu Componente')
    }, [props.printB])

    console.log(888888888)
    
    return(
        <button onClick={props.printB} >![B]!</button>
    )
}
