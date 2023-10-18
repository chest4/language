'use client';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';


export default function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher');
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const planet = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#fff" fillRule="evenodd" d="M1.25 10a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0Zm16 0a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M6.25 10c0 4.522 1.491 8.25 3.75 8.25s3.75-3.728 3.75-8.25S12.259 1.75 10 1.75 6.25 5.478 6.25 10Zm6 0c0 3.762-1.195 6.75-2.25 6.75S7.75 13.762 7.75 10 8.945 3.25 10 3.25s2.25 2.988 2.25 6.75Z" clipRule="evenodd" /><path fill="#fff" d="m3.602 5.467 1.006-1.112c.1.09.209.18.325.267 1.271.952 3.3 1.54 5.515 1.54 1.891 0 3.652-.427 4.931-1.158.308-.176.582-.367.819-.57l.974 1.141c-.325.276-.676.52-1.048.73-1.516.868-3.534 1.356-5.676 1.356-2.522 0-4.865-.678-6.415-1.839a6.063 6.063 0 0 1-.431-.355Zm0 9.082 1.006 1.112c.1-.091.209-.18.325-.267 1.271-.952 3.3-1.54 5.515-1.54 1.891 0 3.652.427 4.931 1.158.308.176.582.367.819.57l.974-1.141a6.84 6.84 0 0 0-1.048-.73c-1.516-.868-3.534-1.356-5.676-1.356-2.522 0-4.865.678-6.415 1.839-.149.112-.293.23-.431.355ZM1.75 10.75v-1.5h16.5v1.5H1.75Z" /></svg>

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	}

	return (
		<>
			{/* {['en', 'ru', 'ar'].map((cur) => (
				<button className={locale === cur ? "active" : "no-active"} key={cur} value={cur} onClick={() => { onSelectChange }}>
					{t('locale', { locale: cur })}
				</button>
			))} */}
			<label
				className={clsx(
					'relative text-gray-400 flex items-center gap-2',
					isPending && 'transition-opacity [&:disabled]:opacity-30'
				)}
			>
				<span>
					{planet}
				</span>
				<select
					className="appearance-none bg-transparent"
					defaultValue={locale}
					disabled={isPending}
					onChange={onSelectChange}
				>
					{['en', 'ru', 'ar'].map((cur) => (
						<option key={cur} value={cur}>
							{t('locale', { locale: cur })}
						</option>
					))}
				</select>
			</label>
		</>
	);
}
