import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Сategories extends React.Component {
    render() {
        return (
            <div className="сategories">
                <h3 className="сategories-title">Категории</h3>
                <nav className="nav-сategories">
                  <li className="nav-сategories-item-list">
                      <Link to="/newrecipes" className="nav-сategories-item">Новые рецепты</Link></li>
                  <li className="nav-сategories-item-list"><Link to="/newrecipes"className="nav-сategories-item">Первые блюда</Link></li>
                  <li className="nav-сategories-item-list"><Link to="/newrecipes" className="nav-сategories-item">Вторые блюда</Link></li>
                  <li className="nav-сategories-item-list"><Link to="/newrecipes"className="nav-сategories-item">Салаты</Link></li>
                  <li className="nav-сategories-item-list"><Link to="/newrecipes"className="nav-сategories-item">Закуски</Link></li>
                </nav>
            </div>
        );
    };
}
export default Сategories;