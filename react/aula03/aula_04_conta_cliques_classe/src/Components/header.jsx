import { Component } from 'react';
import PropTypes from 'prop-types';

const estilo = { 
    color: 'whitesmoke', 
    borderBottom: 'black solid 2.7px', 
    borderRadius: '20px',
    padding: '30px',
    backgroundColor: '#303030', 
    };

export class Header extends Component {
    render() {
        return (
            <div>
                <h1 style={estilo}>Olá, {this.props.nome}, seja bem-vindo!</h1>
            </div>
        );
    }
}

Header.defaultProps = {
    nome: 'Nome padrão',
};

Header.propTypes = {
    nome: PropTypes.string,
};

export default Header; 