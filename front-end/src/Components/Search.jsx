import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';

function Search({ resultApi, api, setResultApi }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const getRadioSelected = (e) => {
    setType(e.target.value);
  };

  const handleClick = (typ) => {
    if (typ === 'name') {
      const filtro = [...resultApi].filter((item) => (
        item.name.first.includes(search)
      ));
      setResultApi(filtro);
      setSearch('');
    } else if (typ === 'email') {
      const filtro = [...resultApi].filter((item) => (
        item.email.includes(search)
      ));
      setResultApi(filtro);
      setSearch('');
    } else {
      api();
      setSearch('');
    }
  };

  return (
    <fieldset className=" mb-4 border border-primary p-2 mt-2 rounded">
      <Input
        type="text"
        name="Pesquisar por nome ou e-mail"
        handleChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="m-2 d-flex justify-content-between" onChange={(e) => getRadioSelected(e)}>
        <label htmlFor="name">
          <input
            type="radio"
            id="name"
            name="radioButton"
            className="form-check-input me-2"
            defaultChecked={type === 'name'}
            value="name"
          />
          Nome
        </label>
        <label htmlFor="email">
          <input
            type="radio"
            id="email"
            name="radioButton"
            className="form-check-input me-2"
            defaultChecked={type === 'email'}
            value="email"
          />
          E-mail
        </label>
        <label htmlFor="clear">
          <input
            type="radio"
            id="clear"
            name="radioButton"
            className="form-check-input me-2"
            defaultChecked={type === 'clear'}
            value="clear"
          />
          Limpar filtro
        </label>
      </div>
      <Button
        click={() => handleClick(type)}
        dataTestId="btn-pesquisar"
        sty="w-100"
      >
        Pesquisar
      </Button>
    </fieldset>
  );
}

Search.propTypes = {
  resultApi: PropTypes.arrayOf.isRequired,
  api: PropTypes.func.isRequired,
  setResultApi: PropTypes.func.isRequired,
};

export default Search;
