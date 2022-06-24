import { Header } from '../components/Header';
import { VideoPlayer } from '../components/VideoPlayer';
import { Sidebar } from '../components/Sidebar';
import { useParams } from 'react-router-dom';

export function Lessons() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        { slug ? <VideoPlayer slug={slug} /> : <div className='flex-1'></div>}
        <Sidebar />
      </main>
    </div>
  )
}