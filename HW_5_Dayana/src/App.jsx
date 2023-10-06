import React from 'react';
import './App.css'; // Создайте файл App.css для стилей

const PrototypeForm = {
    key1: 'Barbara',
    key2: 'Hepworth',
    key3: 'bhepworth@react.com',
    key4: 'love cats',
};

class App extends React.Component {
    render() {
        const { key1, key2, key3, key4 } = PrototypeForm;

        const styles = {
            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            },
            form: {
                width: '300px',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            },
            label: {
                fontWeight: 'bold',
                marginBottom: '10px',
            },
            input: {
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
            },
            data: {
                marginTop: '20px',
                fontWeight: 'bold',
            },
        };

        return (
            <div style={styles.container}>
                <form style={styles.form}>
                    <div className="form-group">
                        <label style={styles.label} htmlFor="key1">
                            Key 1:
                        </label>
                        <input
                            style={styles.input}
                            type="text"
                            id="key1"
                            name="key1"
                            value={key1}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label style={styles.label} htmlFor="key2">
                            Key 2:
                        </label>
                        <input
                            style={styles.input}
                            type="text"
                            id="key2"
                            name="key2"
                            value={key2}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label style={styles.label} htmlFor="key3">
                            Key 3:
                        </label>
                        <input
                            style={styles.input}
                            type="text"
                            id="key3"
                            name="key3"
                            value={key3}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label style={styles.label} htmlFor="key4">
                            Key 4:
                        </label>
                        <input
                            style={styles.input}
                            type="text"
                            id="key4"
                            name="key4"
                            value={key4}
                            readOnly
                        />
                    </div>
                </form>
                <div style={styles.data}>
                    <p>Data:</p>
                    <p>{`${key1} ${key2}`}</p>
                    <p>{`Email: ${key3}`}</p>
                    <p>{`Interest: ${key4}`}</p>
                </div>
            </div>
        );
    }
}

export default App;
