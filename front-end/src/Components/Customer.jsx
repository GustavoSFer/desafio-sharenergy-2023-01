import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Customer({ item, clickE, clickEd }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
          <th scope="col">Endereço</th>
          <th scope="col">CPF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.cpf}</td>
          <td>
            <Button
              sty="me-2"
              click={clickEd}
            >
              Editar
            </Button>
          </td>
          <td>
            <Button
              sty="me-2"
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
