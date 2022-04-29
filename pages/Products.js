import Head from 'next/head'
import TableProducts from '../components/TableProducts'
import MenuHeader from '../components/MenuHeader'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Overcell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <div className="flex flex-col flex-1 w-full">
        <MenuHeader />
        <TableProducts />
      </div>
    </div>
  )
}
