import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const handleAddCategory = (category) => {
        const findCategories = categories.find(c => c.toLowerCase() === category.toLowerCase());
        if (!findCategories) {
            setCategories([category, ...categories]);
        }
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={handleAddCategory} />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}
