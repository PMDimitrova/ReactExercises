import style from './Menu.css';
import {useState} from "react";
import MenuItem from "./MenuItem/MenuItem";
import {MENU_ITEMS} from "./MenuConstants";

const Menu = ({onMenuItemClick}) => {
    const [currentItem, setCurrentItem] = useState();

    const menuItemClickHandler = (id) =>{
        setCurrentItem(id);
        onMenuItemClick(id);
    }

    return (
        <div>
            <aside className="menu">
                {MENU_ITEMS.map(x =>
                    <MenuItem
                        key={x.id}
                        id={x.id}
                        isSelected={x.id == currentItem}
                        onClick={setCurrentItem}
                        >
                            {x.text}
                    </MenuItem>
                )}

            </aside>
        </div>
    );
}

export default Menu;
