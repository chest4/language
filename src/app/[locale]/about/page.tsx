'use client';

import { useTranslations } from 'next-intl';
import PageLayout from '../../../components/PageLayout';

export default function AboutPage() {
	const t = useTranslations('AboutPage');

	return (
		<PageLayout title={t('title')}>
			<p>
				{t('about-dog')}
			</p>
		</PageLayout>
	);
}
