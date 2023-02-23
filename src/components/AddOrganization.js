import React, { useState } from 'react';
import styled from 'styled-components';

import Dash from './Dashboard';
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0062cc;
  }
`;

const AddOrganizationForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create new organization object
    const newOrganization = {
      name: name,
      description: description,
      address: address,
      phone: phone,
    };

    // TODO: Add logic to save new organization to database or state

    // Reset form fields
    setName('');
    setDescription('');
    setAddress('');
    setPhone('');
  };

  return (
<>
    <Dash/>
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Label htmlFor="description">Location:</Label>
      <Textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Label htmlFor="address">Wallet Address:</Label>
      <Input
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <Label htmlFor="phone">Phone:</Label>
      <Input
        type="text"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <Button type="submit">Add Organization</Button>
    </Form>
    </>
  );
};

export default AddOrganizationForm;
