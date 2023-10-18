import { ReactNode } from 'react';


type Props = {
	children?: ReactNode;
	title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {

	return (
		<>
			<main className='container mx-auto py-10'>
				<h1 className='text-xl font-bold mb-5'>{title}</h1>
				{children}
			</main>
		</>
	);
}
