import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Header from '../Components/Header';

function ListCustomer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');

  const getItemStorage = () => {
    const customer = JSON.parse(localStorage.getItem('customer'));
    return customer;
  };

  const setItemStorage = (item) => {
    const novo = getItemStorage();
    if (novo !== null) {
      localStorage.setItem('customer', JSON.stringify([...novo, item]));
    } else {
      localStorage.setItem('customer', JSON.stringify([item]));
    }
  };

  const salveCustomer = () => {
    setItemStorage({
      name, email, phone, address, cpf,
    });
  };

  useEffect(() => {
    getItemStorage();
  }, []);

  return (
    <div className="container">
      <Header />
      <form className="mb-4 border border-primary p-2 mt-2 rounded">
        <Input
          type="text"
          name="name"
          handleChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          type="text"
          name="email"
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="text"
          name="phone"
          handleChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <Input
          type="text"
          name="address"
          handleChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <Input
          type="text"
          name="cpf"
          handleChange={(e) => setCpf(e.target.value)}
          value={cpf}
        />
        <Button click={salveCustomer}>Salvar</Button>
      </form>
    </div>
  );
}

export default ListCustomer;
