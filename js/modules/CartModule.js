export default function CartModule() {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	// TĂNG GIẢM SỐ LƯỢNG
	function activeQtt(obj, type = 'incr', value = 1) {
		const getIndexItem = cart.findIndex((item) => +item.id === +obj.id);
		const item = cart[getIndexItem];
		let newItem = {
			...item,
		};
		if (type === 'incr') {
			newItem.qtt = ++item.qtt;
		}
		if (type === 'decr') {
			newItem.qtt = --item.qtt;
		}
		if (type === 'change') {
			newItem.qtt = value;
		}
		if (newItem.qtt <= 0) {
			cart.splice(getIndexItem, 1);
			return;
		}
		cart.splice(getIndexItem, 1, newItem);
	}
	// KIỂM TRA XEM ĐÃ CÓ SẢN PHẨM HAY CHƯA => CÓ: TĂNG SỐ LƯỢNG, CHƯA CÓ: TẠO
	function checkDuplicate(obj) {
		const isIdAlready = cart.find((item) => +item.id === +obj.id);
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
			activeQtt(obj, 'incr');
		}
	}
	// KHỞI TẠO RA DANH SÁCH CART
	function renderCart() {
		let rs = '';
		cart.forEach((i) => {
			rs += `<tr>
      <td>
        <p class="frame-table-mobile">ESTI code:</p>
        <p>${i.id}</p>
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
        <p class="frame-table-mobile">Thông số:</p>
        <a href="#" class="btn-detail btn-border"
          >Xem chi tiết</a
        >
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
		rs += ` <tr>
    <td colspan="7">
      <a href="#" class="step-search-seemore"
        ><i
          class="fa fa-plus-circle"
          aria-hidden="true"
        ></i>

        Click để thêm dòng</a
      >
    </td>
  </tr> `;
		$('.step-search-table .frame-table-body').html(rs);
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	renderCart();

	$(document).on('click', '.cart-add', function () {
		const data = JSON.parse($(this).attr('data-obj'));
		pushToCart(data);
		renderCart();
	});

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
	});
	$(document).on('change', '.step-search-table .qtt-input', function () {
		const obj = JSON.parse(
			$(this).closest('.qtt-picker').attr('data-change-qtt')
		);
		activeQtt(obj, 'change', $(this).val());
		renderCart();
	});
}
