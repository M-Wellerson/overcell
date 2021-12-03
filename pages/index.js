import Head from 'next/head'
import Main from '../components/Main'
import MenuHeader from '../components/MenuHeader'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Overcell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col flex-1 w-full">
        <MenuHeader />
        <SideBar />
        <Main />
      </div>
    </div>
  )
}
