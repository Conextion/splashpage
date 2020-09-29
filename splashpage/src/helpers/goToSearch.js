import { ROUTES } from '../consts';

const { searchResultsList } = ROUTES;

const goToSearch = (
  history,
  searchString,
  order,
  page,
  filter = [],
) => {
  const isOnlySpaces = !searchString.split(' ').find(item => item !== ' ');
  const querySearchString = isOnlySpaces ? 'q=' : `q=${searchString.split(' ').join('+')}`;
  const queryOrder = `order=${order.field}-${order.direction}`;
  const queryPage = `page=${page}`;
  const queryFilter = filter.map((item) => {
    if (item.field === 'price' || item.field === 'available') {
      return `${item.field}=${item.from}-${item.to}`;
    }


    return `${item.field}=${item.values.map((filterValue, i) => {
      if (i === 0) {
        return filterValue.split(' ').join('+');
      }

      return `-${filterValue.split(' ').join('+')}`;
    }).join('')}`;
  });
  const query = [
    querySearchString,
    queryOrder,
    queryPage,
    ...queryFilter,
  ].map((item, i) => {
    if (i === 0) {
      return item;
    }

    return `&${item}`;
  }).join('');
  history.pushWithRoute(`${searchResultsList}/${query}`);
};

export { goToSearch };
