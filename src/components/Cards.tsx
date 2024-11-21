import { Icon } from '@iconify/react';

interface Props {
	rating: number;
	nom: string;
	nbAvis: number;
	prixNormal: number;
	prixPromo: number;
	txtBuy: string;
	img: string;
	article: string;
	SKU: string;
}

export default function Cards({
	rating,
	nom,
	nbAvis,
	prixNormal,
	prixPromo,
	txtBuy,
	img,
	article,
	SKU,
}: Props) {
	return (
		<div className=" flex justify-center items-center gap-8 w-[787px] h-[428px] bg-white rounded p8 shadow-lg">
			<div className=" rounded w-[370px] h-[332px]">
				<img
					className=" rounded-2xl w-full h-full object-cover"
					src={img}
					alt={nom}
				/>
			</div>
			<div className=" w-[279px] h-[332px]">
				<div className="justify-between items-center flex text-white text-xs font-light">
					<div className="justify-center flex items-center bg-slate-900 rounded-full py-2 px-4">
						FitLife
					</div>
					<div>
						<div className="text-slate-400">{SKU} </div>
					</div>
				</div>
				<div className=" pt-4 pb-2 text-[31px] text-2xl font-semibold">
					{article}
				</div>
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1 text-sm text-[#EDCF5D]">
						{[...Array(5)].map((_, index) => (
							<Icon
								key={index}
								icon={
									index < rating
										? 'pepicons-pop:star-filled'
										: 'pepicons-pop:star'
								}
								className="text-[#EDCF5D] text-sm"
							/>
						))}
					</div>
					<div className="flex items-center font-inter gap-2 text-slate-400">
						{nbAvis} notes
					</div>
				</div>
				<div className="w-full h-36 text-4xl font-semibold  justify-start items-center flex">
					<div className="flex flex-col text-[48px]">
						<div className="text-base leading-2 font-extralight text-slate-400 line-through">
							{prixNormal}
						</div>
						<div>{prixPromo}€</div>
					</div>
				</div>
				<div className="flex gap-4">
					<button className="flex-1 w-[225px] h-[44px] bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition">
						{txtBuy}
					</button>
					<button className="w-[44px] h-[44px] flex justify-center items-center border bg-blue-100 rounded-xl hover:bg-blue-200 transition">
						<Icon icon="ph:heart-bold" className="text-blue-500 text-3xl" />
					</button>
				</div>
			</div>
		</div>
	);
}
