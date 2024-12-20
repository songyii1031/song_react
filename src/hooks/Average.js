import React, { useState, useMemo, useCallback } from "react";
 
 
const getAverage = numbers => {
   
    if (numbers.length === 0 ) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};


const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(''); 

    const onChange = useCallback( e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback( e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },
    [number, list]
    );

    const avg = useMemo(() => getAverage(list), [list]);

    const truncate = (str, maxlength) => {

        return ( str.length > maxlength ) ? str.slice(0, maxlength -1 ) + '...' : str;
    }
 

    return (
       <div>
            <p className="pText">{truncate("tptkddpt akfTjdwodl Wkdrn.", 10)}</p>

            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                 <li key={index} >{value}</li>   
                ))}
            </ul>

            <div>
                <b>평균 값: </b> {avg}   
            </div> 
          
       </div> 
    )

}
export default Average;