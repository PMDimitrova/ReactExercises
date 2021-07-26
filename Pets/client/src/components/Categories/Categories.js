import CategoryNavigation from "./CategoriesNavigation/CategoryNavigation";
import Pet from "../Pet/Pet";
import * as petsService from "../../services/petService";

import {Component} from "react";

// class Categories extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             pets: [],
//             currentCategory: 'all',
//         }
//     }
//
//     componentDidMount() {
//         petsService.getAll()
//             .then(res => this.setState({ pets: res }));
//     }
//
//     componentDidUpdate(prevProps) {
//         const category = this.props.match.params.category;
//
//         if (prevProps.match.params.category == category) {
//             return;
//         }
//
//         petsService.getAll(category)
//             .then(res => {
//                 this.setState({ pets: res, currentCategory: category })
//             })
//     }
//
//     render() {
//         return (
//             <div className="dashboard">
//                 <h1>Dashboard</h1>
//
//                 <CategoryNavigation />
//
//                 <ul className="other-pets-list">
//                     {this.state.pets.map(x =>
//                         <p>{x.id}</p>
//                         // <Pet key={x.id} {...x} />
//                     )}
//                 </ul>
//             </div>
//         );
//     }
// }

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets:[],
            currentCategory: 'all'
        }
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({pets: res}));
    }

    componentDidUpdate(prevProps, prevState) {
        const category = this.props.match.params.category;
        if(prevProps.match.params.category == category){
            return;
        }
        petsService.getAll(category)
            .then(res => {
                this.setState({pets: res, currentCategory: category})
            });
    }

    render() {
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation/>

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet
                            key={x.id}
                            {...x}
                        />)}
                </ul>
            </div>
        );
    }
}

export default Categories;