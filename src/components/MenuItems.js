import React from 'react'


function MenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" className="portImg"/>
                            <ul className="hover-items">
                                <li>
                                    <a target="_blank" rel="noreferrer" href={item.link1}>Deployed</a>
                                    <a target="_blank" rel="noreferrer" href={item.link2}>GitHub Repo</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;