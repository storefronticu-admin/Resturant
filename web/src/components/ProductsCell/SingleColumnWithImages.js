import styled from 'styled-components'

import { useAddToCart } from '../CartProvider'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function SingleColumnWithImages({ title, products }) {
  return (
    <div className="bg-white py-6 sm:py-9">
      <div className="mx-auto max-w-7xl px-2 lg:px-4">
        <div className="mx-auto max-w-2xl  lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {title}
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p> */}
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {products.map((product) => (
              <article className="relative isolate flex flex-col gap-8  lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-32 lg:shrink-0">
                  <img
                    src={product.image}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <p className="text-gray-500">
                      £{(product.price / 100).toFixed(2)}
                    </p>
                    <a
                      // href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {product.metadata.Halal && 'Halal'}
                    </a>
                    <a
                      // href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {product.metadata.Vegan && 'Vegan'}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a
                      // href={post.href}
                      >
                        <span className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      {/* <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      /> */}
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          {/* <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a> */}
                        </p>
                        {/* <p className="text-gray-600">{post.author.role}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Wrapper = styled.figure`
  &:hover {
    cursor: pointer;
  }

  &:hover ${Image} {
    transform: scale(1.125);
    transition: transform 200ms;
  }
`
