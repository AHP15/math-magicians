import NavBar from './NavBar';

const Quote = () => (
  <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
    <NavBar />
    <h1 style={{ width: '100%', maxWidth: '700px', textAlign: 'center' }}>
      Mathematics is not about number, equations, computations,
      or algorithms: it is about understanding. -William Paul Thruston
    </h1>
  </div>
);
export default Quote;
