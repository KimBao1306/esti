export default function IsotopeModule() {
	if ($('.doc-list').length) {
		// CREATE DEBOUNCE
		let stoFilter;
		// GET ELEMENT FILL IMPLEMENT
		const $checkboxList = $('.filter-doc .custom-checkbox input');
		const $inputList = $('.doc-dt-filter-form input.f-control');
		// INIT ISOTOPE
		const $list = $('.doc-list .cols').isotope({
			itemSelector: '.col',
			layoutMode: 'fitRows',
		});
		$list.imagesLoaded().progress(function () {
			$list.isotope('layout');
		});
		// OBJECT VALUE TO GET THEM FILTER
		const filterDocs = {
			name: '',
			code: '',
			product: '',
			brand: '',
		};
		// CLEAR STRING BEFORE FILTER
		const clearFilterArr = (dataName, valueName = '') => {
			filterDocs[dataName] = '';
			if (dataName === 'product' || dataName === 'brand') {
				$checkboxList.each((i, cb) => {
					if ($(cb).attr('name') === dataName && cb.checked) {
						filterDocs[dataName] += `${cb.value}-`;
					}
				});
				return filterDocs[dataName];
			}
			if (dataName === 'code' || dataName === 'name') {
				filterDocs[dataName] += `${valueName}`;
				return filterDocs[dataName];
			}
		};
		// FUNCTION FILTER MAIN
		function filterEle(item, cb) {
			// CHỌN INPUT. LẤY VALUE VÀ NAME
			const dataValue = $(item).val();
			const dataName = $(item).attr('name');
			// CLEAR STRING FILTER BY NAME AND CONCAT NEW VALUE
			const rsValue = clearFilterArr(dataName, dataValue);
			if (stoFilter) {
				clearTimeout(stoFilter);
			}
			stoFilter = setTimeout(() => {
				$list.isotope({
					filter: function (_, itemElem) {
						return cb(itemElem, dataName, rsValue);
					},
				});
			}, 300);
		}

		const checkboxFilter = (col, dataName, rsValue) => {
			const arrVl = rsValue.split('-');
			arrVl.pop();
			if (!arrVl.length) {
				return true;
			}
			for (let i = 0, len = arrVl.length; i < len; i++) {
				if ($(col).attr(`data-${dataName}`).includes(arrVl[i])) {
					return true;
				}
			}
			return false;
		};
		$checkboxList.each((_, i) => {
			$(i).on('change', function () {
				filterEle(i, checkboxFilter);
			});
		});
		const inputFilter = (col, dataName, rsValue) => {
			if (!$(col).attr(`data-${dataName}`)) {
				return;
			}
			if ($(col).attr(`data-${dataName}`).includes(rsValue)) {
				return true;
			}
			return false;
		};
		$inputList.each((_, i) => {
			$(i).on('keyup', function () {
				filterEle(i, inputFilter);
			});
		});
	}
}
