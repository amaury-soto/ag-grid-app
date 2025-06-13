// src/pages/ShoppingCart/ShoppingCart.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

export const ProductCard = styled.div`
  padding: 0.75rem;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  background: white;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    height: 2.4em;
    overflow: hidden;
    line-height: 1.2;
  }
`;

export const CartSection = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #eee;
  position: sticky;
  top: 1rem;
  height: fit-content;

  h2 {
    margin-top: 0;
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemInfo = styled.div`
  h4 {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
  }

  p {
    margin: 0.25rem 0;
    color: #666;
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background-color: #2980b9;
  }

  &.remove {
    background-color: #e74c3c;
    padding: 0.3rem;
    
    &:hover {
      background-color: #c0392b;
    }
  }
`;

export const Price = styled.span`
  font-weight: 600;
  color: #2c3e50;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const QuantityInput = styled.input`
  width: 40px;
  padding: 0.25rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const CartTotal = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #f0f0f0;
  text-align: right;

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  button {
    margin-top: 0.5rem;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;