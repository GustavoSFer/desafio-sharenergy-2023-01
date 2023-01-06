import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Customer from '../Components/Customer';
import {
  isValidEmail,
  isValidName,
} from '../Util/Validacao';

function ListCustomer() {
  const [name, setName] = useState('');
  const [emaill, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState([]);
  const [msgErro, setMsgErro] = useState(false);

  const clearData = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCpf('');
  };

  const getItemStorage = () => {
    const customer = JSON.parse(localStorage.getItem('customer'));
    return customer;
  };

  const setItemStorage = (item) => {
    const getStorage = getItemStorage();
    if (getStorage !== null) {
      localStorage.setItem('customer', JSON.stringify([...getStorage, item]));
      setData([...getStorage, item]);
    } else {
      localStorage.setItem('customer', JSON.stringify([item]));
      setData([item]);
    }
  };

  const salveCustomer = () => {
    if (
      isValidEmail(emaill)
      && isValidName(name)
    ) {
      try {
        setItemStorage({
          name, email: emaill, phone, address, cpf,
        });
        clearData();
      } catch (error) {
        setMsgErro(error);
      }
    } else {
      setMsgErro(true);
    }
  };

  const removeItem = (item) => {
    const newCustomer = data.filter(({ email }) => email !== item.email);
    setData(newCustomer);
    if (newCustomer.length > 0) {
      localStorage.setItem('customer', JSON.stringify([...newCustomer]));
    } else {
      localStorage.removeItem('customer');
    }
  };

  const editIem = (item) => {
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
    setAddress(item.address);
    setCpf(item.cpf);

    removeItem(item);
  };

  useEffect(() => {
    const itens = getItemStorage();
    if (itens) {
      setData(itens);
    } else {
      setData([]);
    }
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
          value={emaill}
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
        {
          msgErro
          && <p className="text-danger text-center">Dados incorreto! Verificar todos os campos.</p>
        }
        <Button sty="w-100" click={salveCustomer}>Salvar</Button>
      </form>
      <div>
        {
          data.length > 0
          && data.map((item) => (
            <Customer
              item={item}
              key={item.email}
              clickE={() => removeItem(item)}
              clickEd={() => editIem(item)}
            />
          ))
        }
      </div>

    </div>
  );
}

export default ListCustomer;
