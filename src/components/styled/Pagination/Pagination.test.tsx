import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import Pagination from './Pagination';
import { filtersAtom } from '../../../core/store/filtersAtom';
import { useAtom } from 'jotai';

test('should increase the page', () => {

  const TestComponent = () => {
    const [filters, setFilters] = useAtom(filtersAtom);
    const {page} = filters;

    return (
      <>
        <Pagination
          decrease={() => setFilters(filters => ({ ...filters, page: filters.page - 1 }))}
          increase={() => setFilters(filters => ({ ...filters, page: filters.page + 1 }))}
          value={page}
        />
      </>
    );
  };

  render(
    <TestComponent />
  );

  const addButton = screen.getByText('»')
  fireEvent.click(addButton)

  const pageNumber = screen.getByText('Page 2');
  expect(pageNumber).toBeInTheDocument();
})

test('should not go below page 1 when clicking on decrease', () => {

  const TestComponent = () => {
    const [filters, setFilters] = useAtom(filtersAtom);
    const {page} = filters;

    return (
      <>
        <Pagination
          decrease={() => setFilters(filters => ({ ...filters, page: filters.page - 1 }))}
          increase={() => setFilters(filters => ({ ...filters, page: filters.page + 1 }))}
          value={page}
        />
      </>
    );
  };

  render(
    <TestComponent />
  );

  const addButton = screen.getByText('«')
  fireEvent.click(addButton)

  const pageNumber = screen.getByText('Page 1');
  expect(pageNumber).toBeInTheDocument();
})