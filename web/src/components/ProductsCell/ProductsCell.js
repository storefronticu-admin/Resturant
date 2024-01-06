import { AlertTriangle } from 'react-feather'
import styled from 'styled-components'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import List from 'src/components/List'
import Product from 'src/components/Product'
import Spinner from 'src/components/Spinner'
import SingleColumnWithImages from './SingleColumnWithImages'

export const QUERY = gql`
  query Products($type: ProductType) {
    products(type: $type) {
      id
      name
      description
      image
      price
      metadata
      type
    }
  }
`

export const Loading = () => (
  <Stack spacing={1}>
    {/* For variant="text", adjust the height via font-size */}
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

    {/* For other variants, adjust the size with `width` and `height` */}
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rounded" width={210} height={60} />
  </Stack>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  console.error(error.stack)

  return <h1> Error</h1>
}

export const Success = ({ products, setNavigation, navigation }) => {
  const [categories, setCategories] = React.useState([])
  const [featured, setFeatured] = React.useState([])
  const [whatsnew, setWhatsnew] = React.useState([])

  React.useEffect(() => {
    let categories = []
    let featured = []
    let whatsnew = []
    let navigation = []

    for (let index = 0; index < products.length; index++) {
      const element = products[index]
      categories.push(element.metadata.Category)
      navigation.push({
        name: element.metadata.Category,
        href: `#${element.metadata.Category}`,
        current: false,
      })
    }
    navigation.unshift({
      name: `What's New?`,
      href: '#new',
      current: false,
    })
    navigation.unshift({
      name: 'Featured',
      href: '#featured',
      current: false,
    })
    setNavigation(navigation)
    setCategories(categories)
    for (let index = 0; index < products.length; index++) {
      const element = products[index]
      whatsnew.push(element.metadata.New)
    }
    for (let index = 0; index < products.length; index++) {
      const element = products[index]
      featured.push(element.metadata.Category)
    }
    setFeatured(featured)
  }, [products])

  return (
    <>
      <SingleColumnWithImages
        id="featured"
        products={products.filter(
          (product) => product.metadata.Featured === 'true'
        )}
        title={'Featured'}
      />
      <SingleColumnWithImages
        id="new"
        products={products.filter((product) => product.metadata.New === 'true')}
        title={`What's New?`}
      />
      {categories.map(function (Category, i) {
        return (
          <SingleColumnWithImages
            id={Category}
            key={i}
            products={products.filter(
              (product) => product.metadata.Category === Category
            )}
            title={Category}
          />
        )
      })}
      {/* <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Whats new
        </h2>
        <p>
          {JSON.stringify(
            products.filter((product) => product.metadata.New === 'true')
          )}
        </p>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Featured
        </h2>
        <p>
          {JSON.stringify(
            products.filter((product) => product.metadata.Featured === 'true')
          )}
        </p>
        <ul>
          {categories.map(function (Category, i) {
            return (
              <>
                <h2
                  className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
                  key={Category}
                >
                  {Category}
                </h2>
                <p>
                  {JSON.stringify(
                    products.filter(
                      (product) => product.metadata.Category === Category
                    )
                  )}
                </p>
              </>
            )
          })}
        </ul>
      </div> */}
      {/* <div>
        <ul>
          {categories.map(function (Category, i) {
            return (
              <>
                <h1 key={Category}>{Category}</h1>
                <p>
                  {JSON.stringify(
                    products.filter(
                      (product) => product.metadata.Category === Category
                    )
                  )}
                </p>
              </>
            )
          })}
        </ul>
      </div> */}
      <h1>{JSON.stringify(products)}</h1>
    </>
  )
}
