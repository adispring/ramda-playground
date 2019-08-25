import * as R from 'ramda'
export const removeFirstWhen = R.curry((pred, list) =>
  R.compose(
    R.ifElse(R.equals(-1), R.always(list), R.remove(R.__, 1, list)),
    R.findIndex(pred)
  )(list)
)
