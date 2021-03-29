export interface IFood {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface IFoodProps {
  key: number;
  food: IFood;
  handleDelete: (id: number) => void;
  handleEditFood: (food: IFood) => void;
}
