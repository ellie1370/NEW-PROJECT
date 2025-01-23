import "./App.css";
import "./styles/reset.css";
import About from "./Components/About.jsx";
import Navbar from "./Components/Navbar.jsx";
import image_man from "./assets/boy-picture.jpg";
import image_woman from "./assets/girl-cartoon.jpg";
import Card from "./Components/Card.jsx";

const App =() => {
  const profiles= [
    {
      img: image_man,
      name: 'John Doe',
      title:'Software Engineer',
      email:'a@a.com'
    },
    {
      img: image_woman,
      name: 'Lily Smith',
      title:'Software Enginner',
      email:'b@b.com'
    }
  ]
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <div className="profile-cards">
            {profiles.map((profile) => (
              <Card key={profile.email} {...profile} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export default App;