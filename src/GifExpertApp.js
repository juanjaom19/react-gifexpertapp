import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategoties] = useState(['One Punch'])
    // const handleAdd = () => {
    //     // setCategoties([ ...categories, 'HunterXHunter']);
    //     setCategoties(cats => [ ...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategoties }/>
            <hr />
            <ol>
                {
                    categories.map( category =>(
                        <GifGrid 
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;