import { useEffect, useState } from 'react';
function CustomerTable() {
    const [customers, setCustomers] = useState();

    useEffect(() => {
        populateCustomerData();
    }, []);

    const contents = customers === undefined
        ? <p><em>Loading...</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer =>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.dateOfBirth}</td>
                        <td><button>Update Customer</button></td>
                        <td><button>Delete Customer</button></td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Customers</h1>
            {contents}
        </div>
    );

    async function populateCustomerData() {
        const response = await fetch('customers');
        const data = await response.json();
        setCustomers(data);
    }
}

export default CustomerTable;