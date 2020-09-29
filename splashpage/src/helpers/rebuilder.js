import placeholderImg from '../assets/images/placeholder.png';
import { dateInLastWeek } from './index';

const rebuildInventoriesToLocations = (inventories) => {
  const rebuildData = inventories.map((item) => {
    const filtered = inventories.filter(inv => inv.warehouse.locationArea
      === item.warehouse.locationArea);

    return JSON.stringify(filtered);
  });

  const t = [...new Set(rebuildData)];
  const rebuildT = t.map(item => JSON.parse(item));
  const finalData = rebuildT.map(item => ({
    name: item[0].warehouse.locationArea,
    value: item.reduce((acc, value) => acc + value.available, 0),
  }), {});

  return finalData;
};

const rebuildPriceRangeForChart = (priceRange, withRoi) => {
  const labels = priceRange.map((item) => {
    if (item.from === item.to) {
      return `${item.from}`;
    }
    if (item.to === null) {
      return `>${item.from}`;
    }

    return `${item.from}-${item.to}`;
  });
  const prices = priceRange.map(item => item.price);
  const roi = withRoi ? priceRange.map(item => Number(item.roi.toFixed(1))) : [];

  return {
    labels,
    prices,
    roi,
  };
};

const rebuildInventoriesToPrices = inv => inv.reduce((acc, item) => [
  ...acc,
  ...item.priceRange,
], []);

const rebuildObjectNameToString = (name) => {
  const nameWithUpFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);
  const rebuildedArr = nameWithUpFirstLetter.match(/[A-Z][a-z]+/g);
  const finalArr = rebuildedArr.join(' ');
  if (finalArr === 'Estimated Delivery Time') {
    return 'Est Delivery Time';
  }

  return finalArr;
};

const rebuildAdditionalInfoCart = (item) => {
  const objectToArray = Object.entries(item);
  const filtereToAdditional = objectToArray.filter(name => name[0] === 'freightCharges'
  || name[0] === 'freightType'
  || name[0] === 'estimatedDeliveryTime'
  || name[0] === 'estimatedFreightCharges'
  || name[0] === 'finalFreightCharges');
  const replaceNull = filtereToAdditional.filter(filtered => filtered[1]);

  return replaceNull.map(replaced => ({
    label: rebuildObjectNameToString(replaced[0]),
    value: replaced[0] === 'freightCharges' ? `$${replaced[1].toFixed(2)}` : replaced[1],
  }));
};

const getAvatarByName = (name) => {
  const nameToArray = name.split(' ');
  const secondLetter = nameToArray[1] ? `${nameToArray[1][0].toUpperCase()}` : '';
  const avatar = `${nameToArray[0][0].toUpperCase()}${secondLetter}`;

  return avatar;
};

const decimalValue = (value) => {
  const splitString = String(value).split('');
  const reverseArray = splitString.map((item, i) => splitString[splitString.length - (i + 1)]);
  const newValue = reverseArray.reduce((acc, item) => {
    if (acc.length !== 0) {
      if (acc.replace(/,/g, '').length % 3 === 0 && acc.replace(',', '').length !== 9) {
        return `${acc},${item}`;
      }

      return `${acc}${item}`;
    }

    return item;
  }, '');

  const backReverse = newValue.split('').map((item, i) => newValue[newValue.length - (i + 1)]).join('');

  return `$${backReverse}`;
};

const rebuildFoundedProductToTable = docs => docs.map(item => ({
  ...item,
  name: item.title,
  sku: item.sku,
  slug: item.slug,
  isNewProduct: dateInLastWeek(item.createdAt),
  location: rebuildInventoriesToLocations(item.inventories),
  minValue: item.priceRange.reduce((min, range) => Math.min(min, range.from), 1),
  defaultQty: item.priceRange.reduce((min, range) => Math.min(min, range.from), 1),
  qty: item.inventories.reduce((acc, inventory) => acc + inventory.available, 0),
  price: item.priceRange,
  isNotify: item.isSubscribed,
  imgSrc: item.images && item.images.length ? item.images[0].url : placeholderImg,
  id: item.id,
}));

