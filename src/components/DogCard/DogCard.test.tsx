import { render, screen, fireEvent } from '@testing-library/react'
import DogCard from './DogCard'
import { Dog } from '../../core/types/interfaces';
import '@testing-library/jest-dom';

test('should add the dog to the user favorites', () => {
  const testDog: Dog = {
    id: '11',
    img: '',
    name: 'Tito',
    age: 10,
    zip_code: '12045',
    breed: 'Airedale' 
  }

  render(<DogCard dog={testDog} />);
  const addButton = screen.getByText('❤ Add to favorites')
  fireEvent.click(addButton)

  expect(addButton).toHaveTextContent('❤ In favorites');
})