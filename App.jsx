import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

export default function App() {
  function test() {}

  return (
    <div className='app'>
      <Header />

      <Main />

      <Footer name='Bar' today={new Date().getFullYear()} />
    </div>
  );
}
