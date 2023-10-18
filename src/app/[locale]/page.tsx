'use client';

import { useTranslations } from 'next-intl';
import PageLayout from '../../components/PageLayout';

export default function IndexPage() {
	const t = useTranslations('IndexPage');

	return (
		<PageLayout title={t('title')}>
			<p>
				{t('dog')}
			</p>
		</PageLayout>
	);
}
