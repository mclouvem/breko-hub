import React, { PropTypes } from 'react'
import { prefetch, defer } from 'react-fetcher'
import { isBrowser } from 'app/utils/predicates'

const fooFetchDataCreator = () => ({
  type: 'FOO_ROUTE_FETCH',
  payload: {
    example: isBrowser() ? 'data-from-browser' : 'data-from-server',
  },
})

const clietOnlyCreator = () => ({
  type: 'FOO_ROUTE_FETCH_CLIENT_ONLY',
  payload: {
    example: 'Client Only Data',
  },
})

@prefetch(({ store }) => store.dispatch(fooFetchDataCreator()))
@defer(({ store }) => store.dispatch(clietOnlyCreator()))
class FooRoute extends React.Component {

  static propTypes = {
    example: PropTypes.object,
  };

  render() {
    const { example } = this.props.example
    return (
      <section>
        Foo
        <h4> { example } </h4>
      </section>
    )
  }
}

export default FooRoute