const rebuildUrlQueryToSearch = (q) => {
  const query = q.split('&');
  const querySearchString = query[0].split('+').join(' ').replace('q=', '');
  const queryOrderRebuild = query[1].replace('order=', '').split('-');
  const queryOrder = {
    field: queryOrderRebuild[0],
    direction: queryOrderRebuild[1],
  };
  const queryPage = Number(query[2].replace('page=', ''));
  const queryFiltersOnly = query.filter((item, i) => i !== 0 && i !== 1 && i !== 2);
  const rebuildedQueryFilters = queryFiltersOnly.map(item => item.split('=').map((filter, i) => {
    if (i === 1) { return filter.split('-').map(filterName => filterName.split('+').join(' ')); }

    return filter;
  }));
  const filterForSearch = rebuildedQueryFilters.map((item) => {
    if (item[0] === 'price' || item[0] === 'available') {
      const range = item[1];

      return {
        field: item[0],
        op: 'between',
        from: range[0],
        to: range[1],
      };
    }

    return {
      field: item[0],
      op: 'in',
      values: item[1],
    };
  });

  return {
    querySearchString,
    queryPage,
    filterForSearch,
    queryOrder,
  };
};

const getNewCheckBoxFiltersOnSearch = ({
  label,
  name,
  filterForSearch,
}) => {
  const findAlreadyCheckedLabel = filterForSearch
    .find(item => item.field === label);
  if (findAlreadyCheckedLabel) {
    const { values } = findAlreadyCheckedLabel;
    const findAlreadyCheckedName = values.find(item => item === name);
    if (findAlreadyCheckedName) {
      const newValues = values.filter(item => item !== name);
      const emptyFilter = !newValues.length;
      if (emptyFilter) {
        return filterForSearch.filter(item => item.field !== label);
      }

      return filterForSearch.map((item) => {
        if (item.field === label) {
          return {
            ...item,
            values: newValues,
          };
        }

        return item;
      });
    }
    const newValues = [...values, name];

    return filterForSearch.map((item) => {
      if (item.field === label) {
        return {
          ...item,
          values: newValues,
        };
      }

      return item;
    });
  }

  return [...filterForSearch, {
    field: label,
    op: 'in',
    values: [name],
  }];
};

const getNewRangesFiltersOnSearch = ({
  label,
  value,
  filterForSearch,
  data,
}) => {
  const { min, max } = value;
  const { search: { filter: { parameters } } } = data;
  const findDefaultMin = parameters
    .find(item => item.name === label)
    .options
    .map(item => item.value)
    .reduce((acc, val) => (Number(acc) < Number(val) ? acc : val));
  const findDefaultMax = parameters
    .find(item => item.name === label)
    .options
    .map(item => item.value)
    .reduce((acc, val) => (Number(acc) > Number(val) ? acc : val));
  const isValueEqualToDefault = min === Number(findDefaultMin)
    && max === Number(findDefaultMax);
  const findAlreadyCheckedLabel = filterForSearch
    .find(item => item.field === label);
  if (findAlreadyCheckedLabel) {
    if (isValueEqualToDefault) {
      return filterForSearch.filter(item => item.field !== label);
    }

    return filterForSearch.map((item) => {
      if (item.field === label) {
        return {
          ...item,
          from: min,
          to: max,
        };
      }

      return item;
    });
  }

  return [...filterForSearch, {
    field: label,
    op: 'between',
    from: min,
    to: max,
  }];
};

export {
  rebuildInventoriesToLocations,
  rebuildPriceRangeForChart,
  rebuildInventoriesToPrices,
  rebuildObjectNameToString,
  rebuildAdditionalInfoCart,
  getAvatarByName,
  decimalValue,
  rebuildFoundedProductToTable,
  rebuildUrlQueryToSearch,
  getNewCheckBoxFiltersOnSearch,
  getNewRangesFiltersOnSearch,
};
