import Greeting from '@lib/Greeting'

export default function Index() {
  return <Greeting>Hello! 👋</Greeting>
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
