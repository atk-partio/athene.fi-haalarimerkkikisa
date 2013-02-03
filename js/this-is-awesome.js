'use strict';

/** @namespace */
var athene = {};

/**
 * Boots up the whole damn thing. jQuery should be working before this is
 * is called and DOM should be ready.
 */
athene.init = function () {
	athene.initEntryContainer($('#entries'));
};

/**
 * Boots up the entry container and makes magic happen.
 *
 * @param $container the jQuery object which links to the HTML container of all
 * the entries.
 */
athene.initEntryContainer = function ($container) {
	athene.resetEntryContainerWidth($container);
};

/**
 * Automatically calculates proper width for the given container based on the
 * amount of entries there are.
 *
 * @param $container the HTML container containing all the <article> elements
 * representing single entries
 */
athene.resetEntryContainerWidth = function ($container) {
	var $entries = $container.children('article');

	// Calculate width based on number of entries: (110px + 20px) * count
	$container.width((110 + 20) * $entries.length);
};