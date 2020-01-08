/**
 * Ambab
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Ambab.com license that is
 * available through the world-wide-web at this URL:
 * https://www.Ambab.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Ambab
 * @package     Ambab_SlidingCart
 * @copyright   Copyright (c) Ambab (https://www.Ambab.com/)
 * @license     https://www.Ambab.com/
 */
 
define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'mage/translate'
], function(ko, Component, customerData, $t) {
    'use strict';

    var cartData = customerData.get('cart')();

    return Component.extend({
        isVisible: ko.observable(cartData.slidingcart.totals_enable),

        getTotals: function () {
            var cartData = customerData.get('cart')();
            return cartData.slidingcart.totals;
        },
        getTotalsTitle: function () {
            var cartData = customerData.get('cart')();
            return cartData.slidingcart.totals_title;
        }
    });
});