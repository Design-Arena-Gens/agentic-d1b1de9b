'use client';

import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#333',
          textAlign: 'center'
        }}>DS</h1>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              placeholder="Enter item..."
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                fontSize: '1rem',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
            />
            <button
              onClick={addItem}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Add
            </button>
          </div>
        </div>

        <div>
          {items.length === 0 ? (
            <p style={{
              textAlign: 'center',
              color: '#999',
              padding: '2rem',
              fontStyle: 'italic'
            }}>
              No items yet. Add one above!
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    transition: 'all 0.2s'
                  }}
                >
                  <span style={{ fontSize: '1rem', color: '#333' }}>{item}</span>
                  <button
                    onClick={() => removeItem(index)}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      color: 'white',
                      background: '#dc3545',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#c82333'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#dc3545'}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#f0f0f0',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>
            Total items: <strong>{items.length}</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
