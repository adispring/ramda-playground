import * as R from 'ramda'

import { searchItem, searchItemSub } from '../mock/search'
import { HighlightType } from '../constants/biz/proto'
import { SpanType } from '../constants/biz/conversation'
const { TITLE, SUB_TITLE } = HighlightType

const normalSpanCreator = (offset, length) => ({
  offset,
  length,
  spanType: SpanType.NORMAL
})

const transformToSpans = (highlights, text) => {
  const highlightsWithType = R.map(R.assoc('spanType', SpanType.HIGHLIGHT), highlights)
  let spans = []
  if (highlightsWithType.length === 1) {
    spans = highlightsWithType
  } else if (highlightsWithType.length > 1) {
    const [head, ...tail] = highlightsWithType
    spans = R.reduce(
      (acc, item) => {
        const last = R.last(acc)
        const lastEnd = last.offset + last.length - 1
        const hasNormalSpan = lastEnd + 1 < item.offset
        if (hasNormalSpan) {
          const span = normalSpanCreator(lastEnd + 1, item.offset - lastEnd - 1)
          return R.concat(acc, [span, item])
        } else {
          return R.concat(acc, [item])
        }
      },
      [head],
      tail
    )
  }
  const head = R.head(spans)
  const last = R.last(spans)
  if (head.offset > 0) {
    const span = normalSpanCreator(0, head.offset)
    spans.unshift(span)
  }
  const lastEndPlus1 = last.offset + last.length
  if (lastEndPlus1 < text.length) {
    const span = normalSpanCreator(lastEndPlus1, text.length - lastEndPlus1)
    spans.push(span)
  }

  console.log(highlights)
  console.log(spans)
  return spans
}

const formatSearchItem = ({ highlights, title, subtitle }) => {
  const type = R.pathOr(TITLE, [0, 'type'], highlights)
  const text = type === TITLE ? title : subtitle
  const spans = transformToSpans(highlights, text)
  return ({
    type,
    spans,
    highlights,
    title,
    subtitle
  })
}

const transformedSpans = transformToSpans(searchItem.highlights, searchItem.title)

const formatedItem = formatSearchItem(searchItem)
const formatedSubItem = formatSearchItem(searchItemSub)

console.log(formatedItem)


