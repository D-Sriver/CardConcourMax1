import clock from './assets/clock.jpeg';
import Cards from './components/Cards';

export default function App() {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-600 min-h-screen">
			<Cards
				rating={4}
				SKU="XV-383923810"
				nom="Montre"
				nbAvis={43}
				article="Montre Connectée FitLife Pro 5+"
				txtBuy="Ajouter au panier"
				prixNormal={183.99}
				prixPromo={149.99}
				img={clock}
			/>
		</div>
	);
}
