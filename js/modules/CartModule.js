export default function CartModule() {
	const localSt = {
		set(arr) {
			return localStorage.setItem('cart', JSON.stringify(arr));
		},
		get() {
			return JSON.parse(localStorage.getItem('cart')) || [];
		},
	};
	let cart = localSt.get();
	// TĂNG GIẢM SỐ LƯỢNG
	function activeQtt(obj, type = 'incr', value = 1) {
		const getIndexItem = cart.findIndex(
			(item) => item.sku.toString() === obj.sku.toString()
		);
		if (getIndexItem < 0) {
			return;
		}
		const item = cart[getIndexItem];
		let newItem = {
			...item,
		};
		switch (type) {
			case 'incr':
				newItem.qtt = parseInt(item.qtt) + parseInt(value);
				break;
			case 'decr':
				newItem.qtt = --item.qtt;
				break;
			case 'change':
				newItem.qtt = value;
				break;
			default:
				break;
		}
		if (newItem.qtt <= 0) {
			cart.splice(getIndexItem, 1);
			return;
		}
		cart.splice(getIndexItem, 1, newItem);
	}
	// KIỂM TRA XEM ĐÃ CÓ SẢN PHẨM HAY CHƯA => CÓ: TĂNG SỐ LƯỢNG, CHƯA CÓ: TẠO
	function checkDuplicate(obj) {
		const isIdAlready = cart.find(
			(item) => item.sku.toString() === obj.sku.toString()
		);
		if (isIdAlready) {
			return true;
		}
		cart.push(obj);
		return false;
	}
	// THỰC THI CÁC FUNCTION
	function pushToCart(obj) {
		const isDuplicate = checkDuplicate(obj);
		if (isDuplicate) {
			activeQtt(obj, 'incr', obj.qtt);
		}
	}
	// KHỞI TẠO RA DANH SÁCH CART
	function renderCart() {
		if (!cart.length) return;

		if (
			$('.main-fast-order-2 .step-search-table .frame-table-body').length ||
			$('.main-quotation-1 .step-search-table .frame-table-body').length
		) {
			let rs = '';
			cart.forEach((i) => {
				rs += `<tr>
        <td>
          <p class="frame-table-mobile">ESTI code:</p>
          <p>${i.sku}</p>
        </td>
        <td>
          <p class="frame-table-mobile">
            Mô tả hàng hóa:
          </p>
          <p>
          ${i.name}
          </p>
        </td>
        <td>
          <p class="frame-table-mobile">Hãng sản xuất:</p>
          <p>${i.brand}</p>
        </td>
        <td>
          <p class="frame-table-mobile">Quy cách:</p>
          <p>${i.weight}</p>
        </td>
        <td>
          <p class="frame-table-mobile">ĐVT:</p>
          <p>${i.unit}</p>
        </td>
        <td>
          <p class="frame-table-mobile">Số lượng:</p>
          <div class="qtt qtt-picker" data-change-qtt='${JSON.stringify(i)}'>
            <input
              value="${i.qtt}"
              type="text"
              class="f-control qtt-input"
            />
            <div class="qtt-btn-wrap">
              <span class="qtt-btn qtt-up">+</span>
              <span class="qtt-btn qtt-down">-</span>
            </div>
          </div>
        </td>
        </tr>
        `;
			});
			$('.step-search-table .frame-table-body').html(rs);
		}

		if ($('.main-fast-order-3 .upload-excel-wrap').length) {
			let rs = `<div class="frame-table step-search-table">
                  <table>
                    <thead class="frame-table-head">
                      <tr>
                        <th>ESTI code</th>
                        <th>Mô tả hàng hóa</th>
                        <th>Hãng sản xuất</th>
                        <th>Quy cách</th>
                        <th>ĐVT</th>
                        <th>số lượng</th>
                      </tr>
                    </thead>
                    <tbody class="frame-table-body">`;
			cart.forEach((i) => {
				rs += `
            <tr>
              <td>
                <p class="frame-table-mobile">ESTI code:</p>
                <p>${i.sku}</p>
              </td>
              <td>
                <p class="frame-table-mobile">
                Mô tả hàng hóa
                </p>
                <p>
                ${i.name}
                </p>
              </td>
              <td>
                <p class="frame-table-mobile">Hãng sản xuất:</p>
                <p>${i.brand}</p>
              </td>
              <td>
                <p class="frame-table-mobile">Quy cách:</p>
                <p>${i.weight}</p>
              </td>
              <td>
                <p class="frame-table-mobile">ĐVT:</p>
                <p>${i.unit}</p>
              </td>
              <td>
                <p class="frame-table-mobile">Số lượng::</p>
                <div class="qtt qtt-picker" data-change-qtt='${JSON.stringify(
									i
								)}'>
                  <input
                    value="${i.qtt}"
                    type="text"
                    class="f-control qtt-input"
                  />
                  <div class="qtt-btn-wrap">
                    <span class="qtt-btn qtt-up">+</span>
                    <span class="qtt-btn qtt-down">-</span>
                  </div>
                </div>
              </td>
            </tr>
            `;
			});
			rs += `</tbody>
        </table>
      </div>`;
			$('.upload-excel-wrap').html(rs);
		}
	}
	renderCart();

	// SỰ KIỆN ADD ITEM TO CART
	let stoNoti;
	$(document).on('click', '.cart-add', function () {
		const data = JSON.parse($(this).attr('data-obj'));
		pushToCart(data);
		renderCart();
		localSt.set(cart);
		//SHOW NOTI WHEN ADD ITEM
		$('.cart-noti').find('b').html(data.sku);
		$('.cart-noti').addClass('--active');
		if (stoNoti) {
			clearTimeout(stoNoti);
		}
		stoNoti = setTimeout(() => {
			$('.cart-noti').removeClass('--active');
		}, 1000);
	});
	// UPDATE QTT BY BUTTON
	$(document).on('click', '.step-search-table .qtt-btn', function () {
		const obj = JSON.parse(
			$(this).closest('.qtt-picker').attr('data-change-qtt')
		);
		if ($(this).hasClass('qtt-up')) {
			activeQtt(obj, 'incr');
		}
		if ($(this).hasClass('qtt-down')) {
			activeQtt(obj, 'decr');
		}
		renderCart();
		localSt.set(cart);
	});
	// UPDATE QTT BY INPUT
	$(document).on('change', '.step-search-table .qtt-input', function () {
		const obj = JSON.parse(
			$(this).closest('.qtt-picker').attr('data-change-qtt')
		);
		activeQtt(obj, 'change', $(this).val());
		renderCart();
		localSt.set(cart);
	});
	// UPLOAD BÁO GIÁ
	function convertDataToTable(arr) {}
	convertDataToTable();
	$('#upload-excel').change(function (e) {
		const validType = ['.xlsx', '.xls'];
		const type = e.target.files[0].name.slice(
			e.target.files[0].name.lastIndexOf('.')
		);
		if (!validType.includes(type)) {
			alert('Accept only .xlsx or .xls');
			return;
		}
		const reader = new FileReader();
		reader.onload = function (e) {
			const data = e.target.result;
			const workbook = XLSX.read(data, {
				type: 'binary',
			});
			workbook.SheetNames.forEach(function (sheetName) {
				// Here is your object
				const XL_row_object = XLSX.utils.sheet_to_row_object_array(
					workbook.Sheets[sheetName]
				);
				const arrData = JSON.parse(JSON.stringify(XL_row_object));
				arrData.forEach((i) => pushToCart(i));
				renderCart();
				localSt.set(cart);
			});
		};
		// reader.
		reader.onerror = function (ex) {
			console.log(ex);
		};
		reader.readAsBinaryString(e.target.files[0]);
	});
}
