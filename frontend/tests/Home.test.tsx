import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
import { renderWithRouter } from '../src/utils/renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Tests for Home page', () => {
  test('Should render Header elements', () => {
    renderWithRouter(<App />);
    
    const header = screen.getByText(/gerenciador de produtos/i);

    expect(header).toBeInTheDocument();
  });
  
  test('Should render Table elements and products', async () => {
    renderWithRouter(<App />);
    
    const table = await screen.findByRole('table');
    const products = await screen.findAllByTestId(/product/);   

    expect(table).toBeInTheDocument();
    products.forEach(product => {
      expect(product).toBeInTheDocument();
    });
  });

  test.todo('Should delete a product', async () => {
    renderWithRouter(<App />);
    
    const product = await screen.findByTestId('product-3');
    // const listProducts = screen.getByText(/listar todos os produtos/i);
    
    expect(product).toBeInTheDocument();

    const deleteBtn = await screen.findByTestId('delete-btn-3');
    userEvent.click(deleteBtn);

    vi.spyOn(window, 'confirm').mockReturnValue(true);

  });

  test.todo('Should add a product', async () => {
    renderWithRouter(<App />);
    
    const addBtn = await screen.findByTestId('add-btn');
    userEvent.click(addBtn);

    const nameInput = await screen.findByTestId('name-input');
    const codeInput = await screen.findByTestId('code-input');
    const descriptionInput = await screen.findByTestId('description-input');
    const priceInput = await screen.findByTestId('price-input');
    const saveBtn = await screen.findByTestId('save-btn');

    userEvent.type(nameInput, 'Produto Teste');
    userEvent.type(codeInput, 'P099');
    userEvent.type(descriptionInput, 'Descrição do produto teste');
    userEvent.type(priceInput, '99.00');

    userEvent.click(saveBtn);

    // vi.spyOn(window, 'alert').mockImplementation(() => {});

    const product = await screen.findByText(/produto teste/i);

    expect(product).toBeInTheDocument();
  });
});
