import Link from 'next/link'

const RouterItem = ({ children, href, target }) => {
  return (
    <Link href={href} passHref>
      <a target={target}>{children}</a>
    </Link>
  )
}

export default RouterItem
