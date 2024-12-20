import "./app.css"
import { Route, Router } from "wouter"
import Header from "./layout/header"
import Footer from "./layout/footer"
import Biography, { BiographyFull } from "./pages/biography"
import MyGroup, { MyGroupFull } from "./pages/my-group"
import Hobbies, { HobbiesFull } from "./pages/hobbies"
import InterestingStuff, {
  InterestingStuffFull,
} from "./pages/interesting-stuff"
import NotFound from "./pages/not-found"
import WeatherWidget from "./components/weather-widget"
import ContextMenu from "./layout/context-menu"
import Forms from "./pages/forms"

export function App() {
  return (
    <div class="flex flex-col min-h-screen">
      <ContextMenu />
      <Router>
        <Route path="/">
          <Header pagename="Домашня строрінка" />
          <main class="flex-1 container mx-auto p-4 space-y-8 max-w-screen-xl">
            <WeatherWidget />
            <Biography />
            <MyGroup />
            <Hobbies />
            <InterestingStuff />
          </main>
          <Footer />
        </Route>

        <Route path="/biography">
          <Header pagename="Біографія" />
          <main class="flex-1 container mx-auto p-4 max-w-screen-lg">
            <BiographyFull />
          </main>
          <Footer />
        </Route>

        <Route path="/my-group">
          <Header pagename="Моя група" />
          <main class="flex-1 container mx-auto p-4 max-w-screen-lg">
            <MyGroupFull />
          </main>
          <Footer />
        </Route>

        <Route path="/interesting-stuff">
          <Header pagename="Цікавинки" />
          <main class="flex-1 container mx-auto p-4 max-w-screen-lg">
            <InterestingStuffFull />
          </main>
          <Footer />
        </Route>

        <Route path="/hobbies">
          <Header pagename="Мої захоплення" />
          <main class="flex-1 container mx-auto p-4 max-w-screen-lg">
            <HobbiesFull />
          </main>
          <Footer />
        </Route>

        <Route path="/forms">
          <main class="flex-1 container mx-auto p-4 max-w-screen-lg">
            <Forms />
          </main>
        </Route>

        <Route path={"/404"}>
          <main class="flex-1 container mx-auto p-4 max-w-screen-lg">
            <NotFound />
          </main>
        </Route>
      </Router>
    </div>
  )
}
