import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Person {
  id: number;
  nama: string;
  medsos: string;
}

const Crud: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [newPerson, setNewPerson] = useState({ nama: '', medsos: '' });
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-person');
      setPersons(response.data.data);
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editingPerson) {
      setEditingPerson({ ...editingPerson, [name]: value });
    } else {
      setNewPerson({ ...newPerson, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingPerson) {
        await axios.put(`http://localhost:3000/update-person/${editingPerson.id}`, editingPerson);
        setEditingPerson(null);
      } else {
        await axios.post('http://localhost:3000/store-person', newPerson);
        setNewPerson({ nama: '', medsos: '' });
      }
      fetchPersons();
    } catch (error) {
      console.error('Error saving person:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/delete-person/${id}`);
      fetchPersons();
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  const handleEdit = (person: Person) => {
    setEditingPerson(person);
  };

  return (
    <div id="crud" className="bg-gray p-8">
      <h2 className="text-2xl font-bold mb-4">AYO GABUNG!!</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="nama"
          value={editingPerson ? editingPerson.nama : newPerson.nama}
          onChange={handleInputChange}
          placeholder="Name"
          className="input input-bordered mr-2"
        />
        <input
          type="text"
          name="medsos"
          value={editingPerson ? editingPerson.medsos : newPerson.medsos}
          onChange={handleInputChange}
          placeholder="Social Media"
          className="input input-bordered mr-2"
        />
        <button type="submit" className="btn btn-primary">
          {editingPerson ? 'Update Person' : 'Add Person'}
        </button>
      </form>

      <table className="table-auto w-full bg-gray-200">
        <thead className="bg-blue-500 text-black">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Social Media</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id} className="bg-white even:bg-gray-100">
              <td className="border px-4 py-2 text-black">{person.nama}</td>
              <td className="border px-4 py-2 text-black">{person.medsos}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(person)} className="btn btn-sm btn-info mr-2">Edit</button>
                <button onClick={() => handleDelete(person.id)} className="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
