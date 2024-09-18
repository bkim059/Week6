import { useEffect, useState } from 'react';

export default function AddStore() {
    const [newStore, setNewStore] = useState('');

    useEffect(() => {
        populateStoreData();
    }, []);

    async function handleNewStore() {
        const name = newStore;

        if (name) {
            await fetch('stores', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                })
            })
                .then((response) => response.json())
                .then(data => { setNewStore(data) })
        }
    }

    return (
        <div>
            <h2>Create New Store</h2>
            <form>
                <input
                    type="text"
                    value={newStore}
                    onChange={e => setNewStore(e.target.value)}
                />
                <button onClick={handleNewStore}>Create</button>
            </form>   
        </div>
    );

    async function populateStoreData() {
        const response = await fetch('customers');
        const data = await response.json();
        newStore(data);
    }
}