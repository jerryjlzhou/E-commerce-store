/**
 * A reusable React component to display an individual product card 
 * Encapsulates UI and logic related to rendering a single product
 */

type Props = {
    product: {
      _id: string;
      name: string;
      description: string;
      price: number;
      category: string;
      picture: string;
    };
  };
  
  export default function Product({ product }: Props) {
    return (
      <div className="w-64">
        <div className="bg-blue-100 p-5 rounded-xl">
          <img src={product.picture} alt={product.name} />
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg">{product.name}</h3>
        </div>
        <p className="text-sm mt-1 leading-4">{product.description}</p>
        <div className="flex mt-1">
          <div className="text-2xl font-bold grow">${product.price}</div>
          <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
        </div>
      </div>
    );
  }