import React from 'react'
import Title from "../components/Title";
import portItems from "../components/PortfolioItems";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import { useState } from 'react';

const allCategories = ['All', ...new Set(portItems.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portItems);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portItems)
            return;
        }
        const filteredData  = portItems.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
