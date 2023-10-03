import React, {FC} from 'react';
import fruits from '@a/core-lib/fruits';

interface Fruits {
    name: string
}

const Fruits: FC<Fruits> = ({ name}) => {
    console.log(fruits, name);

    return (<>
        <h1>{fruits[name]}</h1>
    </>);
};

export default Fruits;