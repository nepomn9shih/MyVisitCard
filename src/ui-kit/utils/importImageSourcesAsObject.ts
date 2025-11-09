// @ts-nocheck

/**
 * собрать все изображения в объект с ключом - названием изображения и значением путем до изображения
 */
export const importImageSourcesAsObject = (
	requireContext: __WebpackModuleApi.RequireContext
): {[key: string]: string} => {
	return requireContext.keys().reduce<{[key: string]: any}>(
		(acc, item) => {
			const key = item.substring(2).replace(/\.(png|jpe?g|svg)$/, '');
			acc[key] = requireContext(item);

			return acc;
		}, {}
	);
};