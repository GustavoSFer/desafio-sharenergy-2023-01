import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Customer({ item, clickE, clickEd }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="btn">Nome</th>
          <th className="btn">E-mail</th>
          <th className="btn">Telefone</th>
          <th className="btn">Endereço</th>
          <th className="btn">CPF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="btn">{item.name.first}</td>
          <td className="btn">{item.email}</td>
          <td className="btn">{item.phone}</td>
          <td className="btn">{item.address}</td>
          <td className="btn">{item.cpf}</td>
          <td className="btn">
            <Button
              click={clickEd}
            >
              Editar
            </Button>
          </td>
          <td className="btn">
            <Button
              click={clickE}
            >
              Excluir
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Customer.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    cpf: PropTypes.string,
  }).isRequired,
  clickE: PropTypes.func.isRequired,
  clickEd: PropTypes.func.isRequired,
};

export default Customer;
