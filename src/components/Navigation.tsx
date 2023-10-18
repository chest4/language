'use client';

import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
	const t = useTranslations('Navigation');

	return (
		<div className="bg-slate-850 flex items-center">
			<nav className="container mx-auto flex justify-between text-white py-3">
				<ul className='flex gap-5'>
					<li className='flex items-center'><NavigationLink href="/">{t('home')}</NavigationLink></li>
					<li className='flex items-center'><NavigationLink href="/about">{t('about')}</NavigationLink></li>
				</ul>
				<LocaleSwitcher />
			</nav>
		</div>
	);
}
