const reducer = (state, {type, payload}) => {
    switch (type) {
      case 'incrementByFive':
        return {...state,counter: payload + 5};
      case 'incrementByTen':
        return {...state,counter: payload + 10};
      case 'decrementByFive':
        return {...state,counter: payload - 5};
      case 'decrementByTen':
        return {...state,counter: payload - 10};
      default:
        return state
    }
  }

  export default reducer