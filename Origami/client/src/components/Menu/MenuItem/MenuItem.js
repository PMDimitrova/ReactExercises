import style from './MenuItem.css';

const MenuItem = ({
    id,
    onClick,
    isSelected,
    children
                  }) => {
    let classes = ['menu-item'];
    if(isSelected){
        classes.push('menu-item-selected');
    }
    return (
        <div>
            <li className={classes.join(' ')}>
                <a href="#" onClick={() => onClick(id)}>
                    {children}
                </a>

            </li>
        </div>
    );
}

export default MenuItem;
