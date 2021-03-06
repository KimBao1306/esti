import HeaderModule from './modules/HeaderModule.js';
import HeaderDropdownModule from './modules/HeaderDropdownModule.js';
import HeaderFixedModule from './modules/HeaderFixedModule.js';
import AosModule from './modules/AosModule.js';
import CounterModule from './modules/CounterModule.js';
import LightGalleryModule from './modules/LightGalleryModule.js';
import MfpModule from './modules/MfpModule.js';
import SwiperModule from './modules/SwiperModule.js';
import TabModule from './modules/TabModule.js';
import FlatPickrModule from './modules/FlatPickrModule.js';
import LoadingModule from './modules/LoadingModule.js';
import ScrollToTopModule from './modules/ScrollToTopModule.js';
import ViewportModule from './modules/ViewportModule.js';
import ButtonModule from './modules/ButtonModule.js';
import FormatPhoneNumber from './modules/FormatPhoneNumber.js';
import FilterModule from './modules/FilterModule.js';
import ProductModule from './modules/ProductModule.js';
import QuantityPickerModule from './modules/QuantityPickerModule.js';
import PartnersModule from './modules/PartnersModule.js';
import ChartModule from './modules/ChartModule.js';
import CustomInputModule from './modules/CustomInputModule.js';
import AccountModule from './modules/AccountModule.js';
import IsotopeModule from './modules/IsotopeModule.js';
import CartModule from './modules/CartModule.js';

jQuery(document).ready(function ($) {
	LoadingModule();
	AosModule();
	HeaderModule();
	HeaderDropdownModule();
	HeaderFixedModule();
	CounterModule();
	LightGalleryModule();
	MfpModule();
	SwiperModule();
	TabModule();
	FlatPickrModule();
	ScrollToTopModule();
	ViewportModule();
	ButtonModule();
	FormatPhoneNumber();
	FilterModule();
	ProductModule();
	QuantityPickerModule();
	PartnersModule();
	ChartModule();
	CustomInputModule();
	AccountModule();
	IsotopeModule();
	CartModule();
});
