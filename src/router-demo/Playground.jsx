import React from 'react';
import { httpService } from '../http-service';

const Playground = (props) => {
  const [persons, setPersons] = React.useState([]);

  React.useEffect(() => {
    httpService
      .get('persons')
      .then((r) => {
        setPersons((_) => r.data);
      })
      .catch((e) => {
        console.log('error', e.message);
      })
      .finally(() => {
        console.log('completed');
      });
  }, []);

  return (
    <>
      <h4>Playground Component</h4>

      <table className='table table-bordered table-sm table-hover'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
                <td>{u.ipAddress}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Playground;
